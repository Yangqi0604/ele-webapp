<template>
  <div :class="{'open' :isSort || isScreen}" @click.self="hideview">
    <!-- 导航 -->
    <div class="filter_wrap">
      <div class="filter">
        <div
          class="filter-nav"
          v-for="(item,index) in filterdata.navTab"
          :key="index"
          :class="{'filter-bold':currentFilter==index}"
          @click="filtersort(index)"
        >
          <span>{{item.name}}</span>
          <i v-if="item.icon" :class="'fa fa-'+item.icon"></i>
        </div>
      </div>
    </div>
    <!-- 排序 -->
    <section class="filter-extend" v-if="isSort">
      <ul>
        <li v-for="(item,index) in filterdata.sortBy" :key="index" @click="selectSort(item,index)">
          <span :class="{'selectName' :currentSort==index}">{{item.name}}</span>
          <i v-show="currentSort==index" class="fa fa-facheck"></i>
        </li>
      </ul>
    </section>
    <!-- 筛选 -->
    <section class="filter-extend" v-if="isScreen">
      <div class="filter-sort">
        <div v-for="(screen,index) in filterdata.screenBy" :key="index" class="morefilter">
          <p>{{screen.title}}</p>
          <ul>
            <li
              v-for="(item,i) in screen.data"
              :key="i"
              :class="{'selected' :item.select}"
              @click="selectScreen(item,screen)"
            >
              <img v-if="item.icon" :src="item.icon" alt />
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="morefilter-btn">
        <span @click="clearedit" class="morefilter-clear" :class="{'edit':edit}">取消</span>
        <span @click="filterok" class="morefilter-ok">确定</span>
      </div>
    </section>
  </div>
</template>

<script>
// import { constants } from "crypto";
export default {
  name: "filterView",
  props: {
    filterdata: ""
  },
  data() {
    return {
      //判断点击谁加粗
      currentFilter: 0,
      isSort: false,
      currentSort: 0,
      isScreen: false
    };
  },
  computed: {
    edit() {
      let edit = false;
      this.filterdata.screenBy.forEach(screen => {
        screen.data.forEach(item => {
          if (item.select) {
            edit = true;
            // console.log(edit);
          }
        });
      });
      return edit;
    }
  },
  methods: {
    //判断点击谁加粗
    filtersort(index) {
      this.currentFilter = index;
      // console.log(index);
      switch (index) {
        case 0:
          this.isSort = true;
          //要将这个点击判断的布尔值进行传递
          this.$emit("searchFixed", true);
          break;
        case 1:
          this.$emit("updata", {
            condition: this.filterdata.navTab[1].condition
          });
          this.hideview();
          break;
        case 2:
          this.$emit("updata", {
            condition: this.filterdata.navTab[2].condition
          });
          this.hideview();
          break;
        case 3:
          (this.isScreen = true),
            (this.isSort = false),
            this.$emit("searchFixed", true);
          break;
        default:
          this.hideview();
          break;
      }
    },
    hideview() {
      this.isSort = false;
      this.isScreen = false;
      // console.log(this.isSort);
      this.$emit("searchFixed", false);
    },
    selectSort(item, index) {
      this.currentSort = index;
      this.filterdata.navTab[0].name = this.filterdata.sortBy[index].name;
      // console.log(this.filterdata.navTab[0].name);
      this.hideview();
      //更新数据
      this.$emit("updata", { condition: item.code });
    },
    selectScreen(item, screen) {
      if (screen.id !== "MPI") {
        //单选
        screen.data.forEach(element => {
          element.select = false;
        });
      }
      item.select = !this.select;
    },
    clearedit() {
      this.filterdata.screenBy.forEach(screen => {
        screen.data.forEach(item => {
          item.select = false;
        });
      });
    },
    filterok() {
      let screenData = {
        MPI: "",
        offer: "",
        per: ""
      };
      let mpiStr = "";
      // 点击确定按钮以后需要将筛选拼接的规则发送给home组件进行显示
      this.filterdata.screenBy.forEach(screen => {
        screen.data.forEach((item, index) => {
          if (item.select) {
            // 两种情况 1.多选 2.单选
            if (screen.id !== "MPI") {
              // 单选
              screenData[screen.id] = item.code;
            } else {
              // 多选 蜂鸟，品牌
              mpiStr += item.code + ",";
              screenData[screen.id] = mpiStr;
            }
          }
        });
      });

      // console.log(mpiStr);
      this.$emit("updata", { condition: screenData });

      this.hideview();
    }
  }
};
</script>

<style scoped>
.filter_wrap {
  background: #fff;
  position: sticky;
  /* css3新增 */
  top: 54px;
  z-index: 10;
}
.filter {
  position: relative;
  border-bottom: 1px solid #ddd;
  line-height: 10.4vw;
  z-index: 101;
  height: 10.666667vw;
  display: flex;
  justify-content: space-around;
}
.filter-nav {
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 0.8333rem;
}
.filter-nav i {
  width: 1.6vw;
  height: 0.8vw;
  margin-left: 1.333333vw;
  margin-bottom: 0.533333vw;
  fill: #333;
  will-change: transform;
}

.filter-bold {
  font-weight: 600;
  color: #333;
}

.open {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  z-index: 3;
}

.filter-extend {
  background-color: #fff;
  color: #333;
  padding-top: 2.133333vw;
  position: absolute;
  width: 100%;
  z-index: 4;
  left: 0;
  top: 24.533333vw;
}
.filter-extend li {
  position: relative;
  padding-left: 5.333333vw;
  line-height: 10.666667vw;
  overflow: hidden;
}
.fa-check {
  float: right;
  color: #009eef;
  margin-right: 3.733333vw;
  line-height: 10.666667vw;
}

.selectName {
  color: #009eef;
}
/* 筛选 */
.filter-sort {
  background: #fff;
  padding: 0 2.666667vw;
  line-height: normal;
}
.morefilter {
  margin: 2.666667vw 0;
  overflow: hidden;
}
.morefilter .title {
  margin-bottom: 2vw;
  color: #666;
  font-size: 0.5rem;
}
.morefilter ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.morefilter li {
  box-sizing: border-box;
  width: 30%;
  height: 9.333333vw;
  line-height: 9.333333vw;
  margin: 0.8vw 1%;
  background: #fafafa;
}
.morefilter li img {
  width: 3.466667vw;
  height: 3.466667vw;
  vertical-align: middle;
  margin-right: 0.8vw;
}
.morefilter li span {
  margin-left: 2%;
  vertical-align: middle;
}

.morefilter-btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
  line-height: 11.466667vw;
  box-sizing: border-box;
}
.morefilter-btn span {
  font-size: 0.826667rem;
  text-align: center;
  text-decoration: none;
  flex: 1;
}
.morefilter-clear {
  color: #ddd;
  background: #fff;
}
.morefilter-ok {
  /* height: 40px; */
  color: #fff;
  background: #00d762;
  border: 0.133333vw solid #00d762;
}

.selected {
  color: #3190e8 !important;
  background-color: #edf5ff !important;
}

.edit {
  color: #333 !important;
}
</style>
