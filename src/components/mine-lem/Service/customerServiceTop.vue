<template>
    <div class="topService">
        <router-link to="" class="guangGao">
          <span class="fa fa-bullhorn" aria-hidden="true"></span>
          {{gG}}
          <span class="fa fa-chevron-right" aria-hidden="true"></span>
        </router-link>
      <img src="//shadow.elemecdn.com/faas/service/static/media/customer-service.9f9fce54.png" alt="">
      <div class="topServiceSon">{{laug}}</div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          gG:"受天气影响，配送可能延迟，请小主们提前订餐哦",
          laug:"你好，客服小e很高兴为你服务"
        }
      },
        name: "customerServiceTop"
    }
</script>

<style scoped>
  .topService {
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #18A9FF;
  }
  .guangGao{
    width: 100%;
    height: 1.4rem;
    background: #fffada;
    position: fixed;
    top: 0;
    text-align: center;
    font-size: .8rem;
    color:#666666;
    line-height: 1.4rem;
  }
  .topService>img{
    width: 3rem;
    height: 3rem;
  }
  .topServiceSon{
    width: 15rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    background-color: rgba(51,51,51,.15);
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
  }
</style>
