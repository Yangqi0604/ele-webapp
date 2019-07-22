<template>
    <div class="goldHeader">
        <div class="Header">
            <h1>兑换商品</h1>
            <span>好物随心换</span>
        </div>
        <!--    列表    -->
        <div class="center">
            <div class="centers"
                 v-for="(item,index) in list"
                 :key="index">
                <div class="centerone">
                    <span>{{item.a1}}</span>
                    <div class="centertwos">
                        <h5>{{item.a2}}</h5>
                        <p>{{item.a3}}</p>
                        <span>{{item.a4}}</span>
                    </div>
                </div>
                <img :src="item.pic" alt="">
            </div>
        </div>
        <!--    查看更多    -->
        <div class="goldFooter">
            <span>查看更多</span>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goldHeader",
        data() {
            return {
                "list": [
                    {
                        "a1": "3元品质联盟红包",
                        "a2": "90",
                        "a3": "金币",
                        "a4": "限时优惠",
                        "pic": "https://fuss10.elemecdn.com/7/ec/adf8ae0fd52a0eb56f4332fb61ac2jpeg.jpeg?imageMogr/format/webp/thumbnail/!315x195r/gravity/Center/crop/315x195/"
                    },
                    {
                        "a1": "数码经络按仪",
                        "a2": "9",
                        "a3": "金币",
                        "a4": "特价换购",
                        "pic": "https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/thumbnail/!315x195r/gravity/Center/crop/315x195/"
                    },
                    {
                        "a1": "扫地机器人",
                        "a2": "9",
                        "a3": "金币",
                        "a4": "特价换购",
                        "pic": "https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/thumbnail/!315x195r/gravity/Center/crop/315x195/"
                    },
                    {
                        "a1": "悬浮机械手感套装",
                        "a2": "9",
                        "a3": "金币",
                        "a4": "特价换购",
                        "pic": "https://fuss10.elemecdn.com/7/ad/f0132ee0fee6c57253ada4573364ejpeg.jpeg?imageMogr/format/webp/thumbnail/!315x195r/gravity/Center/crop/315x195/"
                    },
                    {
                        "a1": "4D电动剃须刀",
                        "a2": "9",
                        "a3": "金币",
                        "a4": "特价换购",
                        "pic": "https://fuss10.elemecdn.com/e/4d/510b09923a4be3d666cd4ee2e1dd7jpeg.jpeg?imageMogr/format/webp/thumbnail/!315x195r/gravity/Center/crop/315x195/"
                    },
                    {
                        "a1": "12寸手机屏幕高清放大器",
                        "a2": "9",
                        "a3": "金币",
                        "a4": "特价换购",
                        "pic": "https://fuss10.elemecdn.com/6/20/fdce2e5bdc6243bc89668f99e33a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!315x195r/gravity/Center/crop/315x195/"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .goldHeader {
        min-height: 500px;
        background-color: #FFFFFF;
    }
    .Header {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-bottom: 1px solid #ccc;
    }
    .Header h1 {
        font-size: 16px;
        font-weight: 900;
    }
    .Header span {
        font-size: 12px;
        margin-top: 4px;
        color: #B0B0B0;
    }
    .center {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .centers {
        width: 49%;
        height: 170px;
        border: 1px solid #F9F9F9;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .centers img {
        width: 80%;
        height: 56%;
        margin-left: 10%;
    }
    .centerone {
        margin-left: 7%;
        display: flex;
        flex-direction: column;
    }
    .centerone span {
        font-size: 14px;
    }
    .centertwos {
        width: 70%;
        margin-top: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .centertwos h5 {
        font-size: 12px;
        color: #FF6750;
    }
    .centertwos p {
        font-size: 12px;
        color: #BCBCBC;
    }
    .centertwos span {
        display: block;
        width: 56px;
        height: 16px;
        border-radius: 2px;
        line-height: 16px;
        text-align: center;
        background-color: #F94843;
        font-size: 12px;
        color: #FEE6E5;
    }
    .goldFooter {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #FAFAFA;
    }
    .goldFooter span {
        font-size: 14px;
        color: #999999;
    }
    .goldFooter i {
        font-size: 18px;
        color: #999999;
        margin-left: 6px;
    }
</style>