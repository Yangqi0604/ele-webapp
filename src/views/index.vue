<template>
  <div class="index">
    <router-view></router-view>
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from "../components/public/FooterBar";
export default {
  components: {
    FooterBar
  }
};
</script>

<style>
</style>
