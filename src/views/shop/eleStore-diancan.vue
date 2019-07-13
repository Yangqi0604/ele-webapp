<template>
  <div>
    <ele-store-diancan-top :data="recommend"></ele-store-diancan-top>
    <ele-store-diancan-bottom :data="menu"></ele-store-diancan-bottom>
    <footer class="cartFoot">
      <div class="fa fa-cart-plus cartIcon" aria-hidden="true"></div>
    </footer>
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
      menu:{},
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
  .cartFoot{
    width: 100%;
    height: 3.2rem;
    position: fixed;
    bottom: 0;
    background:rgba(0,0,0,0.7);
  }
  .cartFoot>.cartIcon{
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    color: #666;
    background:rgba(0,0,0,0.7);
    border-radius: 50%;
    font-size: 2rem ;
    text-align: center;
    line-height: 3.5rem;
    position: absolute;
    left: 1.4rem;
    top: -.8rem;
  }
</style>
