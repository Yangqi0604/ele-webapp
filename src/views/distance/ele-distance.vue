<template>
  <div>
    <!-- 饿了么模板 -->
    <div v-if="flag" id="distance-top">
      <div class="quanbu">
        <div class="top">
          <!-- 金币商城 -->
          <div class="top-one">
            <div class="gold">
              <p>金币商城</p>
              <P class="tips">0元好物在这里</P>
            </div>
            <div class="tupian">
              <img
                src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"
                alt
              />
            </div>
          </div>
          <!-- 推荐有奖 -->
          <div class="bottom">
            <div class="bottom-one" style="border-bottom:1px dotted #999;">
              <div>
                <p style="color: rgb(27, 169, 225);marginTop:.8rem">推荐有奖</p>
                <p class="tips">20元现金拿不停</p>
              </div>
              <div>
                <img
                  style="width:3rem;marginTop:.5rem"
                  src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/"
                  alt
                />
              </div>
            </div>
            <!-- 周边优惠 -->
            <div class="bottom-one">
              <div class="youhui">
                <p>周边优惠</p>
                <p class="tips">领取口碑好券</p>
              </div>
              <div class="tupian2">
                <img
                  src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
        <div class="kongbai"></div>
        <div class="recommend">
          <div class="recommend-title">
            <i class="fa fa-hand-o-right" aria-hidden="true"></i>
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <span>为你推荐</span>
            <i class="fa fa-hand-o-left" aria-hidden="true"></i>
            <p class="tips">你的口味，我都懂得</p>
          </div>
        </div>
        <!-- 推荐商品 -->
        <div class="shop-List">
          <ul>
            <li v-for="(n,index) in list" :key="index">
              <img :src="n.img" alt />
              <h3>{{n.title}}</h3>
              <span class="tips">{{n.shou}}</span>
              <span class="tips">{{n.good}}</span>
              <br />
              <em style="color:red;fontSize:1.5rem">{{n.price}}</em>
              <span
                style="display: inlineBlock;border:1px solid pink;color:pink;fontSize:0.8rem"
                v-if="n.jian!==''"
              >{{n.jian}}</span>
              <del class="tips1" v-if="n.del!==''">{{n.del}}</del>
              <h5 style="boeder:1px dotted #999;">
                <hr />
                <i class="fa fa-university tips" aria-hidden="true">{{n.shopname}}</i>
              </h5>
            </li>
          </ul>
          <div class="more">
            <p class="tips">
              查看更多
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </p>
          </div>
        </div>
        <div class="kongbai"></div>
        <!-- 限时好礼 -->
        <div class="goodgift">
          <div class="recommend-title">
            <i class="fa fa-hand-o-right" aria-hidden="true"></i>
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            <span>限时好礼</span>
            <i class="fa fa-hand-o-left" aria-hidden="true"></i>
            <p class="tips">金币换壕礼</p>
          </div>
          <div class="gift-list">
            <ul>
              <li v-for="(gift,index) in giftList" :key="index">
                <img :src="gift.img" alt />
                <p class="tip">{{gift.name}}</p>
                <span class="tip">{{gift.nowprice}}</span>
                <del class="tips">{{gift.oldprice}}</del>
                <!-- 走上角 -->
                <p class="left-top">{{gift.ding}}</p>
              </li>
            </ul>
            <div class="more">
              <p class="tips">
                查看更多
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
        <div class="footed" style="height:2.5rem;width:100%"></div>
      </div>
    </div>
    <!-- 美团模板 -->
    <div v-if="!flag" id="mt-header">
      <div class="header-mt">
        <strong>发现</strong>
      </div>
      <div class="mtnav">
        <ul>
          <router-link v-for="(s,index) in mtnav" tag="li" to="s.towhere" :key="index">{{s.name}}</router-link>
        </ul>
      </div>
      <ul class="content">
        <li v-for="(s,sid) in mtlist" :key="sid">
          <img :src="s.img" alt />
          <p>{{s.title}}</p>
          <div class="userDis">
            <div class="userIm">
              <img :src="s.simg" alt />
              <p>&nbsp;&nbsp;{{s.name}}</p>
            </div>
            <div>
              <i :class="s.font"></i>
              <span>{{s.numb}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "shopList",
  data() {
    return {
      // flag:false,
      list: [
        {
          img:
            "https://fuss10.elemecdn.com/d/d4/7e14b607e21c8ff7ee61b5d1aafe6jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
          title: "红烧肉",
          shou: "月售25份",
          good: "好评率75%",
          price: "38.9",
          jian: "满35减22",
          shopname: "川湘私房菜（凤城6路店）",
          del: ""
        },
        {
          img:
            "https://fuss10.elemecdn.com/c/b7/a2030745e80ad7c106d8fe1911437jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
          title: "香干回锅肉",
          shou: "月售24份",
          good: "好评率100%",
          price: "30.98",
          jian: "满29减12",
          shopname: "川湘私房菜（凤城6路店）"
        },
        {
          img:
            "https://fuss10.elemecdn.com/4/c7/076641d3097595cb8a1eb80c84491png.png?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
          title: "番茄过桥米线",
          shou: "月售322份",
          good: "好评率89%",
          price: "13.9",
          jian: "",
          shopname: "小阿妹米线",
          del: "25"
        },
        {
          img:
            "https://fuss10.elemecdn.com/7/71/2b05c04024a81896f3172e1876cc3png.png?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
          title: "麻辣过桥米线",
          shou: "月售434份",
          good: "好评率90%",
          price: "13.9",
          jian: "",
          shopname: "小阿妹米线",
          del: "26"
        },
        {
          img:
            "https://fuss10.elemecdn.com/8/ea/9d1f5e2d99e0f31ac6e92e8be2b4bjpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
          title: "毛记精品",
          shou: "月售131份",
          good: "好评率100%",
          price: "57.82",
          jian: "",
          shopname: "毛记冒菜（凤城五路店）",
          del: "59"
        },
        {
          img:
            "https://fuss10.elemecdn.com/2/0c/c3a83512427ccd2b735ccb7bcd7efjpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/",
          title: "毛记精品",
          shou: "月售21份",
          good: "好评率100%",
          price: "86.24",
          jian: "",
          shopname: "毛记冒菜（凤城五路店）",
          del: "88"
        }
      ],
      giftList: [
        {
          img:
            "https://fuss10.elemecdn.com/7/ec/adf8ae0fd52a0eb56f4332fb61ac2jpeg.jpeg?imageMogr/format/webp/",
          name: "3元品质联盟红包",
          nowprice: "90金币",
          oldprice: "￥3",
          ding: "限时优惠"
        },
        {
          img:
            "https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/",
          name: "数码经络按摩仪",
          nowprice: "90金币",
          oldprice: "￥239",
          ding: "特价换购"
        },
        {
          img:
            "https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/",
          name: "扫地机器人",
          nowprice: "9金币",
          oldprice: "￥99",
          ding: "特价换购"
        }
      ],
      mtlist: [
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463436742&di=9eeba834768135b5c9798ece69834a9a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171112%2F993286e58d5741ceb565c58165d4af5e.jpeg",
          title: "有点点像太古离得感觉",
          simg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564058177&di=297db54452de9df38f44e0c4506e0aca&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.qqzhi.com%2Fuploads%2F2018-11-30%2F021647728.jpg",
          name: "Mr.Tt",
          font: "fa fa-thumbs-o-up",
          numb: "4"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463293838&di=bfb7d7d59f6a7a3cfd6cc568d4f876c2&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fd8f9d72a6059252d20b67a9c3f9b033b5ab5b981.jpg",
          title: "晚上看看电影 吃个饭很舒服~希望越来越好",
          simg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463293836&di=ef41a224a1997f84a108e0fb266e888d&imgtype=0&src=http%3A%2F%2Fspider.nosdn.127.net%2F1c6b1a57e2d09108f33289fc48d17dc2.jpeg",
          name: "GoodName",
          font: "fa fa-thumbs-o-up",
          numb: "4"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463359370&di=09fff17bf1533bef550fa352390d5733&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2F9n0jHBIbC_A5afJEXS7EifoKlmn2psJTH1C2R_9Vjq51YlpP_VRbRSdqmUQ1NqkejoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg",
          title: "反正我是不会进去",
          simg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463387924&di=c41fb34a70d406f93d6bb6294b940be8&imgtype=0&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F170506%2F031SLA9-7.jpg",
          name: "AlisXiaodun",
          font: "fa fa-thumbs-o-up",
          numb: "4"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463179970&di=bb843bac681a9a428c0a430ed6b3b909&imgtype=0&src=http%3A%2F%2Fpic17.nipic.com%2F20111128%2F3829398_085119486000_2.jpg",
          title: "我一个摄影师结婚也来这里拍照片 ",
          simg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463179969&di=cbb9f5d32dab6ca19cbf8534ceacdc6e&imgtype=0&src=http%3A%2F%2Ft1.mmonly.cc%2Fuploads%2Ftu%2F201611%2F57%2F50eced0f9c35b.jpg",
          name: "Pite",
          font: "fa fa-thumbs-o-up",
          numb: "4"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564058222&di=909486d1c55cafe39f2267702352c325&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.gtimg.com%2Fauto%2Fpics%2Fhv1%2F129%2F205%2F1979%2F128736879.jpg",
          title: "28岁心愿满足 不辜负自己两年的努力 送了渡晶",
          simg:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1976113906,1682536670&fm=26&gp=0.jpg",
          name: "Mr.Tt",
          font: "fa fa-thumbs-o-up",
          numb: "4"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564058891&di=b12c8ef0ca49907584c42d88515c8a6c&imgtype=jpg&er=1&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F573%2F194%2F8676491375_136014103.310x310.jpg",
          title: "这里只有女孩的衣服[色][色][色]",
          simg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563464191612&di=910096e4a2c477568275a25b6d37cc5e&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2F893be9fd16dcddd4.jpg",
          name: "Mr.Tt",
          font: "fa fa-thumbs-o-up",
          numb: "4"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463293838&di=bfb7d7d59f6a7a3cfd6cc568d4f876c2&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fd8f9d72a6059252d20b67a9c3f9b033b5ab5b981.jpg",
          title: "晚上看看电影 吃个饭很舒服~希望越来越好",
          simg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463293836&di=ef41a224a1997f84a108e0fb266e888d&imgtype=0&src=http%3A%2F%2Fspider.nosdn.127.net%2F1c6b1a57e2d09108f33289fc48d17dc2.jpeg",
          name: "GoodName",
          font: "fa fa-thumbs-o-up",
          numb: "4"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463359370&di=09fff17bf1533bef550fa352390d5733&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2F9n0jHBIbC_A5afJEXS7EifoKlmn2psJTH1C2R_9Vjq51YlpP_VRbRSdqmUQ1NqkejoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg",
          title: "反正我是不会进去",
          simg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463387924&di=c41fb34a70d406f93d6bb6294b940be8&imgtype=0&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F170506%2F031SLA9-7.jpg",
          name: "AlisXiaodun",
          font: "fa fa-thumbs-o-up",
          numb: "4"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463179970&di=bb843bac681a9a428c0a430ed6b3b909&imgtype=0&src=http%3A%2F%2Fpic17.nipic.com%2F20111128%2F3829398_085119486000_2.jpg",
          title: "我一个摄影师结婚也来这里拍照片 ",
          simg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463179969&di=cbb9f5d32dab6ca19cbf8534ceacdc6e&imgtype=0&src=http%3A%2F%2Ft1.mmonly.cc%2Fuploads%2Ftu%2F201611%2F57%2F50eced0f9c35b.jpg",
          name: "Pite",
          font: "fa fa-thumbs-o-up",
          numb: "4"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564058222&di=909486d1c55cafe39f2267702352c325&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.gtimg.com%2Fauto%2Fpics%2Fhv1%2F129%2F205%2F1979%2F128736879.jpg",
          title: "28岁心愿满足 不辜负自己两年的努力 送了渡晶 jiayou",
          simg:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1976113906,1682536670&fm=26&gp=0.jpg",
          name: "Mr.Tt",
          font: "fa fa-thumbs-o-up",
          numb: "9"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564058891&di=b12c8ef0ca49907584c42d88515c8a6c&imgtype=jpg&er=1&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F573%2F194%2F8676491375_136014103.310x310.jpg",
          title: "这里只有女孩的衣服[色][色][色]",
          simg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563464191612&di=910096e4a2c477568275a25b6d37cc5e&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2F893be9fd16dcddd4.jpg",
          name: "Mr.Tt",
          font: "fa fa-thumbs-o-up",
          numb: "7"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463293838&di=bfb7d7d59f6a7a3cfd6cc568d4f876c2&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fd8f9d72a6059252d20b67a9c3f9b033b5ab5b981.jpg",
          title: "晚上看看电影 吃个饭很舒服~希望越来越好",
          simg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463293836&di=ef41a224a1997f84a108e0fb266e888d&imgtype=0&src=http%3A%2F%2Fspider.nosdn.127.net%2F1c6b1a57e2d09108f33289fc48d17dc2.jpeg",
          name: "GoodName",
          font: "fa fa-thumbs-o-up",
          numb: "8"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463359370&di=09fff17bf1533bef550fa352390d5733&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2F9n0jHBIbC_A5afJEXS7EifoKlmn2psJTH1C2R_9Vjq51YlpP_VRbRSdqmUQ1NqkejoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg",
          title: "反正我是不会进去",
          simg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463387924&di=c41fb34a70d406f93d6bb6294b940be8&imgtype=0&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F170506%2F031SLA9-7.jpg",
          name: "AlisXiaodun",
          font: "fa fa-thumbs-o-up",
          numb: "4"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463179970&di=bb843bac681a9a428c0a430ed6b3b909&imgtype=0&src=http%3A%2F%2Fpic17.nipic.com%2F20111128%2F3829398_085119486000_2.jpg",
          title: "我一个摄影师结婚也来这里拍照片 ",
          simg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563463179969&di=cbb9f5d32dab6ca19cbf8534ceacdc6e&imgtype=0&src=http%3A%2F%2Ft1.mmonly.cc%2Fuploads%2Ftu%2F201611%2F57%2F50eced0f9c35b.jpg",
          name: "Pite",
          font: "fa fa-thumbs-o-up",
          numb: "7"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564058222&di=909486d1c55cafe39f2267702352c325&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.gtimg.com%2Fauto%2Fpics%2Fhv1%2F129%2F205%2F1979%2F128736879.jpg",
          title: "28岁心愿满足 不辜负自己两年的努力 送了渡晶",
          simg:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1976113906,1682536670&fm=26&gp=0.jpg",
          name: "Mr.Tt",
          font: "fa fa-thumbs-o-up",
          numb: "10"
        },
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564058891&di=b12c8ef0ca49907584c42d88515c8a6c&imgtype=jpg&er=1&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F573%2F194%2F8676491375_136014103.310x310.jpg",
          title: "这里只有女孩的衣服 小仙女快来[色][色][色]",
          simg:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563464191612&di=910096e4a2c477568275a25b6d37cc5e&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2F893be9fd16dcddd4.jpg",
          name: "Mr.Tt",
          font: "fa fa-thumbs-o-up",
          numb: "3"
        }
      ],
      mtnav: [
        {
          name: "推荐",
          towhere: ""
        },
        {
          name: "旅行",
          towhere: ""
        },
        {
          name: "丽人",
          towhere: ""
        },
        {
          name: "电影",
          towhere: ""
        },
        {
          name: "结婚",
          towhere: ""
        },
        {
          name: "购物",
          towhere: ""
        }
      ]
    };
  },
  computed: {
    ...mapState(["flag"])
  }
};
</script>

