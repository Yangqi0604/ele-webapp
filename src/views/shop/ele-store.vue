<template>
  <div class="ele-store">
    <div class="elestore-head" v-if="indexdata.rst">
      <div class="estoreHead-top" :style="{backgroundImage:'url('+indexdata.rst.scheme+')'}">
        <i class="fa fa-angle-left fa-lg" @click="$router.push('/')"></i>
        <div :style="{backgroundImage:'url('+indexdata.rst.image_path+')'}">
          <p>品牌</p>
        </div>
      </div>
      <div class="estoreHead-topMask"></div>
      <div class="estoreHead-bottom">
        <h2 @click="changeDetail()">
          <span>{{indexdata.rst.name}}</span>
          <i class="fa fa-caret-right"></i>
        </h2>
        <div v-if="indexdata.rst">
          <span>评价{{indexdata.rst.rating}}</span>
          <span>月售{{indexdata.rst.recent_order_num}}单</span>
          <span>蜂鸟专送约{{indexdata.rst.order_lead_time}}分钟</span>
        </div>
        <div>
          <p>￥{{indexdata.redpack[0].value}}</p>
          <p>无门槛</p>
          <p>领取</p>
        </div>
        <div>
          <span>满减</span>
          <span>
            <p>{{indexdata.rst.activities[0].description}}</p>
          </span>
          <span @click="activityShowchange()">
            <p>{{indexdata.rst.activities.length}}个优惠券</p>
            <i class="fa fa-caret-down"></i>
          </span>
        </div>
        <div>
          <p>公告:{{indexdata.rst.promotion_info}}</p>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="elestore-mask" v-if="detailShow">
        <div class="elestore-detail" v-if="indexdata.rst">
          <h2>
            <i>名牌</i>
            {{indexdata.rst.name}}
          </h2>
          <ul>
            <li>
              <span>{{indexdata.rst.rating}}</span>
              <span>评分</span>
            </li>
            <li>
              <span>{{indexdata.rst.recent_order_num}}</span>
              <span>月售</span>
            </li>
            <li>
              <span>{{indexdata.rst.order_lead_time}}</span>
              <span>蜂鸟专送</span>
            </li>
            <li>
              <span>{{indexdata.rst.float_delivery_fee}}元</span>
              <span>配送费</span>
            </li>
            <li>
              <span>{{(indexdata.rst.distance/1000).toFixed(2)+"Km"}}</span>
              <span>距离</span>
            </li>
          </ul>
          <P>
            <span></span>
            公告
            <span></span>
          </P>
          <h3>{{indexdata.rst.promotion_info}}</h3>
        </div>
        <div class="elstore-detail-del" @click="changeDetail()"></div>
      </div>
    </transition>
    <div class="elestore-mask" v-if="activityShow"></div>
    <transition name="bottom">
      <div class="activity-detail" v-if="activityShow">
        <h2>优惠活动</h2>
        <ul class="acdetail-content">
          <li v-for="(a,sid) in indexdata.rst.activities" :key="sid">
            <span :style="{backgroundColor:'#'+(a.icon_color)}">{{a.icon_name}}</span>
            <span>{{a.description}}</span>
          </li>
        </ul>
        <div @click="activityShowchange()">
          <i class="fa fa-times"></i>
        </div>
      </div>
    </transition>
    <div class="estoreHead-switch">
      <router-link to="/eleStore-diancan" tag="p">点餐</router-link>
      <router-link to="/eleStore-coment" tag="p">评价</router-link>
      <router-link to="/eleStore-seller" tag="p">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ele-store",
  data() {
    return {
      indexdata: {},
      detailShow: false,
      activityShow: false
      // switchP:false,
    };
  },
  created() {
    this.getData();
  },
  // mounted(){
  //   this.positonFix()
  // },
  methods: {
    getData() {
      this.$axios("/profile/batch_shop").then(res => {
        console.log(res.data);
        this.indexdata = res.data;
      });
    },
    changeDetail() {
      this.detailShow = !this.detailShow;
    },
    activityShowchange() {
      this.activityShow = !this.activityShow;
    }
  }
};
</script>

