<template>
  <div>
    <goldtop></goldtop>
    <goldcontainer :list="list"></goldcontainer>
  </div>
</template>

<script>
import goldtop from "../components/gold/gold-top";
import goldcontainer from "../components/gold/gold-container";

export default {
  computed: {},
  data() {
    return {
      list: [
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "90",
          unitName: "金币",
          addprice: "+40元",
          img: "//yun.duiba.com.cn/images/201804/v4vhrej3bq.png"
        },
        {
          title: "15元品质联盟专享红包",
          price: "90",
          unitName: "金币",
          img: "//yun.duiba.com.cn/images/201903/y6ffsl24v9.png"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "150",
          unitName: "金币",
          addprice: "超级会员8折",
          img: "//yun.duiba.com.cn/images/201804/v4vhrej3bq.png"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "150",
          unitName: "金币",
          img: "//yun.duiba.com.cn/images/201804/v4vhrej3bq.png"
        },
        {
          title: "15元品质联盟专享红包",
          price: "72",
          unitName: "金币",
          img: "//yun.duiba.com.cn/images/201903/y6ffsl24v9.png"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "72",
          unitName: "金币",
          img: "//yun.duiba.com.cn/images/201804/v4vhrej3bq.png"
        },
        {
          title: "15元品质联盟专享红包",
          price: "180",
          unitName: "金币",
          img: "//yun.duiba.com.cn/images/201903/y6ffsl24v9.png"
        },
        {
          title: "15元品质联盟专享红包",
          price: "450",
          unitName: "金币",
          img: "//yun.duiba.com.cn/images/201903/y6ffsl24v9.png"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "120",
          unitName: "金币",
          img: "//yun.duiba.com.cn/images/201804/v4vhrej3bq.png"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "360",
          unitName: "金币",
          img: "//yun.duiba.com.cn/images/201804/v4vhrej3bq.png"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "210",
          unitName: "金币",
          img: "//yun.duiba.com.cn/images/201903/y6ffsl24v9.png"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "144",
          unitName: "金币",
          img: "//yun.duiba.com.cn/images/201804/v4vhrej3bq.png"
        },
        {
          title: "悬浮机械手感发光游戏键鼠套装",
          price: "270",
          unitName: "金币",
          addprice: "+40元",
          img: "//yun.duiba.com.cn/images/201812/vl9654ol2t.jpg"
        },
        {
          title: "充电眼部按摩护眼仪",
          price: "9",
          unitName: "金币",
          addprice: "+40元",
          img: "//yun.duiba.com.cn/images/201809/u6n88klhf4.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+49元",
          img: "//yun.duiba.com.cn/images/201907/jda60j4608.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "90",
          unitName: "金币",
          addprice: "+32元",
          img: "//yun.duiba.com.cn/images/201907/yt3lds5tjb.jpg"
        },

        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "90",
          unitName: "金币",
          addprice: "+35元",
          img: "//yun.duiba.com.cn/images/201709/w9auzzxyvl.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+69元",
          img: "//yun.duiba.com.cn/images/201809/guvnrnof3a.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+49元",
          img: "//yun.duiba.com.cn/images/201907/8g3p5tr7kw.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+28元",
          img: "//yun.duiba.com.cn/images/201906/5dayq6trfi.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+35元",
          img: "//yun.duiba.com.cn/images/201812/atvofvrp10.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+28元",
          img: "//yun.duiba.com.cn/images/201803/d00o3ob747.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+55元",
          img: "//yun.duiba.com.cn/images/201811/2qaiu5ej73.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+39元",
          img: "//yun.duiba.com.cn/images/201712/ql70xyuedn.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+29元",
          img: "//yun.duiba.com.cn/images/201708/qqarbxbgpi.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+27元",
          img: "//yun.duiba.com.cn/images/201807/mzhkggca52.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+39元",
          img: "//yun.duiba.com.cn/images/201709/00ya8ruecv.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "90",
          unitName: "金币",
          addprice: "+40元",
          img: "//yun.duiba.com.cn/images/201809/8mfnyorg0x.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+49元",
          img: "//yun.duiba.com.cn/images/201809/ayefpz21p2.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+28元",
          img: "//yun.duiba.com.cn/images/201809/tcj00y8i8g.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+28元",
          img: "//yun.duiba.com.cn/images/201809/gfv2i0p22g.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "90",
          unitName: "金币",
          addprice: "+16元",
          img: "//yun.duiba.com.cn/images/201903/1xrwqmtlw5.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+40元",
          img: "//yun.duiba.com.cn/images/201612/2amqjblx28.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+25元",
          img: "//yun.duiba.com.cn/images/201702/tvgjawoe1v.jpg"
        },
        {
          title: "蒸汽电熨斗",
          price: "9",
          unitName: "金币",
          addprice: "+56元",
          img: "//yun.duiba.com.cn/images/201903/v75t4lomr9.jpg"
        },
        {
          title: "创意卡通田园犬黑胶晴雨伞",
          price: "9",
          unitName: "金币",
          addprice: "+26元",
          img: " //yun.duiba.com.cn/images/201903/zef0cf2mqf.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+40元",
          img: "//yun.duiba.com.cn/images/201803/tk9xv9ku9o.jpg"
        },
        {
          title: "3元饿了么红包－鲜果超市红包",
          price: "9",
          unitName: "金币",
          addprice: "+25元",
          img: "//yun.duiba.com.cn/images/201809/aw95j8re3i.jpg"
        },
        {
          title: "蒸汽电熨斗",
          price: "9",
          unitName: "金币",
          addprice: "+56元",
          img: "//yun.duiba.com.cn/images/201805/88r1ov9kgw.jpg"
        },
        {
          title: "创意卡通田园犬黑胶晴雨伞",
          price: "9",
          unitName: "金币",
          addprice: "+26元",
          img: " //yun.duiba.com.cn/images/201809/dft6uzup9p.jpg"
        },
        {
          title: "蒸汽电熨斗",
          price: "9",
          unitName: "金币",
          addprice: "+56元",
          img: "//yun.duiba.com.cn/images/201903/v75t4lomr9.jpg"
        },
        {
          title: "创意卡通田园犬黑胶晴雨伞",
          price: "9",
          unitName: "金币",
          addprice: "+26元",
          img: " //yun.duiba.com.cn/images/201903/zef0cf2mqf.jpg"
        }
      ]
    };
  },
  components: {
    goldtop,
    goldcontainer
  }
};
</script>

<style scoped>
</style>
