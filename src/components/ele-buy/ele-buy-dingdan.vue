<template>
  <div id="wai">
    <div class="pic"></div>
    <div class="tishi">您还没有跑腿代购的订单哦</div>
    <router-link tag="div" to="/ele-buy" class="gotosee">去看看</router-link>
  </div>

</template>

<script>
export default {
  name: "eleBuyDingdan",
}
</script>

<style scoped>
  #wai{
    width: 100%;
    display:flex;
    flex-direction: column;
    flex:1;
    background-color: #fff;
  }
  .pic{
    width: 11.71875rem;
    height: 8.53125rem;
    margin: 11.5rem auto 0;
    background-image: url('https://shadow.elemecdn.com/faas/bmbs-cdn/static/bmbs_h5/noorderlist.png');
    background-position: center;
    background-size: 100%;
  }
  .tishi{
    margin: 1.5rem auto 0;
    color: rgba(0, 0, 0, .54);
    font-size: 13px;
  }
  .gotosee{
    padding:.5625rem 2.5rem;
    margin:.9375rem auto;
    background-color: #00E066;
    color: #fff;
    border-radius: .3125rem;
  }
</style>
