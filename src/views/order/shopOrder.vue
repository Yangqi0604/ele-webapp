<template>
  <div>
    <OrderTime></OrderTime>
    <OrderContainer />
  </div>
</template>

<script>
import OrderTime from "../../components/ele-order/order-time";
import OrderContainer from "../../components/ele-order/order-container";
export default {
  computed: {},
  components: {
    OrderTime,
    OrderContainer
  }
};
</script>

<style lang="scss">
</style>
