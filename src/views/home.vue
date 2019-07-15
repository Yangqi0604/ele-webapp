<template>
  <div class="home">
    <!-- v-if="flag" :class="flag ? 'header' :'headerA'" -->
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
    <!-- 分类按钮 -->
    <div id="entries">
      <ItemIcon :entries="entries" />
    </div>
    <!-- 轮播图 -->
    <div id="container">
      <Swiper :swipeImgs="swipeImgs" />
    </div>
    <!-- 推荐商家 -->
    <div class="shoplist-title">推荐商家</div>
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
      data: null,
      flag: false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("/profile/shopping").then(res => {
        // console.log(res.data);
        this.swipeImgs = res.data.swipeImgs;
        this.entries = res.data.entries;
      });
      this.$axios("/profile/filter").then(res => {
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
        .post(`/profile/restaurants/${this.page}/${this.size}`, this.data)
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
          .post(`/profile/restaurants/${this.page}/${this.size}`, this.data)
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
</style>