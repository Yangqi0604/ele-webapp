<template>
  <div calss="gold">
    <a class="item" v-for="(item,index) in list" :key="index">
      <div class="theme-color info-wrap">
        <h3 class="item-title">{{item.title}}</h3>
        <span class="item-credits">
          {{item.price}}
          <span class="unitName">{{item.unitName}}</span>
          <span class="corner" style="background-color:#05b2c2">{{item.addprice}}</span>
        </span>
      </div>
      <div class="img-wrap">
        <img :src="item.img" />
      </div>
    </a>
    <!-- section -->
    <section class="apple">
      <p style="color: rgb(143, 132, 132);">*兑换项和活动皆与设备生产商Apple Inc.无关</p>
      <p style="padding: 0.05rem; color: rgb(143, 132, 132);">合作请联系：ejifen@ele.me</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "gold",
  props: ["list"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.item {
  float: left;
  background: #fff;
  width: 49%;
  border-right: 1px solid #f5f5f5;
  border-top: 1px solid #f5f5f5;
}
a {
  text-decoration: none;
}
.item-title {
  font-weight: 600;
  font-size: 0.6rem;
  line-height: 1.3;
  color: #333;
  text-align: left;
  margin-bottom: 0.25rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-wrap {
  padding: 0.45rem 0.25rem 0rem 0.5rem;
  min-height: 2.45rem;
}
.theme-color {
  color: #ff6000 !important;
}
.item-credits {
  font-size: 0.55rem;
  position: relative;
  display: inline-block;
  vertical-align: top;
}
.item-credits .unitName {
  font-size: 0.45rem;
  color: #999;
  padding-left: 0.1rem;
}
.corner {
  font-size: 0.5rem;
  color: #fff;
  padding: 0.075rem 0.125rem;
  margin-left: 0.125rem;
  border-radius: 0.1rem;
  text-align: center;
  vertical-align: top;
  display: inline-block;
  background-color: #f0d98d;
}

.img-wrap img {
  width: 92%;
  height: 4.165rem;
}
.apple {
  width: 100%;
  height: 0.46rem;
}
.apple p {
  padding-top: 0.115rem;
  width: 100%;
  text-align: center;
  font-size: 0.1rem;
}
</style>
