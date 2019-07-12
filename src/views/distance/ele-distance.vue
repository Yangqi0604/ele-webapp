<template>
    <div id="distance-top">
        <div class="top">
            <!-- 金币商城 -->
            <div class="top-one">
                <div>
                    <p style="color: rgb(255, 153, 0);fontSize:1rem">金币商城</p>
                    <P class="tips">0元好物在这里</P>
                </div>
                <div>
                <img style="marginTop:3.5rem;width:4.8rem" src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="">
                </div>
            </div>
            <!-- 推荐有奖 -->
            <div class="bottom">
                <div class="bottom-one" style="border-bottom:1px dotted #999;">
                    <div >
                        <p style="color: rgb(27, 169, 225);marginTop:.8rem">推荐有奖</p>
                        <p class="tips">20元现金拿不停</p>
                    </div>
                    <div>  
                        <img style="width:3rem;marginTop:.5rem" src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/" alt="">
                    </div>
                </div> 
                <!-- 周边优惠 -->
               <div class="bottom-one">
                    <div >
                        <p style="color: rgb(27, 169, 225);marginTop:.8rem">周边优惠</p>
                        <p class="tips">领取口碑好券</p>
                    </div>
                    <div>  
                        <img style="width:3rem;marginTop:.5rem" src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="kongbai"></div>
        <div class="recommend">
            <div class="recommend-title">
                <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                <i class="fa fa-thumbs-o-up" aria-hidden="true" style="color:red;fontSize:1.3rem;"> </i>
                <span style="fontSize:1.5rem;">为你推荐</span>
                <i class="fa fa-hand-o-left" aria-hidden="true"> </i>
                <p class="tips">你的口味，我都懂得</p>
            </div>
        </div>
        <!-- 推荐商品 -->
        <div class="shop-List">
            <ul>
                <li v-for="(n,index) in list" :key="index">
                    <img  :src="n.img" alt="">
                    <h3>{{n.title}}</h3>
                    <span class="tips">{{n.shou}}</span>  <span class="tips">{{n.good}}</span><br>
                    <em style="color:red;fontSize:1.5rem">{{n.price}}</em> 
                    <span style="display: inlineBlock;border:1px solid pink;color:pink;fontSize:0.8rem" v-if="n.jian!==''">{{n.jian}}</span>
                    <del class="tips1" v-if="n.del!==''">{{n.del}}</del>
                    <h5 style="boeder:1px dotted #999;">
                        <hr>
                        <i class="fa fa-university tips" aria-hidden="true">{{n.shopname}}</i>
                    </h5>
                </li>
            </ul>
            <div class="more">
                <p class="tips">查看更多 <i  class="fa fa-chevron-right" aria-hidden="true"></i></p>
            </div>
        </div>
        <div class="kongbai"></div>
        <!-- 限时好礼 -->
        <div class="goodgift">
            <div class="recommend-title">
                <i class="fa fa-hand-o-right" aria-hidden="true"></i>
                <i class="fa fa-clock-o" aria-hidden="true" style="color:red;fontSize:1.3rem;"> </i>
                <span style="fontSize:1.5rem;">限时好礼</span>
                <i class="fa fa-hand-o-left" aria-hidden="true"> </i>
                <p class="tips">金币换壕礼</p>
            </div>
            <div class="gift-list">
                <ul>
                    <li v-for="(gift,index) in giftList" :key="index">
                        <img :src="gift.img" alt="">
                        <p class="tip">{{gift.name}}</p>
                        <span class="tip">{{gift.nowprice}}</span>
                        <del class="tips">{{gift.oldprice}}</del>
                        <!-- 走上角 -->
                        <p class="left-top">{{gift.ding}}</p>
                    </li>
                </ul>
                <div class="more">
                    <p class="tips">查看更多 <i  class="fa fa-chevron-right" aria-hidden="true"></i></p>
                </div>
            </div>
        </div>
        <div class="footed" style="height:2.5rem;width:100%"></div>
    </div>
</template>

