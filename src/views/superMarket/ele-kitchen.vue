<template>
<div style="backgroundColor:white">
    <!-- <div class="heade">   
        <i  class="fa fa-chevron-left" aria-hidden="true"></i>
        <span>买菜</span>
        <i></i>
    </div> -->
    <nav-item-header :itemList="itemList"></nav-item-header><br><br><br>
    <!-- <nav-item-bar-search :top="top"></nav-item-bar-search> -->
    <!-- <input style="width:90%;backgroundColor:white" type="text" placeholder="输入商家，商品名称"> -->
    <div id="ele-cvs">
        <div class="cvs-one">
            <div class="cvs-one-top">  
                <div class="lingqu"> 
                    <span>您有12元果蔬商超新人三重礼红包待领取</span>
                    <span style="color:red">去领取</span>
                </div>
                <h4 style="fontSize:1.3rem;width:90%;margin:0 auto">新人三重礼</h4>
                <div class="lingqu2">
                    <span>果蔬生鲜商超通用</span>
                    <span>规则</span>
                </div>
                <ul class="youhui">
                    <li>
                        <div class="price">
                            <span class="ssize">￥</span><span class="bsize">12</span>
                        </div>
                        <button @click="dianji">领取</button>
                    </li>
                    <li>
                        <div class="price">
                            <span class="ssize"> ￥ </span> <span class="bsize"> 5</span>
                        </div>
                        <button @click="dianji">领取</button>
                    </li>
                    <li>
                        <div class="price">
                            <span class="ssize">￥ </span> <span class="bsize"> 8</span>
                        </div>
                        <button @click="dianji">领取</button>
                    </li>
                </ul>
                <div class="xianshi" v-show="xianshi">{{xiadanba}}</div>


                <div class="xiadan" style="margin:1rem 0;color:#999">
                    <p>下一单可领取</p>
                    <p>下三单可领取</p>
                    <p>下五单可领取</p>
                </div>
            </div>
        </div>
        <!-- banner动画图 -->
        <img style="width:100%;margin:1rem 0;" src="https://fuss10.elemecdn.com/b/ec/38a454fd870e3c4538a590f59d302gif.gif" alt="">
        <div class="anxin">
            <div class="left">
                <span style="fontSize:1.3rem;lineHeight:2rem">安心菜市 乐享新鲜</span>
                <p style="lineHeight:3rem">爆款食材低至0.01元</p>
                <span style="backgroundColor:red;borderRadius:0.2rem;">热抢中 <i class="fa fa-caret-right" aria-hidden="true"></i></span>
            </div>
            <div class="you">
                <img src="https://fuss10.elemecdn.com/4/07/e6999e4373a0c7007c75f52096b52png.png?imageMogr/thumbnail/!347x248r/gravity/Center/crop/347x248/" alt="">
            </div>
        </div>
        <!-- 排序列表 -->
         <nav-item-bar-title
                        style="position: sticky; top: 3rem; z-index: 100; background-color: #fff"
    />

        <div class="ding" style="width:100%;backgroundColor:white;padding:1rem 0;">
            <div class="xuan">
                <button>免费配送</button>
                <button>满减优惠</button>
                <button>品牌商家</button>
                <button>准时达</button>
                <button>新店</button>
            </div>
        </div>
        <!-- 店铺列表 -->
        <div class="shop-list">
            <ul>
                <li v-for="(n,index) in shoplists" :key="index">
                    <div class="list-one">
                        <img :src="n.img" alt="">
                    </div>
                    <div class="list-two">
                            <div>
                                <span style="backgroundColor:rgb(255,215,44)">{{n.pinpai}}</span><em style="fontSize:1.2rem;">{{n.dianming}}</em>
                            <div style="lineHeight:1.8rem">
                                <i class="fa fa-star" aria-hidden="true" style="fontSize:1.2rem;color:rgb(255,125,38)"></i>
                                <span style="color:rgb(255,125,38);fontSize:1.2rem">{{n.fenshu}}</span>
                                <span>{{n.yueshou}}</span>
                            </div>
                            <div class="peisong" style="lineHeight:1.5rem">
                                <div>
                                    <span>{{n.qisong}} </span> 
                                    <span>{{n.peisong}}</span>
                                </div>
                                <div>
                                    <span>{{n.km}} </span> 
                                    <span>{{n.shijian}}</span>
                                </div>
                            </div>
        
                            <div style="fontSize: 0.5rem;display:flex;justify-content: space-between;marginTop:1rem">
                                <span style="color:red;">{{n.manjian1}}</span>
                                <span v-if="manjian2=!''" style="color:red;">{{n.manjian2}}</span>
                                <span v-if="manjian3=!''" style="color:red;">{{n.manjian3}}</span>
                                <span><i class="fa fa-sort-desc" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        
            <h1 style="fontSize:1.3rem;textAlign: center;">没有更多了哦~</h1><br><br><br><br><br>
            <!-- 悬浮购物车 -->
            <div class="cart-shop"></div>
        </div>
    </div>
    
