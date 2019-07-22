<template>
  <div class="errandCompany">
    <div class="headTab">
      <div class="left-tab">
        <div class="errand" @click="quna">
          <router-link tag="div" to="/ele-buy/eleBuyHomepage">代购</router-link>
          <div :class="cla"></div>
        </div>
        <div class="pick-up" @click="quna1">
          <router-link tag="div" to="/ele-buy/eleBuyGetpack">取送件</router-link>
          <div :class="cla1" ></div>
        </div>
      </div>
      <div class="right-tab">
        <div class="gps">
          <i class="fa fa-map-marker"></i>
          <div class="gps-word">{{address.substring(21)}}</div>
        </div>
      </div>
    </div>
    <div :class="Cname">
      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="今天想买些什么？" @click="toorder"/>
        <div class="order">去下单</div>
      </div>
    </div>
    <div class="mengceng" @click="tosearch" v-show="gai"></div>
  </div>
</template>

<script>
export default {
  name: "eleBuyHomepage",
  data() {
    return {
      Cname: "searchBox",
      gai: false,
      cla:"btmLine",
      cla1:"",
    };
  },
  computed:{
    address(){
      return this.$store.getters.address
    }
  },
  methods: {
    toorder() {
      this.Cname = "searchBox fixed";
      this.gai = true;
    },
    tosearch() {
      this.gai = !this.gai;
      this.Cname = "searchBox";
    },
    quna() {
      this.cla="btmLine addline"
      this.cla1=""
    },
    quna1(){
      this.cla1="btmLine addline"
      this.cla=""
    }
  }
};
</script>

<style scoped>
.errandCompany {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.headTab {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.625rem;
  background-color: #0097ff;
  font-size: 1rem;
  border-bottom: 0.03125rem solid rgb(196, 194, 194);
  position: relative;
}
.headTab .left-tab {
  margin-left: 1.875rem;
  display: flex;
  color: #fff;
}
.headTab .left-tab > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.875rem;
}
.headTab .left-tab .btmLine {
  width: 1.25rem;
  height: 0.15625rem;
  background-color: #fff;
  margin-top: 0.3125rem;
}
.addline{
  background-color: #fff;
}
.headTab .right-tab {
  position: absolute;
  top: 0.3125rem;
  right: 0; 
}
.headTab .right-tab .gps {
  margin-right: 1.25rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  padding: 0.3125rem 0.5rem;
  text-align: center;
}
.headTab .right-tab .gps i {
  margin-right: 0.1875rem;
}
.searchBox {
  width: 100%;
  background-color: #0097ff;
  padding-top: 1.25rem;
}
.fixed {
  position: fixed;
  top: 0;
  padding: 0.625rem 0;
}
.searchBox .search {
  width: 95%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 0.3125rem;
  position: relative;
}
.searchBox .search i {
  position: absolute;
  top: 1.25rem;
  left: 0.4375rem;
  font-size: 1.125rem;
  color: gray;
}
.searchBox .search input {
  width: 60%;
  padding: 1.25rem 0 1.25rem 1.875rem;
  border: none;
  outline: none;
  border-radius: 0.3125rem;
  font-size: 1.125rem;
}
.searchBox .search .order {
  position: absolute;
  right: 0.625rem;
  top: 0.9375rem;
  padding: 0.625rem 0.625rem;
  background-color: #0097ff;
  border-radius: 0.3125rem;
  color: #fff;
}
.mengceng {
  width: 100%;
  flex: 1;
  background: rgba(0, 0, 0, 0.4);
}
</style>
