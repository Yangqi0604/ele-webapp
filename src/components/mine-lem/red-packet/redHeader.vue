<template>
    <div class="redHerder">
        <div class="recommend">
            <div class="recommendLeft">
                <i class="fa fa-gift" aria-hidden="true"></i>
                <span>推荐有奖</span>
            </div>
            <div class="recommendRight">
                <span>15元现金拿不停</span>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
        </div>
        <div class="redMain">
            <div class="redCenter">
                <img src="//fuss10.elemecdn.com/5/51/255490294be88d8a2fbb92c5ad1bcgif.gif" alt="">
            </div>
            <div class="redCent">
                <h1>没有红包</h1>
                <span>快去抢几个吧</span>
                <p>查看历史红包 | 红包说明</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "redHeader"
    }
</script>

<style scoped>
    .redHerder {
        min-height: 500px;
        background-color: #F5F5F5;
    }
    .recommend {
        width: 92%;
        height: 40px;
        margin: 8px auto;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .recommendLeft {
        margin-left: 10px;
        display: flex;
        align-items: center;
    }
    .recommendLeft i {
        font-size: 20px;
        color: #FC7B53;
    }
    .recommendLeft span {
        font-size: 14px;
        margin-left: 8px;
        color: #333333;
    }
    .recommendRight {
        margin-right: 10px;
        display: flex;
        align-items: center;
    }
    .recommendRight i {
        font-size: 18px;
        color: #ABABAB;
    }
    .recommendRight span {
        font-size: 12px;
        margin-right: 6px;
        color: #A3A3A3;
    }
    .redCenter {
        margin-top: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .redCenter img {
        width: 200px;
        height: 200px;
    }
    .redCent {
        margin-top: 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .redCent h1 {
        font-size: 20px;
        color: #6A6A6A;
    }
    .redCent span {
        margin-top: 10px;
        font-size: 14px;
        color: #C6C6C6;
    }
    .redCent p {
        margin-top: 20px;
        font-size: 12px;
        color: #C6C6C6;
    }
</style>