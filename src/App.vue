<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.getData();
  },
  methods: {
    getData() {
      // fetch("http://localhost:3000/ele/api/style")
      //   .then(response => response.json()) //解析为可读数据
      //   .then(data => {
      //     console.log(data);
      //     document.getElementById("change").href = data.style[0].style;
      //   }) //执行结果是 resolve就调用then方法
      //   .catch(err => console.log("Oh, error", err)); //执行结果是 reject就调用catch方法
    }
  }
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  height: 100%;
}
</style>
