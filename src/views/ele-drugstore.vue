 <template>
  <div>
    <!-- 药店nav 可复用-->
    <div class="drugstore">
      <div class="store">
        <div class="item-overflow">
          <div class="itemdrugstore" v-for="item in navs">
            <div class="img_item">
              <img :src="item.pic" alt />
            </div>
            <span>{{item.z1}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 药店main1 -->
    <div class="ele-drugstore">
      <div class="yao">
        <div class="ele-store">
          <div class="vip">
            <h2>49减20同享超级会员红包</h2>
            <p>泉源堂(世荣嘉轩店)</p>
            <a>热抢中</a>
          </div>
          <img
            src="https://fuss10.elemecdn.com/0/6c/71327c94b9b4826ac00d87f258b6cpng.png?imageMogr/thumbnail/!210x150r/gravity/Center/crop/210x150/"
            alt
          />
        </div>
        <div class="ele-store1">
          <div class="store1">
            <div class="drugstore1">
              <h2>撸串喝冰啤</h2>
              <p>胃痛怎么办</p>
            </div>
            <img
              src="https://fuss10.elemecdn.com/c/77/144ea54f95970227e7b1ae1a7667apng.png?imageMogr/thumbnail/!120x120r/gravity/Center/crop/120x120/"
              alt
            />
          </div>
          <div class="store1">
            <div class="drugstore1">
              <h2>百年品牌</h2>
              <p>快速止泻</p>
            </div>
            <img
              src="https://fuss10.elemecdn.com/f/cd/1cf41db6bf1714ebfa0095e1ef681jpeg.jpeg?imageMogr/thumbnail/!120x120r/gravity/Center/crop/120x120/"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 四季用药 -->
    <div class="ele-seasons">
      <div class="seasons">
        <div class="pharmacy">
          <h1>夏季用药</h1>
          <p>买达克宁赢这就是街舞门票</p>
        </div>
        <div class="merchant">
          <div class="merchantSon">
            <div class="merchantSonOne" v-for="item in lists">
              <img :src="item.pic" alt />
              <p>{{item.z1}}</p>
              <div>
                <span>{{item.num1}}￥</span>
                <s>{{item.num2}}￥</s>
              </div>
            </div>
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
    <!-- 。。。 -->
    <!-- 亲没有更多了 -->
    <div class="more">亲没有更多了~</div>
  </div>
</template>

<script>
import Naverbar from "../components/home/Navbar";
export default {
  components: {
    Naverbar
  },
  data() {
    return {
      navs: [
        {
          pic:
            "https://image-star.elemecdn.com/pb/358381f6017a116baab8e2864c2983f2e1?x-oss-process=image/resize,w_88,h_88/format,png/quality,q_90",
          z1: "感冒发烧"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/1f7a9158fb9b94d2de32ed7133b81d6005?x-oss-process=image/resize,w_88,h_88/format,png/quality,q_90",
          z1: "肠胃用药"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/409ce91af796673e70bd335423e752e069?x-oss-process=image/resize,w_88,h_88/format,png/quality,q_90",
          z1: "呼吸科药"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/cfd0dbadfa6c45ea7d15839192230c8c77?x-oss-process=image/resize,w_88,h_88/format,png/quality,q_90",
          z1: "皮肤用药"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/0a1f85ad3061a1e9fdb4f7051057720d59?x-oss-process=image/resize,w_88,h_88/format,png/quality,q_90",
          z1: "孕妇用药"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/5f5fde0f3beb97c7ce4ca18a8f04ded686?x-oss-process=image/resize,w_88,h_88/format,png/quality,q_90",
          z1: "五官用药"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/9f521d0289ad7d8171717899fd22f5a2ff?x-oss-process=image/resize,w_88,h_88/format,png/quality,q_90",
          z1: "小儿用药"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/6d045e08102ec0dc497ddc6fb21eb518a6?x-oss-process=image/resize,w_88,h_88/format,png/quality,q_90",
          z1: "验孕避孕"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/901a7b33b8eb43b663f2caa6ae5a427ef1?x-oss-process=image/resize,w_88,h_88/format,png/quality,q_90",
          z1: "驱蚊处暑"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/4d0f160783e2743136a59a0ed0a38806db?x-oss-process=image/resize,w_88,h_88/format,png/quality,q_90",
          z1: "风湿伤骨"
        }
      ],
      lists: [
        {
          pic:
            "https://image-star.elemecdn.com/pb/2d2b3133b45cbc09469294dc250f7841ff?x-oss-process=image/resize,w_160,h_160/format,png/quality,q_90",
          z1: "金达克宁..",
          num1: "32.8",
          num2: "20"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/c49182fe34f3b30d62eb208ff45e6903d2?x-oss-process=image/resize,w_160,h_160/format,png/quality,q_90",
          z1: "慢咽舒宁",
          num1: "11.9",
          num2: "19.9"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/0255a4df954ee86006fe8f87d605e01cd2?x-oss-process=image/resize,w_160,h_160/format,png/quality,q_90",
          z1: "金属亭",
          num1: "34.2",
          num2: "39.8"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/7b67fc533c0c9c5270623a18045e924adc?x-oss-process=image/resize,w_160,h_160/format,png/quality,q_90",
          z1: "娅舒",
          num1: "39.9",
          num2: "94"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/2da5657d54d0b6a170444f5a6e2e95e317?x-oss-process=image/resize,w_160,h_160/format,png/quality,q_90",
          z1: "康恩贝",
          num1: "32",
          num2: "48"
        },
        {
          pic:
            "https://image-star.elemecdn.com/pb/a0343f4857100d07c48c5df0380f30ae29?x-oss-process=image/resize,w_160,h_160/format,png/quality,q_90",
          z1: "希斯敏",
          num1: "18",
          num2: "22"
        }
      ],
      shoplist: [
        {
          pic:
            "https://fuss10.elemecdn.com/7/d2/ce96212def8cd70fa83af4ebf6d5ejpeg.jpeg?imageMogr/format/jpeg/thumbnail/!280x280r/gravity/Center/crop/280x280/",
          z1: "品牌",
          z2: "泉源堂(世荣嘉轩店)",
          num1: "360",
          num2: "15",
          num3: "3",
          num4: "2.7",
          num5: "47",
          z3: "无忧退款"
        },
        {
          pic:
            "https://fuss10.elemecdn.com/4/4c/fc9730e8deaf816ec0b77219af649jpeg.jpeg?imageMogr/format/jpeg/thumbnail/!280x280r/gravity/Center/crop/280x280/",
          z1: "品牌",
          z2: "老板姓大药房(西安凤城)",
          num1: "198",
          num2: "20",
          num3: "5",
          num4: "1.9",
          num5: "30",
          z3: "无忧退款"
        },
        {
          pic:
            "https://fuss10.elemecdn.com/5/46/13f21efa1c4d5b6f7128de08f790bjpeg.jpeg?imageMogr/format/jpeg/thumbnail/!280x280r/gravity/Center/crop/280x280/",
          z1: "品牌",
          z2: "怡康医药超市(文锦路店)",
          num1: "82",
          num2: "10",
          num3: "2",
          num4: "1.1",
          num5: "40",
          z3: "无忧退款"
        },
        {
          pic:
            "https://fuss10.elemecdn.com/e/8f/981af9fc300900d7ee756bcf99807jpeg.jpeg?imageMogr/format/jpeg/thumbnail/!280x280r/gravity/Center/crop/280x280/",
          z1: "品牌",
          z2: "睛美眼镜(凤城九路店)",
          num1: "25",
          num2: "33.8",
          num3: "4",
          num4: "2.2",
          num5: "41",
          z3: "无忧退款"
        },
        {
          pic:
            "https://fuss10.elemecdn.com/2/d2/3600415acf2a7b41dc7672605f38cjpeg.jpeg?imageMogr/format/jpeg/thumbnail/!280x280r/gravity/Center/crop/280x280/",
          z1: "品牌",
          z2: "善玲说-诚然情趣外卖",
          num1: "28",
          num2: "179",
          num3: "5",
          num4: "2.6",
          num5: "46",
          z3: "无忧退款"
        },
        {
          pic:
            "https://fuss10.elemecdn.com/9/c6/ee2233dce682d19e16b77cdd2620ajpeg.jpeg?imageMogr/format/jpeg/thumbnail/!280x280r/gravity/Center/crop/280x280/",
          z1: "品牌",
          z2: "康和情趣成人用品",
          num1: "103",
          num2: "168",
          num3: "5",
          num4: "10.7",
          num5: "86",
          z3: "无忧退款"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.drugstore {
  background: #ffffff;
  width: 100%;
  height: 12rem;
  text-align: center;
  overflow: hidden;
  text-align: center;
  .store {
    width: 100%;
    height: 12rem;
    text-align: center;
    overflow: hidden;
    text-align: center;
    .item-overflow {
      .itemdrugstore {
        width: 20%;
        float: left;
        position: relative;
        margin-top: 1.5rem;
        .img_item {
          position: relative;
          display: inline-block;
          width: 3rem;
          height: 3rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          display: block;
          color: #666;
          font-size: 0.72rem;
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

.ele-seasons {
  width: 100%;
  height: 12.1rem;
  background-color: #ededed;
  .seasons {
    width: 96%;
    height: 12rem;
    margin: 0.5rem auto;
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
          height: 7rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 0.05rem solid #efedee;
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
  .index-distanceWrap {
    color: #999;
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

