<template>
  <div class="phoneLogin">
    <div class="pic">
      <img src="http://shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt="饿不饿都上饿了么" />
    </div>
    <div class="login">
      <!-- <form class="loginform"> -->
      <section class="phonesec">
        <input type="tel" maxlength="11" placeholder="手机号" v-model="phonenum" @input="change" />
        <button class="phoneloginbtn" :style="color" @click="authCode">{{changecode}}</button>
      </section>
      <section class="phonesec">
        <input type="tel" maxlength="8" placeholder="验证码" v-model="authcode" />
      </section>
      <section class="useragree">
        新用户登录即自动注册，并表示已同意
        <a
          href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18"
        >《用户服务协议》</a>
      </section>
      <button class="Login" :disabled="disabled" @click="phoneLogin">登录</button>
      <!-- </form> -->
      <a href="javascript:;" class="aboutus">关于我们</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "phoneLogin",
  data() {
    return {
      phonenum: "",
      disabled: true,
      color: "color:#ddd",
      changecode: "获取验证码",
      authcode: ""
    };
  },
  methods: {
    change() {
      var res = /^1[3456789]\d{9}$/;
      if (res.test(this.phonenum) == true) {
        this.disabled = false;
        this.color = "color:#0089dc";
      } else if (res.test(this.phonenum) == false) {
        this.disabled = true;
        this.color = "color:#ddd";
      }
    },
    // 获取验证码
    authCode() {
      if (this.change) {
        this.virtical();
        // 发送网络请求
        this.$axios
          .post("/posts/sms_send", {
            tpl_id: "166104",
            key: "22027c54b3df0e087fd1d450b81c24cd",
            phone: this.phonenum
          })
          .then(res => {
            console.log(res);
          });
      }
    },
    phoneLogin() {
      this.$axios
        .post("/posts/sms_back", {
          phone: this.phonenum,
          code: this.authcode
        })
        .then(res => {
          console.log(res);
          //检验成功  设置登录状态并跳转
          console.log(res.data);
          localStorage.setItem("ele_login", res.data.user._id);
          this.$router.push("/");
        })
        // 失败的话
        .catch(err => {
          this.errors = {
            code: err.response.data.msg
          };
        });
    },
    virtical() {
      var time = 10;
      var timer = setInterval(() => {
        if (time == 0) {
          this.changecode = "获取验证码";
          this.disabled = false;
          this.color = "color:#0089dc";
          clearInterval(timer);
        } else {
          this.changecode = time + "秒后重试";
          this.disabled = true;
          this.color = "color:#ddd";
          time--;
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
.phoneLogin {
  width: 80%;
  height: 100%;
  padding-top: 40px;
  margin: 0 auto;
  position: relative;
}
.phoneLogin .pic {
  width: 100%;
  height: 56px;
  text-align: center;
}
.phoneLogin img {
  width: 43.6%;
  height: 100%;
}
.login {
  margin-top: 16px;
}
.phonesec {
  width: 100%;
  position: relative;
  margin-bottom: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
.phonesec > input:focus {
  border-color: #0089dc;
}
.phonesec > input {
  width: 96%;
  height: 100%;
  left: 0;
  padding-left: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  -webkit-appearance: none;
}
button,
input {
  outline: none;
  border: none;
}
.phonesec .phoneloginbtn {
  padding: 0;
  border-radius: 6px;
  background: transparent;
  text-align: center;
  font-size: 14px;
  display: inline-block;
  position: absolute;
  top: 35%;
  right: 10px;
}
.useragree {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}
.useragree a {
  color: #2395ff;
}
.Login {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #4cd96f;
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
}
.aboutus {
  display: block;
  margin-top: 20px;
  text-align: center;
  color: #999;
  text-decoration: none;
  font-size: 12px;
}
</style>
