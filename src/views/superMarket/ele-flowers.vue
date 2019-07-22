<template>
  <div>
    <nav-item-header :itemList="itemList" :style="{background:'yellow'}"></nav-item-header> 
    <!-- 59元花束献礼巨蟹 -->
    <div class="ele-seasons">
      <div class="seasons">
        <div class="pharmacy">
          <h1>限量抢购</h1>
          <p>59元花束献礼巨蟹</p>
        </div>
        <div class="merchant">
          <div class="merchantSon">
            <div class="merchantSonOne" v-for="item in lists" :key="idx">
              <img :src="item.pic" alt />
              <p>{{item.z1}}</p>
              <div>
                <span>{{item.num1}}￥</span>
                <s>{{item.num2}}￥</s>
                <a>{{item.z2}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 药店main1 -->
    <div class="ele-drugstore">
      <div class="yao">
        <div class="ele-store">
          <div class="vip">
            <h2>夏季鲜花买二送一</h2>
            <p>花材特惠季</p>
            <a>热抢中</a>
          </div>
          <img
            src="https://fuss10.elemecdn.com/8/35/79623b455c017548d4e8706845e39jpeg.jpeg?imageMogr/thumbnail/!210x150r/gravity/Center/crop/210x150/"
            alt
          />
        </div>
        <div class="ele-store1">
          <div class="store1">
            <div class="drugstore1">
              <h2>时令爆款</h2>
              <p>绣球29元起</p>
            </div>
            <img
              src="https://fuss10.elemecdn.com/9/72/aab9d804da3970bb057c61a8f6c02png.png?imageMogr/thumbnail/!120x120r/gravity/Center/crop/120x120/"
              alt
            />
          </div>
          <div class="store1">
            <div class="drugstore1">
              <h2>告白神器</h2>
              <p>花篮199起</p>
            </div>
            <img
              src="https://fuss10.elemecdn.com/7/e4/d65ce0afedfb824fbb5bf5650de6apng.png?imageMogr/thumbnail/!120x120r/gravity/Center/crop/120x120/"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <Naverbar />
    <!-- 综合排序 -->
    <section class="index-container">
      <div class="index-shopInfo" v-for="item in shoplist">
        <!-- 左侧图片 -->
        <div class="logo_container">
          <img :src="item.pic" alt />
        </div>
        <!-- 右侧内容 -->
        <!-- 第一行，品牌 -->
        <div class="index_main">
          <div class="index_shopname">
            <i>{{item.z1}}</i>
            <span>{{item.z2}}</span>
          </div>
          <!-- 第二行，星级 -->
          <div class="index-rateWrap">
            <div>
              <!-- <starLevel :rating="restaurant.rating"/> -->
              <!-- <span class="rate">{{restaurant.rating}}</span> -->
              <span>月售{{item.num1}}</span>
            </div>
          </div>
          <!-- 第三行，配送 -->
          <div class="index-moneylimit">
            <div>
              <span>起送￥{{item.num2}}</span>
              |
              <span>配送费￥{{item.num3}}</span>
            </div>
            <div class="index-distanceWrap">
              <span>{{item.num4}}km</span>
              |
              <span>{{item.num5}}分钟</span>
            </div>
          </div>
          <!-- 第四行，口碑 -->
          <div class="index-status">
            <a>{{item.z3}}</a>
          </div>
        </div>
     
      </div>
    </section>
         <!-- 亲没有更多了 -->
    <div class="more">亲没有更多了~</div>
  </div>
</template>


<script>
import Naverbar from "../../components/home/Navbar";
import NavItemHeader from '../../components/public/NavItemHeader'
export default {
  components:{
      "nav-item-header":NavItemHeader,
      Naverbar
  },
  data() {
    return {
      itemList: [
        {
          name: "为你精选",
          path: "/"
        },
        {
          name: "巨蟹座花礼",
          path: "/"
        },
        {
          name: "送爱人",
          path: "/"
        },
        {
          name: "送亲友",
          path: "/"
        },
        {
          name: "送长辈",
          path: "/"
        },
        {
          name: "鲜花礼盒",
          path: "/"
        },
        {
          name: "精美花束",
          path: "/"
        }
      ],
      lists: [
        {
          pic:
            "https://image-star.elemecdn.com/pb/59dd3bba2f01bf99d0920057680a0ac5b9?x-oss-process=image/resize,w_160,h_160/format,png/quality,q_90",
          z1: "梦幻-日常时..",
          z2: "八彩鲜花(西..",
          num1: "59",
          num2: "118"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/95bf969221d779c63942cad73799dac1a2?x-oss-process=image/resize,w_160,h_160/format,png/quality,q_90",
          z1: "11朵玫瑰花",
          z2: "钟爱鲜花",
          num1: "66",
          num2: "330"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/9b8cc233c94c4e0673c6b972ead909d609?x-oss-process=image/resize,w_160,h_160/format,png/quality,q_90",
          z1: "限量抢购",
          z2: "爱里鲜花",
          num1: "86",
          num2: "350"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/854c5a54de76aa6618a4689aa7c3cc8a73?x-oss-process=image/resize,w_160,h_160/format,png/quality,q_90",
          z1: "限量抢购",
          z2: "爱里鲜花",
          num1: "99",
          num2: "999"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/ac08341a250d738b8a416977753e7cd535?x-oss-process=image/resize,w_160,h_160/format,png/quality,q_90",
          z1: "亲情花束",
          z2: "爱里鲜花",
          num1: "99",
          num2: "196"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/b30faa1a582b155b4f8d975694765215e4?x-oss-process=image/resize,w_160,h_160/format,png/quality,q_90",
          z1: "康乃系",
          z2: "爱里鲜花",
          num1: "99",
          num2: "128"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/de5c76684d5323818f7721563d6e64022f?x-oss-process=image/resize,w_160,h_160/format,png/quality,q_90",
          z1: "繁星点点",
          z2: "爱里鲜花",
          num1: "96",
          num2: "326"
        }
      ],
      shoplist: [
        {
                  
           pic: "https://fuss10.elemecdn.com/9/ae/4da6d5fc0c636ce538b5530fa6b14jpeg.jpeg?imageMogr/format/jpeg/thumbnail/!280x280r/gravity/Center/crop/280x280/",
          z1: "品牌",
          z2: "爱里鲜花(西安5店)",
          num1: "51",
          num2: "0",
          num3: "3",
          num4: "2.7",
          num5: "62",
          z3: "无忧退款" 
        },
        {
                  
           pic: "https://fuss10.elemecdn.com/9/ce/69df777c30ac63c1ff3470d3b1386jpeg.jpeg?imageMogr/format/jpeg/thumbnail/!280x280r/gravity/Center/crop/280x280/",
          z1: "品牌",
          z2: "繁星点点",
          num1: "51",
          num2: "0",
          num3: "3",
          num4: "2.7",
          num5: "62",
          z3: "无忧退款" 
        },
        {
                  
           pic: "https://fuss10.elemecdn.com/c/e1/1c89a810ce6228a4c4cc21256b890jpeg.jpeg?imageMogr/format/jpeg/thumbnail/!280x280r/gravity/Center/crop/280x280/",
          z1: "品牌",
          z2: "梦幻-日常时..",
          num1: "51",
          num2: "0",
          num3: "3",
          num4: "2.7",
          num5: "62",
          z3: "无忧退款" 
        },
        {
                  
           pic: "https://fuss10.elemecdn.com/4/56/a16426f6e4999bde15c2ce7072cabjpeg.jpeg?imageMogr/format/jpeg/thumbnail/!280x280r/gravity/Center/crop/280x280/",
          z1: "品牌",
          z2: "钟爱鲜花",
          num1: "51",
          num2: "0",
          num3: "3",
          num4: "2.7",
          num5: "62",
          z3: "无忧退款" 
        },

      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.ele-seasons {
    margin-top: 2.5rem;
  width: 100%;
  height: 12.1rem;
  background-color: #ededed;
  .seasons {
    width: 96%;
    height: 12rem;
    margin: 0 auto;
    border-radius: 0.5rem;
    background-color: white;
    .pharmacy {
      width: 100%;
      height: 2.8rem;
      display: flex;
      align-items: center;
      h1 {
        font-size: 0.99rem;
        font-weight: bold;
        color: #2b2b2b;
        margin-left: 0.5rem;
      }
      p {
        font-size: 0.79rem;
        color: #707070;
      }
    }
    .merchant {
      width: 100%;
      height: 9rem;
      .merchantSon {
        width: 96%;
        height: 9rem;
        display: flex;
        align-items: center;
        margin: 0 auto;
        overflow-y: auto;
        .merchantSonOne {
          flex-shrink: 0;
          width: 5rem;
          height: 8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 0.05rem solid #be7562;
          border-radius: 0.15rem;
          margin-left: 0.6rem;
          justify-content: space-around;
          & > img {
            width: 4.5rem;
            height: 4.5rem;
            text-align: center;
          }
          p {
            font-size: 0.82rem;
          }
          span {
            font-size: 0.88rem;
            color: #fd6f85;
          }
          s {
            font-size: 0.68rem;
            color: grey;
          }
          a {
            width: 100%;
            height: 0.6rem;
            font-size: 0.58rem;
            color: white;
            display: block;
            background-color: #ff4740;
            border-radius: 0.15rem;
          }
        }
      }
    }
  }
}

.ele-drugstore {
  width: 100%;
  height: 12.1rem;
  background-color: #ededed;
  .yao {
    width: 96%;
    height: 12rem;
    margin: 0.5rem auto;
    border-radius: 0.5rem;
    background-color: white;
    .ele-store {
      display: flex;
      width: 100%;
      height: 6rem;
      justify-content: space-around;
      align-items: center;
      border-bottom: 0.05rem solid #f1f1f1;
      .vip {
        width: 60%;
        height: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
          font-size: 0.98rem;
          color: #333333;
          font-weight: bold;
        }
        p {
          font-size: 0.78rem;
          color: #656565;
          margin: 0.25rem 0;
        }
        a {
          width: 23%;
          height: 1.1rem;
          text-align: center;
          background-color: #ff2909;
          color: white;
          line-height: 1rem;
        }
      }
      img {
        width: 32%;
        height: 4.5rem;
      }
    }
    .ele-store1 {
      display: flex;
      width: 100%;
      height: 6rem;
      justify-content: space-around;
      align-items: center;
      .store1 {
        width: 50%;
        height: 6rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .drugstore1 {
          h2 {
            font-size: 0.98rem;
            color: #333333;
            font-weight: bold;
          }
          p {
            font-size: 0.78rem;
            color: #656565;
            margin: 0.25rem 0;
          }
        }
        img {
          width: 45%;
          height: 5rem;
        }
      }
    }
  }
}

.index-container {
  width: 100%;
  height: auto;
  background: #fff;
  color: #666;
}
.index-shopInfo {
  display: flex;
  width: 100%;
  height: 6.8rem;
  justify-content: space-around;
}
.logo_container {
  width: 35%;
  height: 6rem;
  img {
    display: block;
    width: 74%;
    height: 5rem;
    box-sizing: border-box;
    border: 0.05rem solid rgba(0, 0, 0, 0.08);
    border-radius: 0.5rem;
    margin: 0.5rem 0.5rem;
  }
}
.index_main {
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  flex-direction: column;
  padding-left: 0.5rem;
  font-size: 0.2rem;
  flex-grow: 1;
}
.index_shopname {
  align-items: center;
  color: #333;
  font-weight: 700;
  font-size: 0.9rem;
  i {
    background: #ffe800;
    margin-right: 0.25rem;
    padding: 0.25rem 0.25rem;
    text-align: center;
    white-space: nowrap;
    font-size: 0.6rem;
  }
}
.index-rateWrap {
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  & > div {
    &:nth-of-type(1) {
      & > span {
        &:nth-of-type(1) {
          color: #666;
          padding: 0.4rem 0;
          list-style: none;
          font-size: 0.793333rem;
        }
      }
    }
  }
}
.index-moneylimit {
  width: 100%;
  display: flex;
  justify-content: space-between;
  span{
      font-size: 0.68rem;
  }
  .index-distanceWrap {
    color: #999;
    margin-right: 0.85rem;
    span{
        font-size: 0.68rem;
    }
  }
}
.index-status{
    a{
         width:23%;
         height:0.98rem;
         display: block;
         font-size: 0.54rem; 
        color: blue;
         text-align: center;
         line-height: 0.98rem;
         border: 0.05rem solid blue;
    }
}
.more {
  width: 100%;
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  font-size: 0.98rem;
  color: #999;
}
</style>

