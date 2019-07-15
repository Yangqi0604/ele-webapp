<template>
  <div>
    <gold-nav></gold-nav>
    <gold-header></gold-header>
  </div>
</template>

<script>
import goldNav from "../../components/mine-lem/gold/goldNav";
import goldHeader from "../../components/mine-lem/gold/goldHeader";
export default {
  name: "gold",
  components: {
    goldNav,
    goldHeader
  }
};
</script>

<style scoped>
</style>