</div>
</template>

<script>
    import NavItemHeader from '@/components/public/NavItemHeader.vue'
    import NavItemBarTitle from '@/components/public/NavItemBarTitle.vue'
    import search from '@/components/public/Header.vue'
export default {
    name:"ele-kitchen",
    components:{
      "nav-item-header":NavItemHeader,
      "nav-item-bar-title":NavItemBarTitle,
      "nav-item-bar-search":search,

    },
    methods:{
        dianji(){
            this.xianshi=true
            setTimeout(this.shijian,1000)
        },
        shijian(){
                this.xianshi = !this.xianshi
              },
    },
    data(){
      return {
        xianshi:false,
        xiadanba:"请您先下单在领取",
        
        // page: 1,
        // size: 5,
        // restaurants: [],
        // allLoaded: false,
        // bottomPullText: "上拉加载更多",
        // title: "",
        // SearchBar: false,
        // showFilter: false,
        // data: null,
        // filterdata: "",
        // flag: false,
        itemList:[
          {
            "name":"精选",
            "path":"/"
          },
          {
            "name":"大闸蟹",
            "path":"/"
          },
          {
            "name":"鸡蛋",
            "path":"/"
          },
          {
            "name":"鸡翅中",
            "path":"/"
          },
          {
            "name":"小排",
            "path":"/"
          },
          {
            "name":"米面油",
            "path":"/"
          }
        ],
        top:[
          {
              title:"shengxian  "
          }  
        ],
        shoplists:[
            {
                img:"https://fuss10.elemecdn.com/8/6d/e7f3829610427c688295d8858f112jpeg.jpeg?imageMogr/format/jpeg/thumbnail/!463x463r/gravity/Center/crop/463x463/",
                pinpai : "品牌",
                dianming : "比邻鲜（凤城六路店）",
                fenshu : "4.4",
                yueshou : "月售127",
                qisong :"起送￥20",
                peisong : "配送费￥2",
                km : "1.3km",
                shijian : "22分钟",
                manjian1: "领红包满28减3",
                manjian2: "领红包满46减5",
                manjian3: "领红包满73减8",
            },
            {
                img:"https://fuss10.elemecdn.com/b/3b/509c89b215ab8a279c2d58391b47ajpeg.jpeg?imageMogr/format/jpeg/thumbnail/!463x463r/gravity/Center/crop/463x463/",
                pinpai : "品牌",
                dianming : "优品生鲜（凤城六路店）",
                fenshu : "4.5",
                yueshou : "月售45",
                qisong :"起送￥20",
                peisong : "配送费￥2",
                km : "1.4km",
                shijian : "30分钟",
                manjian1: "0.01元起",
                manjian2: "",
                manjian3: "",
            },
            {
                img:"https://fuss10.elemecdn.com/9/09/ef9b388bfa62fc96ba2c6e469dc2ajpeg.jpeg?imageMogr/format/jpeg/thumbnail/!463x463r/gravity/Center/crop/463x463/",
                pinpai : "品牌",
                dianming : "菜鸟食材（凤城六路店）",
                fenshu : "4.3",
                yueshou : "月售41",
                qisong :"起送￥20",
                peisong : "配送费￥2",
                km : "1.4km",
                shijian : "30分钟",
                manjian1: "0.01元起",
                manjian2: "品质联盟",
                manjian3: "",
            }
            ,
            {
                img:"https://fuss10.elemecdn.com/2/81/c98204e2742da1f2e59a5091ecaa8jpeg.jpeg?imageMogr/format/jpeg/thumbnail/!463x463r/gravity/Center/crop/463x463/",
                pinpai : "品牌",
                dianming : "菜果鲜生（凤城六路店）",
                fenshu : "4.5",
                yueshou : "月售45",
                qisong :"起送￥20",
                peisong : "配送费￥2",
                km : "1.4km",
                shijian : "30分钟",
                manjian1: "红包满39减10",
                manjian2: "领红包满59减18",
                manjian3: "无忧退款",
            },
            {
                img:"https://fuss10.elemecdn.com/f/42/039904d9ddb4cd8c65c7bcd471f34jpeg.jpeg?imageMogr/format/jpeg/thumbnail/!463x463r/gravity/Center/crop/463x463/",
                pinpai : "品牌",
                dianming : "有厨（凤城六路店）",
                fenshu : "4.5",
                yueshou : "月售45",
                qisong :"起送￥20",
                peisong : "配送费￥2",
                km : "1.4km",
                shijian : "30分钟",
                manjian1: "0.01元起",
                manjian2: "",
                manjian3: "",
            },
            {
                img:"https://fuss10.elemecdn.com/a/b8/7e54c094d583f9a22808511c7a33bpng.png?imageMogr/format/jpeg/thumbnail/!463x463r/gravity/Center/crop/463x463/",
                pinpai : "品牌",
                dianming : "海韵水产",
                fenshu : "4.5",
                yueshou : "月售45",
                qisong :"起送￥100",
                peisong : "配送费￥10",
                km : "9.0km",
                shijian : "76分钟",
                manjian1: "",
                manjian2: "",
                manjian3: "",
            },
            {
                img:"https://fuss10.elemecdn.com/8/d1/272f56302e68204fea703ac13e7fdjpeg.jpeg?imageMogr/format/jpeg/thumbnail/!463x463r/gravity/Center/crop/463x463/",
                pinpai : "品牌",
                dianming : "三姐尚好海鲜（西一路店）",
                fenshu : "4.5",
                yueshou : "月售45",
                qisong :"起送￥100",
                peisong : "配送费￥10",
                km : "10km",
                shijian : "30分钟",
                manjian1: "100元起",
                manjian2: " ",
                manjian3: " ",
            }
        ]
      }
    },
}
</script>

