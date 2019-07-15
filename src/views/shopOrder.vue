<template>
  <div>
    <OrderTime></OrderTime>
    <OrderContainer />
    <Orderfooter></Orderfooter>
  </div>
</template>

<script>
import OrderTime from "../components/ele-order/order-time";
import OrderContainer from "../components/ele-order/order-container";
import Orderfooter from "../components/ele-order/order-footer";
export default {
  computed: {},
  components: {
    OrderTime,
    OrderContainer,
    Orderfooter
  }
};
</script>

<style lang="scss">
</style>
