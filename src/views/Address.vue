<template>
  <div class="address">
    <Header :isLeft="true" title="选择收货地址" />
    <div class="city_search">
      <div class="search">
        <span class="city" @click="$router.push('/city')">
          {{city}}
          <i class="fa fa-angle-down"></i>
        </span>
        <i class="fa fa-search"></i>
        <input type="text" v-model="search_val" placeholder="小区/写字楼/学校" />
      </div>
      <Location @click="selectAddress" :address="address" />
    </div>
    <div class="area">
      <ul class="area_list" v-for="(items,index) in areaList" :key="index">
        <li @click="selectAddress(items)">
          <h4>{{items.name}}</h4>
          <p>{{items.district}}{{items.address}}</p>
        </li>
      </ul>
    </div>
    <!-- <header v-if="historytitle" class="pois_search_history">搜索历史</header>
    <ul class="getpois_ul">
      <li v-for="(items,index) in areaList" :key="index" @click="nextpage(index, geohash)">
        <h4 class="pois_name ellipsis">{{items.name}}</h4>
        <p class="pois_address ellipsis">{{items.district}}{{items.address}}</p>
      </li>
    </ul>
    <footer v-if="historytitle&&areaList.length" class="clear_all_history" @click="clearAll">清空所有</footer>
    <div class="search_none_place" v-if="placeNone">很抱歉！无搜索结果</div>-->
  </div>
</template>

<script>
import Header from "../components/public/Header";
import Location from "../components/city/location";
import { getStore, setStore, removeStore } from "../config/mUtils";
export default {
  name: "Address",
  components: {
    Header,
    Location
  },
  data() {
    return {
      city: "", //当前的城市；
      search_val: "",
      areaList: "", //搜索城市列表
      placeHistory: [], //历史搜索记录
      historytitle: true,
      placeNone: false
    };
  },
  watch: {
    search_val() {
      this.searchPlace();
    }
  },
  methods: {
    searchPlace() {
      // console.log(this.search_val);
      //高德提供方法
      const self = this;
      AMap.plugin("AMap.Autocomplete", function() {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: "self.city"
        };
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(self.search_val, function(status, result) {
          // 搜索成功时，result即是对应的匹配数据
          console.log(result);
          self.areaList = result.tips;
        });
        this.initData();
      });
    },
    initData() {
      //获取搜索历史记录
      if (getStore("placeHistory")) {
        this.areaList = JSON.parse(getStore("placeHistory"));
      } else {
        this.areaList = [];
      }
    },
    /**
     * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
     * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
     */
    nextpage(index, geohash) {
      let history = getStore("placeHistory");
      let choosePlace = this.areaList[index];
      if (history) {
        let checkrepeat = false;
        this.placeHistory = JSON.parse(history);
        this.placeHistory.forEach(item => {
          if (item.geohash == geohash) {
            checkrepeat = true;
          }
        });
        if (!checkrepeat) {
          this.placeHistory.push(choosePlace);
        }
      } else {
        this.placeHistory.push(choosePlace);
      }
      setStore("placeHistory", this.placeHistory);
      this.$router.push({ path: "/msite", query: { geohash } });
    },
    clearAll() {
      removeStore("placeHistory");
      this.initData();
    },
    selectAddress(items) {
      if (items) {
        //设置地址,保存到vuex中进行管理
        this.$store.dispatch(
          "setAddress",
          items.district + items.address + items.name
        );
      } else {
        this.$store.dispatch("setAddress", this.address);
      }
      //存储完跳转到home页面
      this.$router.push("/home");
    }
  },
  computed: {
    address() {
      return this.$store.getters.location.formattedAddress;
    }
  },
  //在路由到组件前
  beforeRouteEnter(to, from, next) {
    console.log(to.params.city);
    next(vm => {
      vm.city = to.params.city;
    });
  }
};
</script>



<style scoped>
.address {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}

.city_search {
  background-color: #fff;
  padding: 10px 20px;
  color: #333;
}

.search {
  background-color: #eee;
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  line-height: 40px;
}
.search .city {
  padding: 0 10px;
}
.city i {
  margin-right: 10px;
}
.search input {
  margin-left: 5px;
  background-color: #eee;
  outline: none;
  border: none;
}
.pois_search_history {
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  padding-left: 0.5rem;
  /* @include font(0.475rem, 0.8rem); */
}
.getpois_ul {
  background-color: #fff;
  border-top: 1px solid #e4e4e4;
}
.pois_address {
  width: 90%;
  margin: 0 auto 0.55rem;
  /* @include sc(0.45rem, #999); */
}
.getpois_ul > li {
  margin: 0 auto;
  padding-top: 0.65rem;
  border-bottom: 1px solid #e4e4e4;
}
.pois_name {
  margin: 0 auto 0.35rem;
  width: 90%;
  /* @include sc(0.65rem, #333); */
}
.search_none_place {
  margin: 0 auto;
  /* @include font(0.65rem, 1.75rem); */
  color: #333;
  background-color: #fff;
  text-indent: 0.5rem;
}
.clear_all_history {
  /* @include sc(0.7rem, #666); */
  text-align: center;
  line-height: 2rem;
  background-color: #fff;
}
</style>