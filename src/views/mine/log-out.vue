<template>
  <div class="elmLogOut">
    <div class="outNav">
      <div class="head">
        <span>头像</span>
        <div class="heads">
          <img
            src="https://fuss10.elemecdn.com/2/7c/43ec114eae35cdcee08de1d885c99jpeg.jpeg?imageMogr/format/webp/thumbnail/!120x120r/gravity/Center/crop/120x120/"
            alt
          />
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
      userInfo: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getData());
  },
  methods: {
    handlelogin() {
      this.$router.push("/phoneLogin");
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
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.heads span {
  font-size: 18px;
  font-weight: 900;
  margin-left: 4px;
  color: #a9a9a9;
}
.heads p {
  width: 5rem;
  overflow: hidden;
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
  color: #0097ff;
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
</style>