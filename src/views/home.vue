<template>
  <div class="home">
    <!-- v-if="flag" :class="flag ? 'header' :'headerA'" -->
    <!--    饿了吗头部-->
    <div v-if="flag">
      <div class="header">
        <div class="address_map" @click="$router.push({name: 'address',params: {city: city}})">
          <i class="fa fa-map-marker"></i>
          <span>{{address}}</span>
          <i class="fa fa-sort-desc"></i>
        </div>
      </div>
      <div class="search_wrap" :class="{'fixedview' :showFilter}">
        <div class="shop_search" @click="$router.push('/search')">
          <i class="fa fa-search"></i>
          搜索饿了么商家 商家名称
        </div>
      </div>
    </div>
    <!--    美团头部-->
    <div v-else>
      <div class="mt-header">
        <div class="mt-header-left">
          <span>西安</span>
          <i class="fa fa-chevron-down"></i>
        </div>
        <div class="mt-header-search">
          <i class="fa fa-search"></i>
          <span>输入商家/品类/商圈</span>
        </div>
        <div class="mt-header-right">
          <i class="fa fa-user-o"></i>
          <span>我的</span>
        </div>
      </div>
    </div>
    <!-- 分类按钮 -->
    <div id="entries">
      <ItemIcon :entries="entries" />
    </div>
    <!-- 轮播图 -->
    <div id="container" v-if="flag">
      <Swiper :swipeImgs="swipeImgs" />
    </div>
    <!-- 品质联盟 -->
    <div  v-if="flag" class="setmeal" @click="$router.push('/setmeal')">
      <div class="setmeal-pz">
        <img src="../assets/pz.png" alt="">
      </div>
    </div>
    <!-- 推荐商家 -->
    <div class="shoplist-title" v-if="flag">推荐商家</div>
    <!-- 导航 -->
    <filterView :filterdata="filterdata" @searchFixed="showFilterview" @updata="updata"></filterView>
    <!-- 商家信息 -->
    <div class="shopList">
      <mt-loadmore
        :top-method="loadData"
        :bottom-method="loadMore"
        :bottom-all-loaded="allLoaded"
        :auto-file="false"
        :bottomPullText="bottomPullText"
        ref="loadmore"
      >
        <homeShop v-for="(item,index) in restaurants" :key="index" :restaurant="item.restaurant" />
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Loadmore } from "mint-ui";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import Swiper from "../components/public/Swiper";
import ItemIcon from "../components/home/Itemicon";
import filterView from "../components/home/filterView";
import homeShop from "../components/home/Homeshoplist";
export default {
  name: "home",
  components: {
    filterView,
    homeShop,
    Swiper,
    ItemIcon
  },
  computed: {
    ...mapState(["flag"]),
    address() {
      //在vuex中获取管理地址的最新状态
      return this.$store.getters.address;
    },
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  },
  data() {
    return {
      swipeImgs: [],
      entries: [],
      filterdata: "",
      showFilter: false,
      page: 1,
      size: 5,
      restaurants: [], //存放所有商家
      allLoaded: false,
      bottomPullText: "上拉加载更多",
      data: null
      // flag: true
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("/api/profile/shopping").then(res => {
        // console.log(res.data);
        this.swipeImgs = res.data.swipeImgs;
        this.entries = res.data.entries;
      });
      this.$axios("/api/profile/filter").then(res => {
        console.log(res.data);
        this.filterdata = res.data;
      });
      //拉取商家信息
      this.loadData();
    },
    showFilterview(isShow) {
      this.showFilter = isShow;
      console.log(this.showFilter);
    },
    updata(condation) {
      // console.log(condation);
      this.data = condation;
      this.loadData();
    },
    loadData() {
      this.page = 1;
      this.allLoaded = false;
      this.bottomPullText = "上拉加载更多";
      //拉取商家信息
      this.$axios
        .post(`/api/profile/restaurants/${this.page}/${this.size}`, this.data)
        .then(res => {
          // console.log(res.data);
          this.$refs.loadmore.onTopLoaded();
          this.restaurants = res.data;
        });
    },
    loadMore() {
      if (!this.allLoaded) {
        this.page++;
        //拉取商家信息
        this.$axios
          .post(`/api/profile/restaurants/${this.page}/${this.size}`, this.data)
          .then(res => {
            // 加载完之后重新渲染
            this.$refs.loadmore.onBottomLoaded();
            if (res.data.length > 0) {
              res.data.forEach(item => {
                this.restaurants.push(item);
              });
              if (res.data < this.size) {
                //数据为空
                this.allLoaded = true;
                this.bottomPullText = "没有更多了哦";
              }
            } else {
              //数据为空
              this.allLoaded = true;
              this.bottomPullText = "没有更多了哦";
            }
          });
      }
    }
  }
};
</script>



