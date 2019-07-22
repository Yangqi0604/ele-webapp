<template>
<div style="backgroundColor:white">
    <nav-item-header :itemList="itemList"></nav-item-header><br><br><br>
    <nav-item-bar-search></nav-item-bar-search>
    <!-- <input style="width:90%;backgroundColor:white" type="text" placeholder="输入商家，商品名称"> -->
    <ul class="banner-one">
        <li v-for="(s,sid) in bannerOnelist" :key="sid">
            <img :src="s.pic1" alt="">
            <div class="info">
                <div class="logo-container">
                    <img :src="s.pic2" alt="">
                </div>
                <div class="brand-info">
                    <div class="main-title">
                        {{s.p1}}
                    </div>
                    <div class="sub-title">
                        {{s.p2}}
                    </div>
                    <div class="button">
                        {{s.b1}}
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div id="ele-cvs">
        <div class="cvs-one">
            <div class="cvs-one-top">  
                <div class="lingqu"> 
                    <span>您有12元三重礼红包待领取</span>
                    <span style="color:red">去领取</span>
                </div>
                <h4 style="fontSize:1.1rem;width:90%;margin:0 auto;marginTop:.4rem">新人三重礼</h4>
                <div class="lingqu2">
                    <span>果蔬生鲜商超通用</span>
                    <span>规则</span>
                </div>
                <ul class="youhui">
                    <li>
                        <div class="price">
                            <span class="ssize">￥</span><span class="bsize">12</span>
                        </div>
                        <button @click="receive">领取</button>
                    </li>
                    <li>
                        <div class="price">
                            <span class="ssize">￥ </span><span class="bsize"> 5</span>
                        </div>
                        <button disabled="disabled">领取</button>
                    </li>
                    <li>
                        <div class="price">
                            <span class="ssize">￥ </span><span class="bsize"> 8</span>
                        </div>
                        <button disabled="disabled">领取</button>
                    </li>
                </ul>
                <div class="receive" v-show="chuxian">
                    领取成功
                </div>
                <div class="xiadan" style="margin:1rem 0;color:#999">
                    <p></p>
                    <p>下三单可领取</p>
                    <p>下五单可领取</p>
                </div>
            </div>
        </div>
        <img style="width:100%;margin:1rem 0;" src="https://fuss10.elemecdn.com/b/65/1c451a27bdc345380dd3af00a695dgif.gif" alt="">
        <div class="xiangou">
            <div class="xiangou-head">
                <span>限量抢购</span>
                <p>
                    <span>鲜食乳饮一折起</span>
                    <span>更多</span>
                </p>
            </div>
            <ul class="xiangou-content">
                <li v-for="(s,sid) in tuijianList" :key="sid">
                    <h4>{{s.p1}}</h4>
                    <p>{{s.p2}}</p>
                    <img :src="s.pic" alt="">                        
                </li> 
            </ul>
        </div>
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
        <div class="shop-list">
            <ul>
                <li v-for="(n,index) in shoplists" :key="index">
                    <div class="list-one">
                        <img :src="n.img" alt="">
                    </div>
                    <div class="list-two">
                            <div>
                                <span style="backgroundColor:rgb(255,215,44)">{{n.pinpai}}</span><em style="fontSize:1rem;paddingLeft:.7rem fontWeigt:700;color:#333">{{n.dianming}}</em>
                            <div style="lineHeight:1.8rem">
                                <i class="fa fa-star" aria-hidden="true" style="fontSize:.7rem;color:rgb(255,125,38)"></i>
                                <span style="color:rgb(255,125,38);fontSize:.7rem">{{n.fenshu}}</span>
                                <span>{{n.yueshou}}</span>
                            </div>
                            <div class="peisong" style="lineHeight:.8rem;color: #666;">
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
                                <span style="color:rgb(232, 89, 83); borderColor:rgba(226, 48, 40, 0.3)">{{n.manjian1}}</span>
                                <span v-if="manjian2=!''" style="color:red;">{{n.manjian2}}</span>
                                <span v-if="manjian3=!''" style="color:red;">{{n.manjian3}}</span>
                                <span><i class="fa fa-sort-desc" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        
            <h1 style="fontSize:1rem;textAlign: center;">没有更多了哦~</h1><br>
            <div class="cart-shop"></div>
        </div>
    </div>
    
</div>
</template>

<script>
    import NavItemHeader from '@/components/public/NavItemHeader.vue'
    import NavItemBarTitle from '@/components/public/NavItemBarTitle.vue'
    import { Toast } from 'mint-ui';
