<template>
  <div class="city">
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input v-model="city_val" type="text" placeholder="输入城市名" />
      </div>
      <button @click="$router.push({name:'address',params:{city:city}})">取消</button>
    </div>
    <div style="height:100%" v-if="searchList.length==0">
      <div class="location">
        <location @click="selecity({name:city})" :address="city" />
      </div>
      <!-- cnpm install better-scroll -S 安装better-scroll依赖 解决滚动问题-->
      <alphabet @selecity="selecity" ref="allcity" :cityInfo="cityInfo" :keys="keys" />
    </div>
    <div class="search_list" v-else>
      <ul>
        <li @click="selecity(item)" v-for="(item,index) in searchList" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import location from "../components/city/location";
import alphabet from "../components/city/alphabet";
export default {
  name: "city",
  components: {
    location,
    alphabet
  },
  computed: {
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  },
  data() {
    return {
      city_val: "",
      cityInfo: "",
      keys: [],
      allcities: [],
      searchList: []
    };
  },
  created() {
    this.getcityInfo();
  },
  watch: {
    city_val() {
      // console.log(this.city_val);
      this.searchcity();
    }
  },
  methods: {
    getcityInfo() {
      this.$axios("/posts/cities")
        .then(res => {
          // console.log(res.data);
          this.cityInfo = res.data;
          // console.log(this.cityInfo);
          //处理key,计算key
          this.keys = Object.keys(res.data);
          console.log(this.keys);
          //"hotCities"这个k需要移除
          this.keys.pop();
          //keys排序
          this.keys.sort();
          //在vue的官网中对ref的介绍有一点特别重要的，尽管存在 prop 和事件，有的时候你仍可能需要在 JavaScript
          //里直接访问一个子组件。为了达到这个目的，你可以通过 ref 特性为这个子组件赋予一个 ID 引用。
          //<base-input ref="usernameInput"></base-input>
          //现在在你已经定义了这个 ref 的组件里，你可以使用：this.$refs.usernameInput来访问这个 <base-input> 实例，以便不时之需
          //在这里就用到了这一特性
          //因为要将更新后的数据进行一个展示，所以在vue中提供了一个方法，nextTick（）
          this.$nextTick(() => {
            this.$refs.allcity.initScroll();
          });

          //存储所有城市用来搜索过滤
          this.keys.forEach(key => {
            // console.log(key);
            this.cityInfo[key].forEach(city => {
              this.allcities.push(city);
            });
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    selecity(city) {
      // console.log(city);
      this.$router.push({ name: "address", params: { city: city.name } });
    },
    searchcity() {
      if (!this.city_val) {
        //搜索框为空，则数组置空
        this.searchList = [];
      } else {
        //如果不为空，存到seachlist当中
        this.searchList = this.allcities.filter(item => {
          return item.name.indexOf(this.city_val) != -1;
        });
        // 打印搜索查询的结果
        // console.log(this.searchList);
      }
    }
  }
};
</script>



<style scoped>
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}
.search_wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
}
.search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}
.search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: 5px;
}
.search_wrap button {
  background-color: white;
  border: none;
  outline: none;
  color: #009eef;
}

.location {
  background: #fff;
  padding: 8px 16px;
  height: 65px;
  box-sizing: border-box;
}

.search_list {
  position: fixed;
  top: 42px;
  background: #fff;
}
.search_list li {
  display: inline-block;
  width: 100%;
  padding: 10px 20px 10px 20px;
  border-bottom: 1px solid #eee;
}
</style>