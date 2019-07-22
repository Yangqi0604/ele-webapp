<template>
    <div class="elmLogOut">
        <div class="outNav">
            <div class="head">
                <span>头像</span>
                <div class="heads">
                    <div class="loginYu">
                        <!--   上传头像  -->
                        <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="fa fa-user-circle" aria-hidden="true"></i>
                        </el-upload>
                    </div>
                    <span>></span>
                </div>
            </div>
        </div>
        <div class="outNavs">
            <div class="head">
                <span>用户名</span>
                <div class="heads">
                    <p class="username">{{userInfo._id}}</p>
                    <span></span>
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
                    <p>{{encryPhone(userInfo.phone)}}</p>
                    <span>></span>
                </div>
            </div>
        </div>

        <div class="out">
            <span @click="handleLoginOut">退出登录</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "logOut",
        data() {
            return {
                userInfo: "",
                imageUrl: ''
            };
        },
        beforeRouteEnter(to, from, next) {
            next(vm => vm.getData());
        },
        created(){
            //从localStorage中取出照片
            this.imageUrl=localStorage.getItem("img")
        },
        methods: {
            handlelogin() {
                this.$router.push("/phoneLogin");
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                //把照片保存到localStorage中
                localStorage.setItem("img",this.imageUrl)
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },

            getData() {
                const user_id = localStorage.ele_login;
                //   console.log(user_id);
                this.$axios(`/api/user/user_info/${user_id}`).then(res => {
                    // console.log(res.data);
                    this.userInfo = res.data;
                });
            },
            encryPhone(phone) {
                return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
            },
            handleLoginOut() {
                localStorage.removeItem("ele_login");
                this.$router.push("/phoneLogin");
                // localStorage.removeItem("img");
            }
        }
    };
</script>

<style scoped>
    .elmLogOut {
        background-color: #f5f5f5;
    }
    .outNav {
        width: 100%;
        height: 80px;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #fafafa;
    }
    .outNavs {
        width: 100%;
        height: 50px;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #fafafa;
    }
    .username {
        width: 5rem;
        overflow: hidden;
        font-size: 16px;
        color: #898989;
        text-overflow: ellipsis;
        white-space: nowrap;
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
        margin-right: 6px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-size: 100%;
    }
    .heads span {
        font-size: 18px;
        font-weight: 900;
        margin-left: 4px;
        color: #a9a9a9;
    }
    .heads p {
        margin-right: 6px;
        overflow: hidden;
        font-size: 14px;
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
        color: #0097ff;
    }
    .heada span {
        font-size: 18px;
    }
    .heade span {
        font-size: 18px;
        font-weight: 900;
        margin-left: 4px;
        color: #a9a9a9;
    }
    .heade p {
        font-size: 16px;
        color: #0f9dff;
    }
    .out span {
        display: block;
        width: 100%;
        font-size: 16px;
        font-weight: 900;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #ffffff;
        margin-top: 20px;
        color: #ff5339;
    }
    .loginYu {
        margin-right: 6px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-size: 100%;
        background-color: #F3F6FC;
    }
    .loginYu i {
        color: #FEE2B3;
        line-height: 60px;
        width: 60px;
        text-align: center;
        font-size: 60px;
    }

    /* ElementUI 插件css */
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #F3F6FC;
    }
</style>