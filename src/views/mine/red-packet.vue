<template>
  <div>
    <red-nav></red-nav>
    <red-herder></red-herder>
  </div>
</template>

<script>
import redNav from "../../components/mine-lem/red-packet/redNav";
import redHerder from "../../components/mine-lem/red-packet/redHeader";
export default {
  name: "redPacket",
  components: {
    redNav,
    redHerder
  }
};
</script>

<style scoped>
</style>