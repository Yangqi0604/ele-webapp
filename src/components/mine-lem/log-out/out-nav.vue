<template>
    <div class="elmLogOut">
        <div class="outNav">
            <div class="head">
                <span>头像</span>
                <div class="heads">
                    <img src="https://fuss10.elemecdn.com/2/7c/43ec114eae35cdcee08de1d885c99jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/" alt="">
                    <span> > </span>
                </div>
            </div>
        </div>
        <div class="outNavs">
            <div class="head">
                <span>用户名</span>
                <div class="heads">
                    <p>肖楠000Shp</p>
                    <span> > </span>
                </div>
            </div>
        </div>
        <div class="number">
            <span>账号绑定</span>
        </div>
        <div class="outNavs">
            <div class="head">
                <div class="heada">
                    <i class="fa fa-mobile" aria-hidden="true"></i>
                    <span>手机</span>
                </div>
                <div class="heads">
                    <p>135****2767</p>
                    <span> > </span>
                </div>
            </div>
        </div>

        <div class="number">
            <span>安全设置</span>
        </div>
        <div class="outNavs">
            <div class="head">
                <span>登录密码</span>
                <div class="heade">
                    <p>未设置</p>
                    <span> > </span>
                </div>
            </div>
        </div>
        <div class="out">
            <span>退出登录</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "log-out-nav"
    }
</script>

<style scoped>
    .elmLogOut {
        background-color: #F5F5F5;
    }
    .outNav {
        width: 100%;
        height: 80px;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #FAFAFA;
    }
    .outNavs {
        width: 100%;
        height: 50px;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #FAFAFA;
    }
    .head {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .head span {
        font-size: 16px;
        font-weight: 700;
    }
    .heads {
        display: flex;
        align-items: center;
    }
    .heads img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .heads span {
        font-size: 18px;
        font-weight: 900;
        margin-left: 4px;
        color: #A9A9A9;
    }
    .heads p {
        font-size: 16px;
        color: #898989;
    }
    .number {
        width: 90%;
        margin: 0 auto;
        height: 22px;
    }
    .number span {
        display: block;
        font-size: 12px;
        margin-top: 16px;
        color: #999999;
    }
    .heada i {
        font-size: 22px;
        color: #0097FF;
    }
    .heada span {
        font-size: 18px;
    }
    .heade {
        display: flex;
        align-items: center;
    }
    .heade span {
        font-size: 18px;
        font-weight: 900;
        margin-left: 4px;
        color: #A9A9A9;
    }
    .heade p {
        font-size: 16px;
        color: #0F9DFF;
    }
    .out span {
        display: block;
        width: 100%;
        font-size: 16px;
        font-weight: 900;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #FFFFFF;
        margin-top: 20px;
        color: #FF5339;
    }
</style>