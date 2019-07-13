<template>
  <div>
      <OrderTime></OrderTime>
      <Orderbottom></Orderbottom>
      <Orderfooter></Orderfooter>
  </div>
</template>

<script>

import OrderTime from "../../components/ele-order/order-time"
import Orderbottom from "../../components/ele-order/order-bottom"
import Orderfooter from "../../components/ele-order/order-footer"
  export default {
    computed:{

    },
    components:{
        OrderTime,
        Orderbottom,
        Orderfooter
    }
  };
</script>

<style lang="scss">

</style>
