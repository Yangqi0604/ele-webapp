<template>
  <div class="search">
    <Header title="搜索" :is-left="true" />
    <div class="search_header">
      <div class="search_wrap">
        <i class="fa fa-search"></i>
        <input type="text" v-model.trim="key_word" placeholder="请输入商家，商品信息" />
        <button @click="searchHandle">搜索</button>
      </div>
    </div>
    <div class="shop" v-if="result">
      <div class="empty_wrap" v-if="empty">
        <img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt />
        <div class="empty_txt">
          <h4>附近没有搜索结果</h4>
          <span>换个关键词试试吧</span>
        </div>
      </div>
      <div>
        <SearchIndex :data="result.restaurants" @click="$router.push('/shop')" />
        <SearchIndex :data="result.words" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/public/Header";
import SearchIndex from "../components/search/searchindex";
export default {
  name: "Search",
  components: {
    Header,
    SearchIndex
  },
  data() {
    return {
      key_word: "",
      result: null,
      empty: false
    };
  },
  watch: {
    key_word() {
      // console.log(key_word);
      this.keyWordChange();
    }
  },
  methods: {
    keyWordChange() {
      console.log(this.key_word);
      this.$axios(`/api/profile/typeahead/${this.key_word}`)
        .then(res => {
          // console.log(res.data);
          this.result = res.data;
          //   console.log(this.result);
        })
        .catch(err => {
          this.result = null;
        });
    },
    searchHandle() {
      if (!this.key_word) return;
    },
    deleteSearch() {
      this.key_word = "";
    }
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.search_header {
  margin-top: 45px;
  background: #fff;
  padding: 0 4.266667vw;
}
.search_header .search_wrap {
  padding: 2.933333vw 2.933333vw 2.933333vw 0;
  display: flex;
  align-items: center;
  position: relative;
}
.search_wrap .fa-search {
  width: 2.933333vw;
  height: 2.933333vw;
  color: #888;
  position: absolute;
  top: 4.6666666vw;
  left: 2.933333vw;
}
.search_wrap input {
  flex-grow: 1;
  border-radius: 0.266667vw;
  background-color: #f8f8f8;
  padding: 1.733333vw 4vw 1.733333vw 8.8vw;
  color: #666;
  outline: none;
  border: none;
}
.search_wrap button {
  outline: none;
  border: none;
  color: #333;
  font-size: 0.426667rem;
  background: #fff;
  font-weight: 700;
  margin-left: 2.933333vw;
  font-size: 14px;
}

.shop {
  width: 100%;
  height: calc(100% - 95px);
  overflow: auto;
}

.empty_wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
  display: flex;
  justify-content: center;
}
.empty_wrap img {
  width: 35vw;
  height: 35vw;
}
.empty_txt h4 {
  color: #666;
  font-size: 1rem;
  margin: 12vw 0 2vw 0;
}
.empty_txt span {
  color: #999;
  font-size: 0.8rem;
}
</style>
