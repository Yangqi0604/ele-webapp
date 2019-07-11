<template>
    <div class="merchant">
        <h1>商家推荐</h1>
        <div class="merchantSon">
            <div class="merchantSonOne">
                <img src="../../assets/logo.png" alt="">
                <p>原汤丸子粉丝</p>
                <span>月销47好评率88%</span>
                <h2>￥22<button>+</button></h2>
            </div>
          <div class="merchantSonOne">
            <img src="../../assets/logo.png" alt="">
            <p>原汤丸子粉丝</p>
            <span>月销47好评率88%</span>
            <h2>￥22<button>+</button></h2>
          </div>
          <div class="merchantSonOne">
            <img src="../../assets/logo.png" alt="">
            <p>原汤丸子粉丝</p>
            <span>月销47好评率88%</span>
            <h2>￥22<button>+</button></h2>
          </div>
          <div class="merchantSonOne">
            <img src="../../assets/logo.png" alt="">
            <p>原汤丸子粉丝</p>
            <span>月销47好评率88%</span>
            <h2>￥22<button>+</button></h2>
          </div>
          <div class="merchantSonOne">
            <img src="../../assets/logo.png" alt="">
            <p>原汤丸子粉丝</p>
            <span>月销47好评率88%</span>
            <h2>￥22<button>+</button></h2>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "eleStore-diancan-Top"
    }
</script>

<style scoped>
.merchant{
  width: 100%;
  height: 14rem;
}
.merchant>h1{
  height: 2rem;
  background:white;
  line-height: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
  padding-left: 1rem;
}
.merchant>.merchantSon{
  width: 100%;
  height: 12rem;
  display: flex;
  overflow-y: auto;
}
.merchant>.merchantSon>.merchantSonOne{
  flex-shrink: 0;
  width: 9rem;
  height: 12rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.merchantSonOne>img{
  width: 8rem;
  height: 8rem;
}
.merchantSonOne>p{
  font-size: .9rem;
}
.merchantSonOne>span{
  font-size: .5rem;
  color: grey;
}
.merchantSonOne>h2{
  width: 100%;
  color: red;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.merchantSonOne>h2>button{
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 60%;
  border: none;
  outline: none;
  color: white;
  background:#0085ff;
}
</style>
