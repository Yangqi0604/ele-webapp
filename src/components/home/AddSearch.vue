<template>
  <div>
    <!-- 饿了么 -->
    <div class="bigSearch">
      <div class="topSearch">
        <span :class="[change?'fa fa-map-marker':'fa fa-chevron-left']"></span>
        <h1 :class="[change?'':'fa fa-map-marker']">西安市人民政府</h1>
        <i :class="[change?'fa fa-sort-desc':'fa fa-bell-o']"></i>
      </div>
      <div :class="[SearchBar?'bottomSearch':'bottomSearchOne']" ref="s">
        <span :class="[change?'fa fa-search':'fa fa-search']"></span>
        <p>搜索饿了么商家，商品名称</p>
      </div>
    </div>
    <!-- <button @click="changeclick">改变</button> -->
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      title: "",
      SearchBar: false
    };
  },
  computed: {
    change() {
      return this.$store.state.flag;
    }
    // ...mapState(["change"])
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let offsetTop = this.$refs.s.offsetTop;
      if (scrollTop > offsetTop) {
        this.SearchBar = true;
      } else {
        this.SearchBar = false;
      }
    },
    // changeclick() {
    //   this.$store.commit("changeclick");
    // }
    ...mapMutations(["changeclick"])
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
.tp {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  background: red;
}

.topSearch i {
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
  background: #0085ff;
  position: fixed;
  top: 0;
  z-index: 999;
}
.bottomSearch > p {
  width: 90%;
  height: 2.2rem;
  line-height: 2.2rem;
  text-align: center;
  background: white;
  color: #999;
  padding-left: 1rem;
}
.bottomSearch > span {
  display: inline-block;
  color: #999;
  font-size: 1rem;
}
.bottomSearchOne {
  width: 100%;
  height: 3rem;
  background: #0085ff;
  display: flex;
  justify-content: center;
  position: relative;
}
.bottomSearchOne > p {
  width: 90%;
  height: 2.2rem;
  line-height: 2.2rem;
  text-align: center;
  background: white;
  color: #999;
  padding-left: 1rem;
}
.bottomSearchOne > span {
  display: inline-block;
  color: #999;
  font-size: 1rem;
  position: absolute;
  left: 22%;
  top: 20%;
}

/*.home-adress-map {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

.search {
  height: 2rem;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0 1rem;
}

.search span {
  width: 0.5rem;
  height: 100%;
  font-size: 0.3rem;
  line-height: 2rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
  background: #e4e4e4;
  opacity: 0.5;
  border-radius: 0.5rem 0 0 0.5rem;
}

.search a {
  width: 100%;
  height: 100%;
  line-height: 2rem;
  background: #e4e4e4;
  opacity: 0.5;
  border-radius: 0 0.5rem 0.5rem 0;
} */
</style>
