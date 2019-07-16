<template>
  <div>
    <section v-if="indexdata.rating">
      <div>{{indexdata.rating.shop_score.toFixed(1)}}</div>
      <div>
        <span>商家评分</span>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
          alt
        />
      </div>
      <div>
        <div>
          <p>味道</p>
          <p>{{indexdata.rating.taste_score.toFixed(1)}}</p>
        </div>
        <div>
          <p>包装</p>
          <p>{{indexdata.rating.package_score.toFixed(1)}}</p>
        </div>
      </div>
      <div>
        <p>配送</p>
        <p>{{indexdata.rating.rider_score.toFixed(1)}}</p>
      </div>
    </section>
    <div class="cblank"></div>
    <ul class="coment-content">
      <li
        v-for="(d,sid) in indexdata.tags"
        :key="sid"
        @click="colorChange(sid)"
        :class="{ liBackground:changeLeftBackground == sid}"
      >{{d.name}}{{d.count}}</li>
    </ul>

    <ul class="coment-text">
      <li v-for="(s,sid) in indexdata.comments" :key="sid">
        <div class="text-left">
          <img :src="s.avatar" alt />
          <span v-if="!s.avatar"></span>
        </div>
        <div class="text-right">
          <h2>
            <span>{{s.username}}</span>
            <span>{{s.rated_at}}</span>
          </h2>
          <span>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
              alt
            />
            <span>超赞</span>
          </span>
          <p>{{s.rating_text}}</p>
          <p>{{s.reply.content}}</p>
          <div v-if="s.order_images">
            <img :src="s.order_images[0].image_hash" alt />
          </div>
          <div v-if="s.order_images">
            <i class="fa fa-thumbs-o-up"></i>
            <span v-for="(sc,sid) in s.order_images[0].food_names" :key="sid">{{sc}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "eleStore-coment",
  data() {
    return {
      restaurant_id: 1,
      indexdata: {},
      changeLeftBackground: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios("/api/profile/comments").then(res => {
        // console.log(res.data);
        this.evaluation = res.data;
        this.indexdata = res.data;
      });

      //   如果数据不够可以打开下面这条，restaurant_id是点击对应的商铺ID
      // this.$axios(
      //   `https://elm.cangdu.org/ugc/v2/restaurants/${this.restaurant_id}/ratings`
      // ).then(res => {
      //   console.log(res.data);
      //   this.indexdata=res.data
      // });
    },
    colorChange(sid) {
      this.changeLeftBackground = sid;
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
  height: 3rem;
}
section > div:nth-of-type(1) {
  font-size: 2.3rem;
  color: #ff6000;
  width: 20%;
}
section > div:nth-of-type(2) {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #666;
  font-size: 0.6rem;
  margin-left: -8%;
}
section > div:nth-of-type(3) {
  display: flex;
  color: #666;
  width: 25%;
  justify-content: space-around;
  height: 100%;
}
section > div:nth-of-type(3) > div {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
section > div:nth-of-type(4) {
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
.cblank {
  background-color: #f5f5f5;
  height: 0.6rem;
}
.coment-content {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.4rem;
  width: 80%;
  padding-left: 0.4rem;
}
.coment-content > li {
  padding: 0 2.4vw;
  height: 0.746667rem;
  height: 7.466667vw;
  line-height: 0.746667rem;
  line-height: 7.466667vw;
  margin: 0.093333rem;
  margin: 0.933333vw;
  font-size: 0.32rem;
  border-radius: 0.053333rem;
  border-radius: 0.533333vw;
  color: #6d7885;
  background-color: #ebf5ff;
}
.coment-content > li:nth-of-type(4) {
  color: #fff;
  background-color: #ccc;
}
.coment-text {
  margin-top: 0.5rem;
  padding: 0.3rem 0.4rem;
}
.coment-text > li {
  display: flex;
  padding: 0.1rem 0 1rem;
}
.coment-text > li > .text-left {
  width: 13%;
  height: 4rem;
  padding-left: 0.6rem;
  position: relative;
}
.text-left img {
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
}
.text-left span {
  display: inline-block;
  position: absolute;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  background-image: url(https://shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png);
  background-position: 0px 9.245rem;
  background-size: 1.8375rem;
}
.coment-text > li > .text-right {
  width: 80%;
}
.text-right > p:nth-of-type(1) {
  color: #333;
  font-size: 0.874em;
  word-break: break-word;
  margin: 0.213333rem 0;
  line-height: 1.4;
  margin: 2.133333vw 0;
}
.text-right > p:nth-of-type(2) {
  position: relative;
  margin: 0.266667rem 0;
  margin: 2.666667vw 0;
  padding: 0.266667rem;
  padding: 2.666667vw;
  background: #f3f3f3;
  border-radius: 0.106667rem;
  border-radius: 1.066667vw;
  font-size: 0.8125rem;
  color: #333;
  line-height: 1.2;
}
.text-right > h2 {
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 0.6867rem;
  color: #333;
}
.text-right > h2 > span:nth-of-type(2) {
  color: #999;
}
.text-right > div > img {
  width: 50%;
  height: 40%;
}
.text-right > span {
  color: rgb(255, 96, 0);
  font-size: 0.686rem;
}
.text-right > div:nth-last-of-type(1) {
  margin-top: 1.2rem;
}
.text-right > div:nth-last-of-type(1) > span {
  display: inline-flex;
  align-items: center;
  height: 0.64rem;
  height: 6.4vw;
  margin-right: 0.106667rem;
  margin-right: 1.066667vw;
  margin-bottom: 0.106667rem;
  margin-bottom: 1.066667vw;
  font-size: 0.293333rem;
  color: #6d7885;
  padding: 0 0.16rem;
  border-radius: 0.053333rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #ebf5ff;
}
.liBackground {
  background-color: #0097ff !important;
  color: #fff !important;
}
</style>