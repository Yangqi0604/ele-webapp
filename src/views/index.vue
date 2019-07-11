<template>
  <div class="index">
    <router-view></router-view>
    <footer-data :data="tabbarData" />
  </div>
</template>

<script>
import Footerdata from "../components/public/FooterBar";
export default {
  data() {
    return {
      tabbarData: [
        { title: "首页", icon: "home", path: "/home" },
        { title: "订单", icon: "file-text-o", path: "/order" },
        { title: "我的", icon: "user", path: "/me" }
      ]
    };
  },
  components: {
    "footer-data": Footerdata
  }
};
</script>

<style>
</style>