<style scoped>
    #ele-cvs{
        /* margin: 1rem; */
        width: 100%;
        height: 500px;
    }
    #ele-cvs .cvs-one{
        width: 90%;
        height: 14rem;
        margin: 1rem auto;
        box-shadow: 0 0.08rem 0.26667rem 0 rgb(211, 204, 204);
    }
    #ele-cvs .cvs-one .lingqu{
        display: flex;
        justify-content: space-around;
        width: 90%;
        height: 2rem;
        background-color:  rgb(254, 249, 218);
        margin: 0 auto;
        line-height: 2rem;
    }
    #ele-cvs .cvs-one .lingqu2{
        display: flex;
        justify-content: space-between;
        width: 90%;
        height: 2rem;
        /* background-color: pink; */
        margin: 0 auto;
        line-height: 2rem;
    }
    .ssize{
        font-size: .3rem;
    }
    .bsize{
        font-size: 1.8rem;
    }
    #ele-cvs .cvs-one .cvs-one-top .youhui{
        display: flex;
        justify-content: space-around;
    }
     #ele-cvs .cvs-one .cvs-one-top .youhui li .price{
        position: absolute;
        left:2.5rem;
        top:1.5rem;
        text-align: center;
    }
    #ele-cvs .cvs-one .cvs-one-top .youhui li{
        background:url(https://fuss10.elemecdn.com/4/7f/bf89a63c7ed2942b4fcff183462e3png.png) no-repeat;
        background-size: 100% 100%;
         text-align: center;
         width: 28%;
         height: 6rem;
         position: relative;
    }
    #ele-cvs .cvs-one .cvs-one-top .youhui li button{
        position:absolute;
        left: 1rem;
        bottom:0.5rem;
        width: 70%;
        outline: none;
        border:none;
        background-color: orange;
    }
    #ele-cvs .cvs-one .cvs-one-top .xiadan{
       
        display: flex;
        justify-content: space-between;
    }
     #ele-cvs .cvs-one .cvs-one-top .xiadan p{
         text-align: center;
         width: 30%;
    }
    #ele-cvs .anxin{
        display: flex;
        justify-content: space-between;
         width: 90%;
        margin: 1rem auto;
    }
    #ele-cvs .anxin .left{
         width: 60%;
    }
     #ele-cvs .anxin .you{
         width: 40%;
    }
     #ele-cvs .anxin .you img{
         width: 100%;
    }
    #ele-cvs .xuan{
        width: 90%;
        margin:0 auto;
        position: sticky;
        top:3rem;
        background-color: #fff;

    }
    
    #ele-cvs .xuan button{
        width: 19%;
        height: 2rem;
        background-color: rgb(243, 243, 243);
        outline: none;
        border:none;
       
    }
    #ele-cvs .shop-list{
        width: 100%;
    }
    #ele-cvs .shop-list ul{
        width: 100%;
        background-color: #fff;
    }
    #ele-cvs .shop-list ul li{
        width: 90%;
        margin:1rem auto;
        display: flex;
        justify-content: space-around;
    }
    #ele-cvs .shop-list ul li .list-one{
        width: 30%;
    }
    #ele-cvs .shop-list .list-one img{
        width: 100%;
    }
    #ele-cvs .shop-list .list-two{
        width: 65%;
    }
    #ele-cvs .shop-list .list-two .peisong{
        display: flex;
        justify-content: space-between
    }
    .cart-shop{
    position:fixed;
    background:url(https://shadow.elemecdn.com/faas/h5nr-torso-vip/pg-torso-assets/0.0.1/img/shopCart@3x.aee1d1a.png) no-repeat;
    background-size: contain;
    width: 3.68667rem;
    height: 3.68667rem;
    right: .4rem;
    bottom: 5rem;
    opacity: .99;
    z-index: 9000;
    }
    .heade{
        width: 90%;
        height: 4rem;
        background-color: red;
    }
    .xianshi{
        position: fixed;
        top:50%;
        left:35%;
        font-size:2rem;
        width: 10rem;
        background-color: rgb(194, 188, 188);
        opacity: .8;
        text-align: center;
        border-radius: 1rem;
    }
</style>
