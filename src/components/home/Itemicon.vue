<template>
  <div>
    <!--饿了么 分类按钮 -->

    <mt-swipe :auto="0" class="entries" v-if="flag">
      <mt-swipe-item v-for="(entry,index) in entries" :key="index" class="item-overflow">
        <div class="itemfood" v-for="(item,i) in entry" :key="i" @click="handleclick(i)">
          <div class="img_item">
            <img :src="item.image" alt />
          </div>
          <span>{{item.name}}</span>
        </div>
      </mt-swipe-item>
    </mt-swipe>

    <!--美团 分类按钮 -->
    <mt-swipe :auto="0" class="entries" v-else>
      <mt-swipe-item v-for="(entry,index) in entries" :key="index" class="item-overflow">
        <div class="itemfood" v-for="(item,i) in  meituan" :key="i" @click="handleclick(i)">
          <div class="img_item">
            <img class="img" :src="item.image" alt />
          </div>
          <span>{{item.name}}</span>
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  props: {
    entries: Array
  },
  data() {
    return {
      // flag:false,
      url: [
        "ele-food",
        "ele-breakfast",
        "ele-fruit",
        "drugstore",
        "ele-flowers",
        "ele-buy",
        "ele-Cvs",
        "ele-drink",
        "ele-kitchen",
        "ele-snack",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      meituan: [
        {
          image: "../../../static/public/1.png",
          name: "火锅"
        },
        {
          image: "../../../static/public/2.jpg",
          name: "猫眼电影"
        },
        {
          image: "../../../static/public/3.png",
          name: "酒店"
        },
        {
          image: "../../../static/public/4.png",
          name: "休闲娱乐"
        },
        {
          image: "../../../static/public/5.png",
          name: "外卖"
        },
        {
          image: "../../../static/public/6.png",
          name: "KTV"
        },
        {
          image: "../../../static/public/7.png",
          name: "周边游"
        },
        {
          image: "../../../static/public/8.png",
          name: "丽人"
        },
        {
          image: "../../../static/public/9.png",
          name: "小吃快餐"
        },
        {
          image: "../../../static/public/10.png",
          name: "全部分类"
        }
      ]
    };
  },
  computed: {
    ...mapState(["flag"])
  },
  methods: {
    handleclick(i) {
      this.$router.push(`/${this.url[i]}`);
    }
  }
};
</script>

<style scoped>
/* 分类按钮 */
.entries {
  background: #ffffff;
  width: 100%;
  height: 12rem;
  text-align: center;
  /* display: flex; */
  overflow: hidden;
  text-align: center;
}
.itemfood {
  width: 20%;
  float: left;
  position: relative;
  margin-top: 1.5rem;
}
.itemfood .img_item {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  /* border-radius: 50%; */
  /* background-color: lightgreen; */
}
.img_item img {
  width: 100%;
  height: 100%;
}
.img_item .img > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.itemfood span {
  display: block;
  color: #666;
  font-size: 0.72rem;
}
</style>
