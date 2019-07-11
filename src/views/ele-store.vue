<template>
    <div>
        <div class="elestore-head">
            <div class="estoreHead-top">
                <i class="fa  fa-angle-left fa-lg"></i>
                <div>
                    <p>品牌</p>
                </div>
            </div>
            <div class="estoreHead-bottom">
                <h2>
                    <span>顶顶香（T11-Block店）</span>
                    <i class="fa fa-caret-right "></i>
                </h2>
                <div>
                    <span>评价4.6</span>
                    <span>月售1291单</span>
                    <span>蜂鸟专送约48分钟</span>
                </div>
                <div>
                    <p>￥11</p>
                    <p>无门槛</p>
                    <p>领取</p>
                </div>
                <div>
                    <span>满减</span>
                    <span>
                        <p>满35减17</p>
                        <p>满65减29</p>
                        <p>满95减40</p>
                    </span>
                    <span>
                        <p>3个优惠券</p>
                        <i class="fa fa-caret-down"></i>
                    </span>
                </div>
                <div>
                    <p>公告:欢迎光临，用餐高峰期请提前下单，谢谢</p>
                </div>
            </div>
            <div class="estoreHead-switch">
                <router-link to="" tag="p">点餐</router-link>
                <router-link to="" tag="p">评价</router-link>
                <router-link to="" tag="p">商家</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:"ele-store",
    data(){

    }

}
</script>

<style scoped>
    .estoreHead-top{
        background-image: url(https://fuss10.elemecdn.com/a/c1/ead69c6a1e0c515aa9cdbd6314eccpng.png?imageMogr/format/webp/thumbnail/750x/);
        background-size: cover;
        background-repeat: no-repeat;
        height:6.25rem;
        width:100%;
        position: relative;
    }
    .estoreHead-top i{
        color: white;
        font-size:2.12125rem;
        padding-left: .7rem;
        font-weight:300;
    }
    .estoreHead-top div{
        width: 5rem;
        height: 5rem;
        background-image: url(https://fuss10.elemecdn.com/7/51/214c1949dc059732ac12ea7d9ce8bpng.png?imageMogr/format/webp/thumbnail/150x/);
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 39%;
        left: 38%;
    }
    .estoreHead-top div p{
        color: #6f3f15;
        font-weight: 700;
        font-size: .48rem!important;
        background-image: linear-gradient(90deg,#fff100,#ffe339);
        width:1.5rem;
    }    
    .estoreHead-bottom{
        text-align: center;
        margin-top: 1.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .estoreHead-bottom h2{
        font-weight:600;
        font-size:1.35rem;
        color: #333;
    }
    .estoreHead-bottom div:nth-of-type(1){
        color: #666;
        margin-top:1rem;
        font-size: .3rem;
    }
    .estoreHead-bottom div:nth-of-type(2){
    display: flex;
    text-align: center;
    justify-content: space-around;
    margin-top: .7rem;
    color: #594519;
    background: #ffe578;
    width: 8.53rem;
    height: 1.4rem;
    line-height:1.4rem;
    font-weight: 400;
    font-size: .4rem;
    }
    .estoreHead-bottom div:nth-of-type(2)>p:nth-of-type(1){
        font-weight:700;
        font-size:.8rem;
    }  
    .estoreHead-bottom div:nth-of-type(3){
        display: flex;
        color: #333;
        font-size: .4rem;
        width: 80%;
        justify-content: space-around;
        margin-top: .6rem;
        align-items: center;
    }  
    .estoreHead-bottom div:nth-of-type(3)>span{
        display:flex;       
    }
    .estoreHead-bottom div:nth-of-type(3)>span:nth-of-type(1){
        background-color: rgb(240, 115, 115);
        color: white;
        font-size: .5625rem;
        width: 2rem;
        line-height: 1rem;
        justify-content: center;
    } 
    .estoreHead-bottom div:nth-of-type(3)>span:nth-of-type(2){
        color:#999;
    } 
    .estoreHead-bottom div:nth-of-type(3)>span:nth-of-type(3){
        color:#999;
    }
    .estoreHead-bottom div:nth-of-type(4){
        color: #999;
        font-size: .5625rem;
        width: 90%;
        align-self: flex-start;
        margin-top: .5rem;   
    }  
    .estoreHead-switch{
        display: flex;
        margin-top: 1.2rem;
        justify-content: space-around;
        color: #666;
        font-weight: 700;
    } 
    .estoreHead-switch{
        height:2.5rem;
    } 
    .router-link-active{
        border-bottom: 1px solid #54ACFF;
    }
</style>