<style>
#distance-top {
  width: 100%;
  background-color: #fff;
}
#distance-top .quanbu {
  width: 90%;
  margin: 1rem auto;
}
#distance-top .top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
}
#distance-top .top .top-one .gold p:first-child {
  color: rgb(255, 153, 0);
  font-size: 1rem;
}
#distance-top .top .top-one {
  width: 50%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
}
#distance-top .top .top-one .tupian img {
  margin-top: 3.5rem;
  width: 4.8rem;
}
#distance-top .bottom {
  width: 50%;
  border-left: 1px dotted #999;
  height: 8rem;
}
#distance-top .bottom-one {
  height: 50%;
  display: flex;
  justify-content: space-around;
}
#distance-top .bottom-one .youhui p:first-child {
  color: rgb(27, 169, 225);
  margin-top: 0.8rem;
}
#distance-top .bottom-one .tupian2 img {
  width: 3rem;
  margin-top: 0.5rem;
}
.tips {
  font-size: 0.8rem;
  color: #999;
  line-height: 1.8rem;
}
.tips1 {
  font-size: 0.8rem;
  color: #999;
}
#distance-top .kongbai {
  margin-left: -1.2rem;
  width: 115.5%;
  margin-left: -10%;
  height: 1rem;
  background-color: rgba(245, 245, 245);
}
#distance-top .recommend {
  width: 100%;
  background-color: #fff;
}
#distance-top .recommend-title span {
  font-size: 1.5rem;
}
#distance-top .recommend-title i:nth-of-type(2) {
  color: red;
  font-size: 1.3rem;
}
#distance-top .recommend-title {
  margin-top: 1rem;
  text-align: center;
}
.shop-List ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.shop-List ul li {
  margin-top: 1rem;
  width: 47%;
}
.shop-List ul li img {
  width: 100%;
  height: 7rem;
  margin: 0 auto;
}
#distance-top .more {
  text-align: center;
  margin: 1rem auto;
}
#distance-top .goodgift {
  width: 100%;
  margin: 0 auto;
}
#distance-top .goodgift .gift-list ul {
  display: flex;
  justify-content: space-between;
}
#distance-top .goodgift .gift-list ul li {
  width: 33%;
  position: relative;
}
#distance-top .goodgift .gift-list ul li img {
  width: 100%;
}
.tip {
  font-size: 0.9rem;
}
#distance-top .goodgift .gift-list ul li .left-top {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  background-color: #413d3c;
  color: white;
  font-size: 0.8rem;
}
#mt-header .content {
  background: #f5f5f5;
  padding: 0 0.2rem;
  margin: 0.2rem auto;
  overflow: hidden;
  column-count: 2;
  column-gap: 0;
}
#mt-header .content > li {
  border-radius: 8px;
  margin: 0 5px 10px;
  padding: 5px;
  break-inside: avoid;
  background-color: #fff;
}
#mt-header .content > li > img {
  width: 97%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
#mt-header .content > li > p {
  line-height: 1.2rem;
  font-weight: 600;
  font-size: 0.8rem;
  min-height: 1rem;
  color: #222;
  padding-top: 6px;
  padding: 0.2rem 0;
}
#mt-header .content > li > .userDis {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#mt-header .content > li > .userDis > .userIm {
  width: 50%;
  display: flex;
  justify-content: space-between;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-right: 0.1rem;
}
#mt-header .content > li > .userDis > .userIm > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
#mt-header .header-mt {
  width: 100%;
  height: 3rem;
  background-color: rgb(246, 194, 59);
  text-align: center;
}
#mt-header .header-mt strong {
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 3rem;
}

#mt-header .mtnav {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
}
#mt-header .mtnav ul {
  height: 2rem;
  line-height: 2rem;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem auto;
  font-size: 1.2rem;
}
</style>
