<template>
  <div>
    <div class="elmMain">
      <div class="site" @click="$router.push('/myAddress')">
        <div class="elmSite">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span>我的地址</span>
        </div>
        <div class="siteRight">
          <span>></span>
        </div>
      </div>
    </div>
    <!--    第二行    -->
    <div class="elmMain">
      <div class="site" @click="$router.push('/goldShop')">
        <div class="elmSite">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span>金币商城</span>
        </div>
        <div class="siteRight">
          <span>></span>
        </div>
      </div>
      <div class="site">
        <div class="elmSite">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span>3</span>
        </div>
        <div class="siteRight">
          <span>></span>
        </div>
      </div>
    </div>
    <!--    第三行    -->
    <div class="elmMain">
      <div class="site" @click="$router.push('/customerService')">
        <div class="elmSite">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span>我的客服</span>
        </div>
        <div class="siteRight">
          <span>></span>
        </div>
      </div>
      <div class="site">
        <div class="elmSite">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span>我的地址</span>
        </div>
        <div class="siteRight">
          <span>></span>
        </div>
      </div>
      <div class="site">
        <div class="elmSite">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span>我的地址</span>
        </div>
        <div class="siteRight">
          <span>></span>
        </div>
      </div>
    </div>
    <div class="yingsi">
      <span>隐私政策</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "elmMain"
};
</script>

<style scoped>
.elmMain {
  width: 100%;
  background-color: #fff;
  border-top: 12px solid #f5f5f5;
}
.site {
  display: flex;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  line-height: 45px;
  justify-content: space-between;
}
.elmSite i {
  font-size: 18px;
  color: #4aa5f0;
}
.elmSite span {
  font-size: 16px;
  color: #333333;
  margin-left: 8px;
}
.siteRight span {
  font-weight: 900;
  color: #c4c4c4;
}
.yingsi {
  width: 100%;
  display: flex;
  height: 120px;
  justify-content: center;
  background-color: #f5f5f5;
}
.yingsi span {
  line-height: 70px;
  font-size: 16px;
  color: #5aacf0;
}
</style>