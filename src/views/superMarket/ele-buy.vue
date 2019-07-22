<template>
<div class="wai">
  <router-view/>
  <ele-buy-foot></ele-buy-foot>
</div>
</template>

<script>
import EleBuyFoot from "@/components/ele-buy/ele-buy-foot.vue"
export default {
  name:"ele-buy",
  components:{
    EleBuyFoot
  }
};
</script>

<style scoped>
  .wai{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
</style>
