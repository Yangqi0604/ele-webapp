<template>
  <div>
    <div class="elestore-head" v-if="indexdata.rst">
      <div class="estoreHead-top" :style="{backgroundImage:'url('+indexdata.rst.scheme+')'}">
        <i class="fa fa-angle-left fa-lg" @click="$router.push('/home')"></i>
        <div :style="{backgroundImage:'url('+indexdata.rst.image_path+')'}">
          <p>品牌</p>
        </div>
      </div>
      <div class="estoreHead-bottom">
        <h2>
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
          <span>
            <p>{{indexdata.rst.activities.length}}个优惠券</p>
            <i class="fa fa-caret-down"></i>
          </span>
        </div>
        <div>
          <p>公告:{{indexdata.rst.promotion_info}}</p>
        </div>
      </div>
    </div>
    <div  class="estoreHead-switch">
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
    data(){
        return{
            indexdata:{},
            // switchP:false,
        }
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
        this.indexdata=res.data
      });
    },
    // positonFix(){
    //   let scrollTop=document.documentElement.scrollTop,
    //   var switchTop=document.body.offsetTop,
    //   if(scrollTop>switchTop){
    //     this.switchP=true
    //   }

    // }
  }
};
</script>

<style scoped>
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
  /* background-image: url(https://fuss10.elemecdn.com/7/51/214c1949dc059732ac12ea7d9ce8bpng.png?imageMogr/format/webp/thumbnail/150x/); */
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 39%;
  left: 38%;
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
  display:flex;
  height: 2rem;
  justify-content:center;
}
.estoreHead-bottom h2 span{
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
  position:sticky;
  top:0px;
  background-color: #fff;
  align-items: center;
  height: 2.5rem;
  z-index:100;
}
.estoreHead-switch>p{
  height:60%;
}
.router-link-exact-active{
  border-bottom: 3px solid #54acff;
}
</style>