<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.header,
.search_wrap {
  background-color: #009eef;
  padding: 10px 16px;
}
.header .address_map {
  color: #fff;
  font-weight: bold;
}
.address_map i {
  margin: 0 3px;
  font-size: 18px;
}
.address_map span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.search_wrap .shop_search {
  /* margin-top: 10px; */
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}
.search_wrap {
  position: sticky;
  top: 0px;
  z-index: 999;
  box-sizing: border-box;
}
.swiper {
  height: 100px;
}
.swiper img {
  width: 100%;
  height: 100px;
}
.setmeal{
  width: 100%;
  height: 7rem;
  margin-top: .6rem;
  background-color: #fff;
}
.setmeal .setmeal-pz{
  width: 96%;
  height: 100%;
  margin: 0 auto;
}
.setmeal .setmeal-pz img{
  width: 100%;
  height: 100%;
}
.entries {
  background: #fff;
  height: 47.2vw;
  text-align: center;
  overflow: hidden;
}
.foodentry {
  width: 20%;
  float: left;
  position: relative;
  margin-top: 2.933333vw;
}
.foodentry .img_wrap {
  position: relative;
  display: inline-block;
  width: 12vw;
  height: 12vw;
}
.img_wrap img {
  width: 100%;
  height: 100%;
}
.foodentry span {
  display: block;
  color: #666;
  font-size: 0.32rem;
}
/* 推荐商家 */
.shoplist-title {
  display: flex;
  align-items: flex;
  justify-content: center;
  height: 9.6vw;
  line-height: 9.6vw;
  font-size: 16px;
  color: #333;
  background: #fff;
}
.shoplist-title:after,
.shoplist-title:before {
  display: block;
  content: "一";
  width: 5.333333vw;
  height: 0.266667vw;
  color: #999;
}
.shoplist-title:before {
  margin-right: 3.466667vw;
}
.shoplist-title:after {
  margin-left: 3.466667vw;
}

.fixedview {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 999;
}

.mint-loadmore {
  height: calc(100% - 95px);
  overflow: auto;
}
/*美团头部*/
.mt-header {
  height: 3.01rem;
  color: #fff;
  background: #06c1ae;
  border-bottom: 1px solid #21897d;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
}
.mt-header .mt-header-left {
  margin: 0 0.8rem;
  font-size: 1rem;
}
.mt-header .mt-header-left i {
  margin-left: 0.1rem;
}
.mt-header .mt-header-right {
  margin: 0 0.8rem;
  font-size: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mt-header .mt-header-right i {
  font-size: 1.4rem;
  display: block;
  margin-bottom: 0.2rem;
}
.mt-header .mt-header-search {
  flex: 1;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.15);
  height: 2rem;
  line-height: 2rem;
  position: relative;
  margin-top: 0.1rem;
}
.mt-header .mt-header-search i {
  margin-left: 0.6rem;
}
.mt-header .mt-header-search span {
  font-size: 0.8rem;
  color: #68dbce;
  margin-left: 0.3rem;
}
</style>
