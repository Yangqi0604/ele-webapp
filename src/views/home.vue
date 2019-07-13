<template>
  <div>
    <add-search />
    <item-icon :entries="entries" />
    <swiper-content :swipeImgs="swipeImgs" />
    <nav-bar />
    <homeShop-list v-for="(item,index) in restaurants" :key="index" :restaurant="item.restaurant" />
  </div>
</template>


<script>
import AddSearch from "../components/home/AddSearch";
import ItemIcon from "../components/home/Itemicon";
import Navbar from "../components/home/Navbar";
import HomeShopList from "../components/home//Homeshoplist";
import SwiperContent from "../components/public/Swiper";
export default {
  data() {
    return {
      swipeImgs: [],
      entries: [],
      page: 1,
      size: 5,
      restaurants: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("/profile/shopping").then(res => {
        // console.log(res.data);
        this.entries = res.data.entries;
        this.swipeImgs = res.data.swipeImgs;
        console.log(this.entries);
        // this.homeInfo = res.data;
      });
      this.$axios
        .post(`/profile/restaurants/${this.page}/${this.size}`, this.data)
        .then(res => {
          console.log(res.data);
          this.restaurants = res.data;
        });
    }
  },
  components: {
    "add-search": AddSearch,
    "item-icon": ItemIcon,
    "nav-bar": Navbar,
    "homeShop-list": HomeShopList,
    "swiper-content": SwiperContent
  }
};
</script>
<style scoped>
</style>