export default {
    name:"ele-cvs",
    components:{
      "nav-item-header":NavItemHeader,
      "nav-item-bar-title":NavItemBarTitle,
    //   "nav-item-bar-search":search,

    },
    data(){
      return {
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
        chuxian:false,
        itemList:[
          {
            "name":"为你精选",
            "path":"/"
          },
          {
            "name":"超市",
            "path":"/"
          },
          {
            "name":"便利店",
            "path":"/"
          },
          {
            "name":"果蔬",
            "path":"/"
          },
          {
            "name":"酒水",
            "path":"/"
          }
        ],
        tuijianList:[{
            "p1":"清爽一夏",
            "p2":"低至5折",
            "pic":"https://fuss10.elemecdn.com/5/d9/e913a27646525bf1027c4dec25639png.png?imageMogr/thumbnail/!120x120r/gravity/Center/crop/120x120/"
        },
        {
            "p1":"盛夏热卖",
            "p2":"最高减20元",
            "pic":"https://fuss10.elemecdn.com/0/01/9141d79ea5f7a5d81af96c5f9d072png.png?imageMogr/thumbnail/!120x120r/gravity/Center/crop/120x120/"
        },
        {
            "p1":"应急百货",
            "p2":"第二件1元",
            "pic":"https://fuss10.elemecdn.com/1/09/6bd23792612270cc7963ccde95acapng.png?imageMogr/thumbnail/!120x120r/gravity/Center/crop/120x120/"
        },
        {
            "p1":"冰爽啤酒",
            "p2":"1折限量供应",
            "pic":"https://fuss10.elemecdn.com/3/95/454f6d007481a6c7afc28f41f76f6png.png?imageMogr/thumbnail/!120x120r/gravity/Center/crop/120x120/"
        }        
        ],
        bannerOnelist:[
            {
                pic1:"https://fuss10.elemecdn.com/4/b5/33f81ece3a30e49ab73c861239c36jpeg.jpeg?imageMogr/thumbnail/!324x400r/gravity/Center/crop/324x400/",
                pic2:"https://fuss10.elemecdn.com/5/d7/e806215160021d0332ae4cea8c84cjpeg.jpeg",
                p1:"华润万家大卖场",
                p2:"满49免5元运费",
                b1:"去抢购"
            },
            {
                pic1:"https://fuss10.elemecdn.com/c/d1/465e807bec51774dd3b3532e4a488jpeg.jpeg?imageMogr/thumbnail/!324x400r/gravity/Center/crop/324x400/",
                pic2:"https://fuss10.elemecdn.com/8/5b/526bdaec62c6afd21744499fa9f01jpeg.jpeg",
                p1:"每一天便利店",
                p2:"满39减10",
                b1:"去抢购"
            },
            {
                pic1:"https://fuss10.elemecdn.com/0/c1/91bfb52577dd61c2a4a88609a1b4fjpeg.jpeg?imageMogr/thumbnail/!324x400r/gravity/Center/crop/324x400/",
                pic2:"https://fuss10.elemecdn.com/f/c4/68ddff583e334f2aad8657cc8c514jpeg.jpeg",
                p1:"ole精品超市",
                p2:"美国车厘子低至6折",
                b1:"去抢购"
            },
            {
                pic1:"https://fuss10.elemecdn.com/d/4b/c58c9967fe7a70fde3db9173b5475jpeg.jpeg?imageMogr/thumbnail/!324x400r/gravity/Center/crop/324x400/",
                pic2:"https://fuss10.elemecdn.com/9/13/11370e670d5881ae761df9099c900png.png",
                p1:"1919 领券59减10",
                p2:"百威经典醇正爆款热销",
                b1:"去抢购"
            },
            {
                pic1:"https://fuss10.elemecdn.com/b/1b/5c268fa68c992489171d6ecd8c92cjpeg.jpeg?imageMogr/thumbnail/!324x400r/gravity/Center/crop/324x400/",
                pic2:"https://fuss10.elemecdn.com/1/9a/0c39d6ddbc1b45f20c12513b35036png.png",
                p1:"每日好店",
                p2:"人气推荐",
                b1:"去抢购"
            },                                                
        ],
        shoplists:[
            {
                img:"https://fuss10.elemecdn.com/2/2c/85307ddb2618856ea92cd8a42065ejpeg.jpeg?imageMogr/format/jpeg/thumbnail/!280x280r/gravity/Center/crop/280x280/",
                pinpai : "品牌",
                dianming : "晨晨便利店",
                fenshu : "4.8",
                yueshou : "月售1180",
                qisong :"起送￥25",
                peisong : "配送费￥3",
                km : "2.9km",
                shijian : "46分钟",
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
                manjian2: "",
                manjian3: "",
            }
        ]
      }
    },
    methods: {
    receive(){
        this.chuxian=true;
        console.log(111)
        setTimeout(this.hide,1000)
    },
    hide(){
        this.chuxian=!this.chuxian
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
        margin: 0 auto;
        line-height: 2rem;
        color: #666;
        margin-bottom: .4rem;
        font-weight: 400;
    }
    .ssize{
        font-size: .3rem;
        position: absolute;
        left: 1rem;
    }
    .bsize{
        font-size: 1.8rem;
    }
    #ele-cvs .cvs-one .cvs-one-top .youhui{
        display: flex;
        justify-content: space-around;
    }
     #ele-cvs .cvs-one .cvs-one-top .youhui li .price{
        padding-top: 1rem;
        text-align: center;
        color: #7d490f;
        width: 88%;
    }
    .lingqu h4{
        font-size: 1rem;
        width: 90%;
        margin: 0px auto;
        margin-top: .4rem;
        font-weight: 700;        
    }
    #ele-cvs .cvs-one .cvs-one-top .youhui li{
        background:url(https://fuss10.elemecdn.com/4/7f/bf89a63c7ed2942b4fcff183462e3png.png) no-repeat;
        background-size: 88% 100%;
         text-align: center;
         width: 28%;
         height: 6rem;
         position: relative;
    }
    #ele-cvs .cvs-one .cvs-one-top .youhui li button{
        position:absolute;
        left: .6rem;
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
        font-size:.64rem;
       
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
        width: 25%;
    }
    #ele-cvs .shop-list .list-one img{
        width: 82%;
    }
    #ele-cvs .shop-list .list-two{
        width: 75%;
    }
    #ele-cvs .shop-list .list-two .peisong{
        display: flex;
        justify-content: space-between
    }
    .list-two>div>em{
        font-size:1rem;
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
.banner-one{
    margin-top: .2rem;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    padding: .13333rem 0;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NTAgMjY4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMDAlIiB4Mj0iLTEuNjI4JSIgeTE9IjUwJSIgeTI9IjUwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwODVGRiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBBRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTAtMzE4aDc1MHYyNTI4SDB6Ii8+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTc1MCAxMjcuNzc2Yy05My4zNjMgNTguNzI5LTIwNi41NTUgMTAyLjk0My0zMzEuODY0IDEyNS4wMzhDMjY3LjU0IDI3OS4zNjggMTIyLjQ2MyAyNjkuOTE4IDAgMjMyLjI4NlYwaDc1MHYxMjcuNzc2eiIvPjwvZz48L3N2Zz4=) no-repeat;
    background-size: auto;    
}
.banner-one li{
    display: inline-block;
    position: relative;
    margin-right: .13333rem;
    width: 10.33333rem;
    height: 12.5rem;
    padding-bottom: .02667rem;    
}
.banner-one li>img{
    width: 100%;
    height: 100%;
    border-radius: 7px;
}
.info{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .02667rem;
    background: url(http://shadow.elemecdn.com/faas/h5nr-torso-vip/pg-torso-assets/0.0.1/img/mask.844c8ef.png) no-repeat;
    background-size: cover;
    border-radius: 8px;    
}
.info .logo-container{
    position: absolute;
    left: .9rem;
    top: 0;
    width: 0.93333rem;
    height: 1.26667rem;
    padding: .18667rem .06667rem 0;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
}
.info .logo-container img{
    width:100%;
    height:100%;
}
 .info .brand-info{
    position: absolute;
    left:.9rem;
    bottom:.9rem;
}
.brand-info .main-title{
    margin-bottom: .26333rem;
    font-family: PingFangSC-Semibold;
    font-size: .85667rem;
    color: #fff;
    line-height: .90333rem;
}
.brand-info .sub-title{
    margin-bottom: .56667rem;
    font-family: PingFangSC;
    font-size: .8667rem;
    color: #fff;
    line-height: .8667rem;    
}
.brand-info .button{
    width: 3.33333rem;
    height: .96rem;
    line-height: .96rem;
    font-size: .29333rem;
    background-color: #2396ff;
    color: #f7f7f7;
    border-radius: 100px;
    text-align: center;
}
.xiangou{
    box-shadow: 0 0.08rem 0.26667rem 0 rgba(0,0,0,.08);
    border-radius: 8px;
    margin: 0 .7rem .13333rem;    
}
.xiangou-head{
    display:flex;
    justify-content:space-between;
}
.xiangou-head>span{
    width: 20%;
    display: inline-block;
    font-family: PingFangSC-Medium;
    font-size: .94667rem;
    color: #333;
    line-height: 1.42667rem; 
}
.xiangou-head >p{
    width:78%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    margin-left: .26667rem;
    font-size: .32rem;
    color: #666;
    letter-spacing: 0;
    line-height: .32rem;
}
.xiangou-content{
    display:flex;
    justify-content: space-around;
    margin-top: 1rem;
}
.xiangou-content li{
    width:20%;
    height:7.3rem;
    text-align:center;
}
.xiangou-content li img{
    width: 80%;
    height: 60%;
    margin-top: .6rem;
}
.xiangou-content li h4{
    font-size: .82rem;
    color: #333;
    letter-spacing: 0;
}
.xiangou-content li p{
    height: 0.85333rem;
    margin-top: .40667rem;
    font-size: 0.58333rem;
    color: #666;
    font-weight: 400;
}
.receive{
    position: fixed;
    top: 38%;
    left: 35%;
    text-align: center;
    line-height: 7rem;
    background:rgba(153, 153, 153, .7);
    font-size: 1.5rem;
    width: 9rem;
    height: 7rem;
    border-radius:.4rem;
}
</style>