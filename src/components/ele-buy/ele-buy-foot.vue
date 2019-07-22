<template>
  <div class="ele-buy-foot">
    <ul>
      <router-link tag="li" to="/ele-buy/eleBuyHomepage">
        <i class="fa fa-home"></i>
        <span>首页</span>
      </router-link>
      <router-link tag="li" to="/ele-buy/eleBuyDingdan">
        <i class="fa fa-file-text"></i>
        <span>订单</span>
      </router-link>
      <router-link tag="li" to="/ele-buy/eleBuyMine">
        <i class="fa fa-user"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ele-buy-foot"
};
</script>

<style scoped>
.ele-buy-foot {
  width: 100%;
  height: 3.125rem;
}
.ele-buy-foot ul {
  display: flex;
  height: 100%;
  background-color: #fff;
}
.ele-buy-foot ul li {
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: .8125rem;
  color: gray;
}
.ele-buy-foot ul li i {
  font-size: 1.6875rem;
}
.ele-buy-foot ul li:nth-of-type(2) i {
  font-size: 20px;
}
.ele-buy-foot ul li.router-link-exact-active{
    color:#0097ff;
}
</style>
