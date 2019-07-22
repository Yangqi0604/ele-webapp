<template>
  <div>
    <!-- 饿了么的dom结构 -->
    <section class="index-container" v-if="flag">
      <div class="index-shopInfo">
        <!-- 左侧图片 -->
        <div class="logo_container">
          <img :src="restaurant.image_path" alt />
        </div>
        <!-- 右侧内容 -->
        <!-- 第一行，品牌 -->
        <div class="index_main" @click="$router.push('/shop')">
          <div class="index_shopname">
            <i v-if="restaurant.is_premium">品牌</i>
            <span>{{restaurant.name}}</span>
          </div>
          <!-- 第二行，星级 -->
          <div class="index-rateWrap">
            <div>
              <starLevel :rating="restaurant.rating" />
              <span class="rate">{{restaurant.rating}}</span>
              <span>月售{{restaurant.recent_order_num}}</span>
            </div>
            <div class="delivery" v-if="restaurant.delivery_mode">
              <span class="icon-hollow">{{restaurant.delivery_mode.text}}</span>
            </div>
          </div>
          <!-- 第三行，配送 -->
          <div class="index-moneylimit">
            <div>
              <span>￥{{restaurant.float_minimum_order_amount}}起送</span>
              |
              <span>配送费￥{{restaurant.float_delivery_fee}}</span>
            </div>
            <div class="index-distanceWrap">
              <span>{{(restaurant.distance/1000).toFixed(2)}}km</span>
              |
              <span>{{restaurant.order_lead_time}}分钟</span>
            </div>
          </div>
          <!-- 第四行，口碑 -->
          <div class="index-status">
            <div>
              <span>川湘菜</span>
            </div>
            <div>
              <span>品质联盟</span>
              <span>
                <img
                  src="https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/"
                  alt
                />
                <span>口碑人气好店</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 美团的dom结构 -->
    <section class="index-containerMei" v-else>
      <div class="index-shopInfo">
        <!-- 左侧图片 -->
        <div class="logo_container">
          <img :src="restaurant.image_path" alt />
        </div>
        <!-- 右侧内容 -->
        <!-- 第一行，商店名称 -->
        <div class="index_main" @click="$router.push('/shop')">
          <div class="index_shopname">
            <span>{{restaurant.name}}</span>
          </div>
          <!-- 第二行，活动描述 -->
          <div class="index-moneylimit">
            <div>
              <span>￥{{restaurant.activities[2].description}}</span>
            </div>
          </div>
          <!-- 第四行，口碑 -->
          <div class="index-status">
            <div>
              <span>{{restaurant.float_minimum_order_amount}}元</span>
              <span>门市价:{{restaurant.order_lead_time}}</span>
            </div>
            <div>
              <span>已售{{restaurant.recent_order_num}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>    
  </div>
</template>

<script>
import {mapActions,mapGetters,mapMutations,mapState} from "vuex"
import starLevel from "../public/starLevel";
export default {
  name: "Homeshoplist",
  data(){
    return{
    }
  },
  computed:{
...mapState(['flag'])
  },
  props: {
    restaurant: {}
  },
  components: {
    starLevel
  }
};
</script>

<style scoped>
.index-container {
  background: #fff;
  color: #666;
  padding: 4vw 0;
  border-bottom: 0.133333vw solid #eee;
}
.index-shopInfo {
  display: flex;
  justify-content: flex-start;
  padding: 0 2.666667vw;
  align-items: stretch;
}
.logo_container {
  width: 17.333333vw;
  height: 17.333333vw;
}
.logo_container img {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 0.133333vw solid rgba(0, 0, 0, 0.08);
  border-radius: 0.533333vw;
}
.index_main {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  flex-direction: column;
  padding-left: 2.666667vw;
  font-size: 0.2rem;
  flex-grow: 1;
}
.index_shopname {
  align-items: center;
  color: #333;
  font-weight: 700;
  font-size: 0.9rem;
}
.index_shopname i {
  background: #ffe800;
  margin-right: 1.333333vw;
  padding: 0.266667vw 0.666667vw;
  text-align: center;
  white-space: nowrap;
  font-size: 0.6rem;
}
.index_shopname span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.index-rateWrap {
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
}
.index-rateWrap > div:nth-of-type(1) > span:nth-of-type(1) {
  color: #666;
  padding: 0.4rem 0;
  list-style: none;
  font-size: 0.793333rem;
}
.index-rateWrap .rate {
  margin-right: 1.066667vw;
}
.index-moneylimit {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.index-moneylimit .index-distanceWrap {
  color: #999;
}
.delivery {
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  margin-left: 1.066667vw;
}
.delivery .icon-hollow {
  color: #fff;
  background-color: #2395ff;
  padding: 2px;
  box-sizing: border-box;
}
.index-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.index-status img {
  width: 0.666667rem;
  height: 0.66667rem;
  color: #e8470b;
}
.mint-loadmore {
  height: calc(100% - 95px);
  overflow: auto;
}
.index-containerMei{
    /* border-top: 1px solid #DDD8CE;
    border-bottom: 1px solid #DDD8CE; */
    margin-top: .2rem;
    margin-bottom: 0;
    background-color: #fff;
    min-height: 5rem;
    position: relative;
    padding: .28rem .2rem;
}
.index-containerMei .index_shopname>span{
    padding-top: .1rem;
    margin-bottom: .12rem;
    font-size: .9rem;
    font-weight: 400;
    color: #333;
}
.index-containerMei .index-moneylimit>div>span{
    font-size: .24rem;
    height: 1.4875rem;
    line-height:1.4875rem;
    margin-bottom: .16rem;
    color: #666;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.index-containerMei .index-status{
  color: #666;
  font-size:.5rem;
}
.index-containerMei .index-status>div:nth-of-type(1)>span:nth-of-type(1){
    font-size: .99rem;
    color: #06c1ae;
}
.index-containerMei .index-status>div:nth-of-type(1)>span:nth-of-type(2){
    font-size:.5rem;
    color:#666;
}
</style>
