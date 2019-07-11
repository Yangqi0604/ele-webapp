<template>
  <div>
    <!-- 饿了么 -->
    <div class="bigSearch">
      <div :class="[change?'topSearch':'home-adress-map']">
        <span :class="[change?'fa fa-map-marker':'fa fa-chevron-left']"></span>
        <h1 :class="[change?'':'fa fa-map-marker']">西安市人民政府</h1>
        <i :class="[change?'fa fa-sort-desc':'fa fa-bell-o']"></i>
      </div>
      <div :class="[change?'bottomSearch':'search']" v-if="change">
        <span :class="[change?'fa fa-search':'fa fa-search']"></span>
        <input type="text" placeholder="搜索饿了么商家，商品名称" />
      </div>
    </div>
    <button @click="changeclick">改变</button>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      title: ""
    };
  },
  computed: {
    change() {
      return this.$store.state.flag;
    }
    // ...mapState(["change"])
  },
  methods: {
    // changeclick() {
    //   this.$store.commit("changeclick");
    // }
    ...mapMutations(["changeclick"])
  }
};
</script>

<style scoped>
</style>
