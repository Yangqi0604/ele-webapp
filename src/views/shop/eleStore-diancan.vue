<template>
  <div>
    <ele-store-diancan-top :data="recommend"></ele-store-diancan-top>
    <ele-store-diancan-bottom :data="menu"></ele-store-diancan-bottom>
  </div>
</template>

<script>
import eleStoreDiancanTop from "../../components/ele-store/eleStore-diancan-Top";
import eleStoreDiancanBottom from "../../components/ele-store/eleStore-diancan-Bottom";
export default {
  components: {
    eleStoreDiancanTop,
    eleStoreDiancanBottom
  },
  created() {
    this.getData();
  },
  data(){
    return{
      recommend:{},
      menu:{}
    }
  },
  methods: {
    getData() {
      this.$axios("/profile/batch_shop").then(res => {
        console.log(res.data.menu);
        this.recommend = res.data.recommend[0].items
        this.menu = res.data.menu
      });
    }
  }
};
</script>

<style scoped>
</style>