<script>
export default {
    name : "shopList",
    data(){
        return{
            list:[
                {
                    img : "https://fuss10.elemecdn.com/d/d4/7e14b607e21c8ff7ee61b5d1aafe6jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
                    title : "红烧肉",
                    shou : "月售25份",
                    good : "好评率75%",
                    price : "38.9",
                    jian : "满35减22",
                    shopname : "川湘私房菜（凤城6路店）",
                    del : ""
                },
                 {
                    img : "https://fuss10.elemecdn.com/c/b7/a2030745e80ad7c106d8fe1911437jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
                    title : "香干回锅肉",
                    shou : "月售24份",
                    good : "好评率100%",
                    price : "30.98",
                    jian : "满29减12",
                    shopname : "川湘私房菜（凤城6路店）"
                },
                 {
                    img : "https://fuss10.elemecdn.com/4/c7/076641d3097595cb8a1eb80c84491png.png?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
                    title : "番茄过桥米线",
                    shou : "月售322份",
                    good : "好评率89%",
                    price : "13.9",
                    jian : "",
                    shopname : "小阿妹米线",
                    del : "25"
                },
                {
                    img : "https://fuss10.elemecdn.com/7/71/2b05c04024a81896f3172e1876cc3png.png?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
                    title : "麻辣过桥米线",
                    shou : "月售434份",
                    good : "好评率90%",
                    price : "13.9",
                    jian : "",
                    shopname : "小阿妹米线",
                    del : "26"
                },
                {
                    img : "https://fuss10.elemecdn.com/8/ea/9d1f5e2d99e0f31ac6e92e8be2b4bjpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
                    title : "毛记精品",
                    shou : "月售131份",
                    good : "好评率100%",
                    price : "57.82",
                    jian : "",
                    shopname : "毛记冒菜（凤城五路店）",
                    del : "59"
                },
                {
                    img : "https://fuss10.elemecdn.com/2/0c/c3a83512427ccd2b735ccb7bcd7efjpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
                    title : "毛记精品",
                    shou : "月售21份",
                    good : "好评率100%",
                    price : "86.24",
                    jian : "",
                    shopname : "毛记冒菜（凤城五路店）",
                    del : "88"
                }
            ],
            giftList:[
                {
                    img : "https://fuss10.elemecdn.com/7/ec/adf8ae0fd52a0eb56f4332fb61ac2jpeg.jpeg?imageMogr/format/webp/",
                    name : "3元品质联盟红包",
                    nowprice : "90金币",
                    oldprice : "￥3",
                    ding : "限时优惠"
                },
                {
                    img : "https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/",
                    name : "数码经络按摩仪",
                    nowprice : "90金币",
                    oldprice : "￥239",
                    ding : "特价换购"
                },
                {
                    img : "https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/",
                    name : "扫地机器人",
                    nowprice : "9金币",
                    oldprice : "￥99",
                    ding : "特价换购"
                }
            ]
        }
    }
}
</script>

<style>
    #distance-top{
        width: 90%;
        margin: 1rem auto;
    }
    #distance-top .top{
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
    }
    #distance-top .top .top-one{
        
        width: 50%;
        height: 6rem;
        display: flex;
        justify-content: space-between;
    }
    #distance-top .bottom{
        width: 50%;
        border-left:1px dotted #999;
        height: 8rem;
    }
    #distance-top .bottom-one{
        height: 50%;
        display: flex;
        justify-content: space-around;
    }
    .tips{
        font-size: 0.8rem;
        color:#999;
        line-height: 1.8rem;
    }
    .tips1{
        font-size: 0.8rem;
        color:#999;
    }
     #distance-top .kongbai{
         margin-left:-1.2rem;
         width: 115.5%;
         margin-left:-10%; 
         height: 1rem;;
         background-color: rgba(245,245,245);
     }
    #distance-top .recommend{
        width: 100%;
        background-color: #fff;
    }
    #distance-top .recommend-title{
        margin-top:1rem;
       text-align: center;
    }
    .shop-List ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .shop-List ul li {
        margin-top:1rem;
        width: 47%;
    }
    .shop-List ul li img{
        width: 100%;
        height: 7rem;
        margin: 0 auto;
    }
    #distance-top .more{
       text-align: center;
       margin: 1rem auto;

    }
    #distance-top .goodgift{
        width: 90%;
        margin: 0 auto;
    }
    #distance-top .goodgift .gift-list ul {
       display: flex;
       justify-content: space-between;
   }
   #distance-top .goodgift .gift-list ul li {
       width: 33%;
       position: relative;
   }
    #distance-top .goodgift .gift-list ul li img{
       width: 100%;
   }
    .tip{
        font-size: 0.9rem;
    }
    #distance-top .goodgift .gift-list ul li .left-top{
        position:absolute;
        left:0.2rem;
        top:0.2rem;
        background-color:#413d3c;
        color:white;
        font-size: 0.8rem;
    }
</style>
