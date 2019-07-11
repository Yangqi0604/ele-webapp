<template>
  <div>
    <ele-store-diancan-top></ele-store-diancan-top>
    <ele-store-diancan-bottom></ele-store-diancan-bottom>
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
  methods: {
    getData() {
      this.$axios("/profile/batch_shop").then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>

<style scoped>
</style>
