<template>
  <div>
    <nav-item-header :itemList="itemList"></nav-item-header>
    <!-- 导航条 -->
    <nav-item-bar-title :filterdata="filterdata" @searchFixed="showFilterview" @updata="updata"
             style="position: sticky; top: 3rem; z-index: 100; background-color: #fff"
    />
    <!-- 商铺列表 -->
    <div class="shopList" style="padding-top: 3rem" >
      <mt-loadmore
        :top-method="loadData"
        :bottom-method="loadMore"
        :bottom-all-loaded="allLoaded"
        :auto-file="false"
        :bottomPullText="bottomPullText"
        ref="loadmore"
      >
        <home-shop-list
          v-for="(item,index) in restaurants"
          :key="index"
          :restaurant="item.restaurant"
        />
      </mt-loadmore>
    </div>
  </div>
    
</template>

<script>
  import { Loadmore } from "mint-ui";
  import NavItemHeader from '@/components/public/NavItemHeader.vue'
  import NavItemBarTitle from '@/components/public/NavItemBarTitle.vue'
  import Homeshoplist from '@/components/home/Homeshoplist.vue'
export default {
  name:"ele-food",
  components:{
    "nav-item-header":NavItemHeader,
    "nav-item-bar-title":NavItemBarTitle,
    "home-shop-list":Homeshoplist
  },
  data(){
    return {
      page: 1,
      size: 5,
      restaurants: [],
      allLoaded: false,
      bottomPullText: "上拉加载更多",
      title: "",
      SearchBar: false,
      showFilter: false,
      data: null,
      filterdata: "",
      flag: false ,
      itemList:[
        {
          "name":"全部",
          "path":"/"
        },
        {
          "name":"面食粥点",
          "path":"/"
        },
        {
          "name":"简餐便当",
          "path":"/"
        },
        {
          "name":"汉堡披萨",
          "path":"/"
        },
        {
          "name":"香锅冒菜",
          "path":"/"
        },
        {
          "name":"小吃炸串",
          "path":"/"
        },
        {
          "name":"地方菜系",
          "path":"/"
        },
        {
          "name":"日韩料理",
          "path":"/"
        },
        {
          "name":"轻食简餐",
          "path":"/"
        }
      ]
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("/profile/shopping").then(res => {
        console.log(res.data);
        this.entries = res.data.entries;
        this.swipeImgs = res.data.swipeImgs;
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
      // console.log(this.showFilter);
    },
    updata(condation) {
      // console.log(condation);
      this.data = condation;
      this.loadData();
    },
    loadData() {
      //上拉加载数据
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
      //下拉刷新数据
      if (!this.allLoaded) {
        this.page++;
        //拉取商家信息
        this.$axios
          .post(`/profile/restaurants/${this.page}/${this.size}`, this.data)
          .then(res => {
            //数据加载之后重新渲染页面
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

}
</script>

<style scoped>

</style>
