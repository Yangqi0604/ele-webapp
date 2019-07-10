<template>
  <div>
    <add-search />
    <item-icon />
    <nav-bar />
    <homeShop-list />
  </div>
</template>


<script>
import AddSearch from "../components/home/AddSearch";
import ItemIcon from "../components/home/Itemicon";
import Navbar from "../components/home/Navbar";
import HomeShopList from "../components/home//Homeshoplist";
export default {
  components: {
    "add-search": AddSearch,
    "item-icon": ItemIcon,
    "nav-bar": Navbar,
    "homeShop-list": HomeShopList
  }
};
</script>

<style scoped>
</style>
