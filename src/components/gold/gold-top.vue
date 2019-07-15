<template>
  <div>
    <section class="floor-elm-top">
      <a class="credits" href="javascript:;">
        <i class="fa fa-envelope-open-o"></i>
        <span class="note">
          金币
          <span class="number theme-color">0</span>
        </span>
      </a>
      <a class="records">
        <i class="fa fa-sticky-note" aria-hidden="true"></i>
        <span class="note">兑换记录</span>
      </a>
    </section>
    <img
      src="//yun.duiba.com.cn/images/201808/fh9iw1evwk.jpg?x-oss-process=image/format,webp"
      alt
      width="100%"
    />

    <section class="floor-showcase a-fadeinT">
      <a class="main-showcase">
        <img src="//yun.duiba.com.cn/images/201812/sch8war88p.png" alt />
      </a>
      <div class="side-showcase">
        <a>
          <div class="top-showcase">
            <img src="//yun.duiba.com.cn/images/201906/hhpc0nsoc6.jpeg" alt />
          </div>
        </a>
        <a>
          <div class="bottom-showcase">
            <img src="//yun.duiba.com.cn/images/201808/iq43cwcj43.jpg" alt />
          </div>
        </a>
      </div>
    </section>
    <div class="floor-item-header">大家都在兑</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.floor-elm-top {
  display: table;
  height: 1.1rem;
  width: 100%;
  padding: 0.5rem 0;
  background-color: #fff;
}
a {
  text-decoration: none;
}
.credits {
  border-right: 1px solid #e5e5e5;
}
.floor-elm-top a {
  display: table-cell;
  text-align: center;
  width: 50%;
  color: brown;
}
.floor-elm-top a i {
  display: inline-block;
  width: 0.85rem;
  height: 0.75rem;
  vertical-align: middle;
  color: burlywood;
}
.theme-color {
  color: #ff6000 !important;
}
.floor-elm-top a .note {
  vertical-align: middle;
  font-size: 0.6rem;
}
.banner-single-image {
  width: 100%;
  height: 7rem;
}
img {
  max-width: 100%;
  vertical-align: middle;
  border: 0;
  height: 7rem;
}

.floor-showcase img {
  width: 90%;
  height: 80%;
}
.floor-showcase {
  width: 100%;
  margin: 0.21333333rem 0;
  background: #fff;
  position: relative;
  border: solid #eee;
  border-width: 1px 0;
  min-height: 5.376rem;
  display: flex;
}
.floor-showcase .side-showcase {
  overflow: hidden;
}
.floor-showcase a {
  display: block;
}
.floor-item-header {
  position: relative;
  height: 1.5rem;
  line-height: 1.5rem;
  padding-left: 0.6rem;
  background-color: #fff;
  font-size: 0.55rem;
  color: #666;
}
</style>