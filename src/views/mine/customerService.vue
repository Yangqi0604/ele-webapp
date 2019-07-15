<template>
  <div class="csic">
    <customer-service-top></customer-service-top>
    <customer-service-main></customer-service-main>
    <customer-service-bottom></customer-service-bottom>
  </div>
</template>

<script>
import customerServiceTop from "../../components/mine-lem/Service/customerServiceTop";
import customerServiceMain from "../../components/mine-lem/Service/customerServiceMain";
import customerServiceBottom from "../../components/mine-lem/Service/customerServiceBottom";
export default {
  components: {
    customerServiceTop,
    customerServiceMain,
    customerServiceBottom
  },
  name: "customerService"
};
</script>

<style scoped>
</style>
