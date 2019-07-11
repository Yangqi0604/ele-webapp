<template>
  <div>
    <button id="s1" @click="change">饿了么</button>
    <button id="s2" @click="change1">美团</button>
  </div>
</template>

<script>
export default {
  name: "change",
  data() {
    return {
      data: {}
    };
  },
  methods: {
    change() {
      let data = "./static/css/style1.css";
      let info = {
        style: data
      };
      fetch("http://localhost:3000/cart/api/cart", {
        method: "post", //传参方式
        headers: {
          "Content-Type": "application/json" //请求头
        },
        body: JSON.stringify(info) //传的参数
      }).then(res => {
        res.json().then(data => {
          console.log(data);
          if (data.state == 1) {
            alert("切换成功到A");
          }
        });
      });
    },
    change1() {
      let data = "./static/css/style2.css";
      let info = {
        style: data
      };
      fetch("http://localhost:3000/cart/api/cart", {
        method: "post", //传参方式
        headers: {
          "Content-Type": "application/json" //请求头
        },
        body: JSON.stringify(info) //传的参数
      }).then(res => {
        res.json().then(data => {
          console.log(data);
          if (data.state == 1) {
            alert("切换成功到B");
          }
        });
      });
    }
  }
};
</script>

<style scoped>
</style>