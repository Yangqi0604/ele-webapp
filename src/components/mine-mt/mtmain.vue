<template>
    <div class="mtmain">
        <div class="qianbao">
            <h1>我的钱包</h1>
            <span>进入钱包</span>
        </div>
        <div class="mtjq">
            <div class="mtjqs"
                 v-for="(item,index) in mt"
                 :key="index">
                <div class="q1">
                    <h1>{{item.a1}}</h1>
                    <span>{{item.a2}}</span>
                </div>
                <h2>{{item.a3}}</h2>
                <p>{{item.a4}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mtmain",
        data() {
            return {
                "mt": [
                    {
                        "a1": "10",
                        "a2": "万",
                        "a3": "美团借钱",
                        "a4": "美团用户专享",
                    },
                    {
                        "a1": "0.00",
                        "a2": "",
                        "a3": "资 产",
                        "a4": "持有金额(元)",
                    },
                    {
                        "a1": "127",
                        "a2": "元",
                        "a3": "美食享优惠",
                        "a4": "最高随机减",
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .mtmain {
        width: 100%;
        border-radius: 20px 20px 0 0;
        height: 170px;
        background-color: white;
    }
    .qianbao {
        width: 90%;
        margin: 0 auto;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .qianbao h1 {
        font-size: 16px;
        font-weight: 900;
    }
    .qianbao span {
        font-size: 12px;
        color: #9D9D9D;
    }
    .mtjq {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
    }
    .q1 {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    .mtjqs h1 {
        font-size: 20px;
        font-weight: 900;
    }
    .mtjqs span {
        font-size: 12px;
    }
    .mtjqs h2 {
        font-size: 14px;
        margin-top: 20px;
        font-weight: 600;
    }
    .mtjqs p {
        font-size: 12px;
        margin-top: 10px;
        color: #9D9D9D;
    }
</style>