<style scoped>
.fa-angle-left {
  z-index: 999;
}
.estoreHead-top {
  background-size: cover;
  background-repeat: no-repeat;
  height: 6.25rem;
  width: 100%;
  position: relative;
}
.estoreHead-top i {
  color: white;
  font-size: 2.12125rem;
  padding-left: 0.7rem;
  font-weight: 300;
}
.estoreHead-top div {
  width: 5rem;
  height: 5rem;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 39%;
  left: 38%;
  z-index: 3;
}
.estoreHead-top div p {
  color: #6f3f15;
  font-weight: 700;
  font-size: 0.48rem !important;
  background-image: linear-gradient(90deg, #fff100, #ffe339);
  width: 1.5rem;
}
.estoreHead-bottom {
  text-align: center;
  margin-top: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.estoreHead-bottom h2 {
  font-weight: 600;
  font-size: 1.35rem;
  color: #333;
  display: flex;
  height: 2rem;
  justify-content: center;
}
.estoreHead-bottom h2 span {
  width: 63%;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
  white-space: nowrap;
}
.estoreHead-bottom div:nth-of-type(1) {
  color: #666;
  margin-top: 1rem;
  font-size: 0.3rem;
}
.estoreHead-bottom div:nth-of-type(2) {
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin-top: 0.7rem;
  color: #594519;
  background: #ffe578;
  width: 8.53rem;
  height: 1.4rem;
  line-height: 1.4rem;
  font-weight: 400;
  font-size: 0.4rem;
}
.estoreHead-bottom div:nth-of-type(2) > p:nth-of-type(1) {
  font-weight: 700;
  font-size: 0.8rem;
}
.estoreHead-bottom div:nth-of-type(3) {
  display: flex;
  color: #333;
  font-size: 0.4rem;
  width: 80%;
  justify-content: space-around;
  margin-top: 0.6rem;
  align-items: center;
}
.estoreHead-bottom div:nth-of-type(3) > span {
  display: flex;
}
.estoreHead-bottom div:nth-of-type(3) > span:nth-of-type(1) {
  background-color: rgb(240, 115, 115);
  color: white;
  font-size: 0.5625rem;
  width: 2rem;
  line-height: 1rem;
  justify-content: center;
}
.estoreHead-bottom div:nth-of-type(3) > span:nth-of-type(2) {
  color: #999;
  margin-left: -2.2rem;
}
.estoreHead-bottom div:nth-of-type(3) > span:nth-of-type(3) {
  color: #999;
}
.estoreHead-bottom div:nth-of-type(4) {
  color: #999;
  font-size: 0.5625rem;
  width: 90%;
  align-self: flex-start;
  margin-top: 0.5rem;
}
.estoreHead-switch {
  display: flex;
  margin-top: 1.2rem;
  justify-content: space-around;
  color: #666;
  font-weight: 700;
  position: sticky;
  top: 0px;
  background-color: #fff;
  align-items: center;
  height: 2.5rem;
  z-index: 100;
}
.estoreHead-switch > p {
  height: 60%;
  box-sizing: border-box;
}
.router-link-exact-active {
  border-bottom: 3px solid #54acff;
  color: #333;
}
/* 蒙层部分 */
.elestore-mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 111;
  background-color: rgba(0, 0, 0, 0.5);
}
.elestore-detail {
  top: 29%;
  left: 6%;
  position: fixed;
  width: 70%;
  max-height: 8.533333rem;
  max-height: 85.333333vw;
  padding: 0.706667rem 0.666667rem 0.746667rem;
  padding: 7.066667vw 6.666667vw 7.466667vw;
  border-radius: 0.106667rem;
  border-radius: 1.066667vw;
  overflow: hidden;
  background: #fff;
  z-index: 99;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  will-change: transform;
}
.elestore-detail h2 {
  font-size: 1.6rem;
  line-height: 0.666667rem;
  line-height: 6.666667vw;
  color: #333;
  text-align: center;
  font-weight: bolder;
}
.elestore-detail h2 i {
  border-radius: 0.026667rem;
  background-image: linear-gradient(90deg, #fff100, #ffe339);
  color: #6a3709;
  font-style: normal;
  padding: 0.08rem;
  padding: 0.8vw;
  font-weight: 700;
  font-size: 0.32rem;
}
.elestore-detail ul {
  display: flex;
  margin: 0.506667rem -0.666667rem 0;
  margin: 5.066667vw -6.666667vw 0;
  font-size: 1rem;
  justify-content: space-around;
}
.ele-store {
  position: relative;
}
.elestore-detail ul > li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.elestore-detail ul > li > span:nth-of-type(1) {
  font-size: 0.4rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.16rem;
  margin-bottom: 1.6vw;
}
.elestore-detail ul > li > span:nth-of-type(2) {
  font-size: 0.293333rem;
  color: #999;
  font-weight: 400;
}
.elestore-detail > p {
  text-align: center;
  padding: 0.9rem 0;
}
.elestore-detail h3 {
  font-size: 0.346667rem;
  line-height: 1.54;
  color: #333;
  max-height: 2.666667rem;
  max-height: 26.666667vw;
  overflow-y: auto;
}
.elstore-detail-del {
  position: fixed;
  width: 2rem;
  height: 2rem;
  background-image: url(https://fuss10.elemecdn.com/8/ba/bcfa8cc62b20e044bd2ea1c1c7f3dpng.png?imageMogr/format/webp/);
  background-size: 2rem;
  top: 67%;
  left: 42%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.bottom-enter,
.bottom-leave-to {
  transform: translate3d(0, 100%, 0);
}
.bottom-leave,
.bottom-enter-to {
  transform: translate3d(0, 0, 0);
}
.bottom-enter-active,
.bottom-leave-active {
  transition: all 1.2s;
}
.estoreHead-topMask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 26.666667vw;
  background: rgba(0, 0, 0, 0.5);
}
.activity-detail {
  position: fixed;
  background-color: #f5f5f5;
  box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.4);
  bottom: 0;
  left: 0;
  height: 16.25rem;
  right: 0;
  z-index: 111;
  padding: 0.533333rem 0.693333rem;
  padding: 5.333333vw 6.933333vw;
  box-sizing: border-box;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  will-change: transform;
}
.activity-detail h2 {
  text-align: center;
  font-size: 1.054rem;
  font-weight: 600;
  margin-bottom: 0.413333rem;
  margin-bottom: 4.133333vw;
}
.activity-detail ul {
  font-size: 0.75rem;
}
.activity-detail ul li {
  margin-bottom: 0.706667rem;
}
.activity-detail ul li > span:nth-of-type(1) {
  display: inline-block;
  color: #fff;
  width: 2rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
.activity-detail ul li > span:nth-of-type(2) {
  margin-left: 0.3rem;
  font-size: 0.346667rem;
  line-height: 1.38;
}
.activity-detail > div {
  position: absolute;
  top: 3%;
  right: 4%;
  font-size: 1.3rem !important;
  color: #888;
}
</style>