<template>
  <div>
    <Setmeal/>
    <SetmealCon/>
    
  </div>
</template>

<script>
import SetmealCon from "./setmeal";
import Setmeal from "./setmeal-con";

export default {
  computed: {},
  components: {
    Setmeal,
    SetmealCon
  }
};
</script>

<style lang="scss" scoped>
.setmeal{
    width: 100%;
    height: 5rem;
    background-color: #fff;
}
.setmeal .setmeal-pz{
    width: 96%;
    height: 100%;
    margin: 0 auto;
}
.setmeal .setmeal-pz img{
    width: 100%;
    height: 100%;
}
</style>
