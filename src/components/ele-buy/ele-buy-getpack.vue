<template>
  <div class="errandCompany">
    <div class="headTab">
      <div class="left-tab">
        <div class="errand" @click="quna">
          <router-link tag="div" to="/ele-buy/eleBuyHomepage">代购</router-link>
          <div :class="cla1"></div>
        </div>
        <div class="pick-up" @click="quna1">
          <router-link tag="div" to="/ele-buy/eleBuyGetpack">取送件</router-link>
          <div :class="cla"></div>
        </div>
      </div>
    </div>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name: "eleBuyGetpack",
  mounted(){
    this.init()
  },
  data() {
    return {
      Cname: "searchBox",
      gai: false,
      cla:"btmLine addline",
      cla1:"btmLine",
    };
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
    quna(index) {
      this.cla="btmLine addline"
      this.cla1=""
    },
    quna1(){
      this.cla1="btmLine addline"
      this.cla=""
    },
    init(){
      let map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 10
      })
    }
  }
}
</script>

<style scoped>
#container{
  width: 100%;
  height: 100%;
}
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
  /* background-color: #fff; */
  margin-top: 0.3125rem;
}
.addline {
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
  font-size: 0.875rem;
  padding: 0.3125rem 0.5rem;
  text-align: center;
}
.headTab .right-tab .gps i {
  margin-right: 0.1875rem;
}
</style>