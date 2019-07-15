<template>
    <div class="redNav">
        <div class="reds">
            <router-link tag="div" to="/mine">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </router-link>
            <h1>我的优惠</h1>
            <span>兑换红包</span>
        </div>
        <div class="redone">
            <div class="redleft">
                <span>红包</span>
                <p>0</p>
            </div>
            <div class="redleft">
                <span>店铺红包</span>
                <p>1</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "redNav"
    }
</script>

<style scoped>
    .redNav {
        width: 100%;
        background-color: #0090FF;
    }
    .reds {
        width: 90%;
        margin: 0 auto;
        height: 46px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #2497FE;
    }
    .reds i {
        font-size: 18px;
        color: #F9FDFF;
        font-weight: 100;
    }
    .reds h1 {
        font-size: 18px;
        font-weight: 900;
        color: #F9FDFF;
    }
    .reds span {
        font-size: 14px;
        color: #F9FDFF;
    }
    .redone {
        width: 90%;
        margin: 0 auto;
        height: 36px;
        display: flex;
        justify-content: space-around;
        /*align-items: center;*/
    }
    .redleft {
        display: flex;
    }
    .redleft span {
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        color: #FFFFFF;
    }
    .redleft p {
        height: 30px;
        line-height:30px;
        text-align: center;
        font-size: 12px;
        color: #FFFFFF;
        margin-left: 4px;
    }
</style>