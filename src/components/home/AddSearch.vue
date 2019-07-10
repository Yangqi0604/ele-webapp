<template>
  <div class="bigSearch">
    <div v-if="flag" :class="flag ?'topSearch':''">
      <span class="fa fa-map-marker" aria-hidden="true"></span>
      <h1>西安市人民政府</h1>
      <i class="fa fa-sort-desc"></i>
    </div>
    <div class="bottomSearch">
      <span class="fa fa-search" aria-hidden="true"></span>
      <input type="text" placeholder="搜索饿了么商家，商品名称" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  }
};
</script>

<style scoped>
.topSearch {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  background: #0085ff;
}
.topSearch > i {
  margin: 0px 5px;
  font-size: 19px;
  margin-top: -8px;
  color: white;
}
.topSearch > h1 {
  color: white;
  font-weight: bold;
}
.topSearch > span {
  color: white;
  margin-right: 0.5rem;
  margin-left: 1rem;
}
.topSearch > select {
  width: 1.2rem;
  height: 1.2rem;
  background: #0085ff;
  color: white;
  outline: none;
  border: none;
}
.bottomSearch {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0085ff;
  position: relative;
}
.bottomSearch > input {
  display: inline-block;
  width: 90%;
  height: 2rem;
  text-align: center;
  color: #999;
}
.bottomSearch > span {
  position: absolute;
  left: 24%;
  top: 32%;
  color: #999;
  font-size: 1rem;
}
</style>
