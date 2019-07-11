<template>
    <div class="merchant">
        <h1>商家推荐</h1>
        <div class="merchantSon">
           <div class="merchantSonOne">
             <img src="../../assets/logo.png" alt="">
             <p>元汤丸子粉丝</p>
             <span>月销87好评88%</span>
             <h2>￥26</h2>
           </div>
        </div>
    </div>
</template>


<script>
  export default {
    components: {

    }
  };
</script>

<style scoped>
.merchant{
  width: 100%;
  height: 12rem;
}
.merchant>h1{
  height: 2rem;
  line-height: 2rem;
  font-size: 18px;
  font-weight: bold;
}
.merchantSon{
  width: 100%;
  height: 9rem;
  display: flex;
  overflow-y: auto;
}
.merchantSonOne{
  width: 8rem;
  height: 10rem;
  margin-left: .5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}
  .merchantSonOne>img{
    width: 6rem;
    height: 6rem;
  }
.merchantSonOne>span{
  font-size: 12px;
  color: grey;
}
.merchantSonOne>h2{
  color: red;
}
</style>
