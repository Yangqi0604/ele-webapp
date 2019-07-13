<template>
  <div class="seller">
    <div class="one">
      <div class="story">
        <div class="picture">
          <img
            :src="indexdata.header_image"
            alt
          />
        </div>
        <h3>{{indexdata.title}}</h3>
        <span>{{indexdata.brand_intros[0].brief}}</span>
        <div class="brand">
          <p>查看品牌故事</p>
        </div>
      </div>
    </div>
    <div class="delivery">
      <div class="message">
        <h3>配送信息</h3>
        <ul>
          <li style="display:flex">
            <span>{{indexdatas.rst.delivery_mode.text}}</span>约56分钟送达，距离2.6km
          </li>
          <li>{{indexdatas.rst.piecewise_agent_fee.description}}</li>
        </ul>
      </div>
    </div>
    <div class="serve">
      <div class="service">
        <h3>商家服务</h3>
        <ul>
          <li>
            <span>{{indexdatas.rst.supports[0].icon_name}}</span>
          </li>
          <li style="margin-left:.5rem" > {{indexdatas.rst.supports[0].description}}</li>
        </ul>
         <!-- v-if="indexdata.rst.supports[0].description!==''" -->
      </div>
    </div>
    <div class="action">
      <div class="merchant">
        <h3>商家实景</h3>
        <div class="photo">
          <div>
            <img
              src="https://fuss10.elemecdn.com/c/ad/432a9480afdee672b2e5536f17c4cpng.png?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/"
              alt
            />
          </div>
          <div>
            <img
              src="http://fuss10.elemecdn.com/6/0a/99f0a90fbd5f4ac5fc38abb8a9b8dpng.png?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/"
              alt
            />
          </div>
          <div>
            <img
              src="http://fuss10.elemecdn.com/6/0a/99f0a90fbd5f4ac5fc38abb8a9b8dpng.png?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/"
              alt
            />
          </div>
        </div>
      </div>
    </div>
    <div class="shops">
      <div class="info">
        <h3>商家信息</h3>
        <p>暂无简介</p>
        <!-- <hr> -->
        <ul>
          <li>
            <span>品类</span>
            <span>{{indexdatas.rst.flavors[0].name}},{{indexdatas.rst.flavors[1].name}}</span>
          </li>
          <li>
            <span>商家电话</span>
            <span>
              {{indexdatas.rst.phone}}
              <i class="fa fa-angle-right"></i>
            </span>
          </li>
          <li>
            <span>地址</span>
            <div class="site">
              <span>{{indexdatas.rst.address}}</span>
            </div>
          </li>
          <li>
            <span>营业时间</span>
            <span>{{indexdatas.rst.opening_hours[0]}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="business">
      <div class="aptitude">
        <h3>营业资质</h3>
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.getData();
  },
  data(){
    return{
      indexdata:{},
      indexdatas:{}
    }
  },
  methods: {
    getData() {
      this.$axios("/profile/seller").then(res => {
        // console.log(res.data);
        this.indexdata=res.data
        // console.log(this.indexdata)
      });
      this.$axios("/profile/batch_shop").then(rst =>{
        // console.log(rst.data);
        this.indexdatas=rst.data
      })
    },  
  }
};
</script>

<style scoped>
.seller {
  background-color: #ccc;
  padding-bottom: 1rem;
}
.seller .one {
  background-color: #fff;
}
.seller .one .story {
  width: 90%;
  padding-top: 1.4rem;
  margin: 0 auto;
}
.seller .story {
  margin-bottom: 1.875rem;
}
.seller .story .picture img {
  width: 100%;
  height: 10%;
}
.seller .story h3 {
  font-weight: 700;
  margin-top: 0.625rem;
  line-height: 1.5625rem;
}
.seller .story span {
  font-size: 0.8125rem;
  line-height: 1rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp:2; /** 显示的行数 **/
  overflow: hidden;  /** 隐藏超出的内容 **/
}
.seller .brand p {
  text-align: center;
  font-size: 0.8125rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
}
.seller .delivery {
  background-color: #fff;
  margin-bottom: 0.4rem;
}
.seller .delivery .message {
  width: 90%;
  margin: 1rem auto;
}
.seller .delivery .message h3 {
  font-weight: 700;
  line-height: 2.8rem;
}
.seller .delivery .message ul {
  font-size: 0.8125rem;
  line-height: 1.5rem;
  padding-bottom: 0.5rem;
}
.seller .delivery .message ul li span {
  background-color: #0097ff;
  color: #fff;
  border-radius: 3px;
  display: block;
  width: 4rem;
  text-align: center;
}
.seller .serve {
  background-color: #fff;
  margin-bottom: 0.4rem;
}
.seller .serve .service {
  width: 90%;
  margin: 1rem auto;
}
.seller .serve .service h3 {
  font-weight: 700;
  line-height: 2.8rem;
}
.seller .serve .service ul {
  font-size: 0.8125rem;
  line-height: 1.3rem;
  padding-top: .5rem;
  padding-bottom: 2rem;
  display: flex;
  align-content: center;
  text-align: center;
}
.seller .serve .service ul li span{
  border: 1px solid black;
  width: 1.2rem;
  height: 1.2rem;
  display: block;
}
.seller .action {
  background-color: #fff;
  padding-bottom: 1rem;
}
.seller .action .merchant {
  width: 90%;
  margin: 0 auto;
}
.seller .action .merchant h3 {
  font-weight: 700;
  line-height: 2.8rem;
}
.seller .action .photo {
  display: flex;
  width: 75%;
  justify-content: space-between;
}
.seller .action .photo img {
  width: 90%;
  height: 100%;
}
.seller .shops {
  background-color: #fff;
  margin-top: 1rem;
}
.seller .shops .info {
  width: 90%;
  padding-top: 1.2rem;
  margin: 0 auto;
}
.seller .shops .info h3{
  font-weight: 700;
}
.seller .shops .info p {
  font-size: 0.8125rem;
  line-height: 3rem;
  border-bottom: 1px solid #ccc;
}
.seller .shops .info ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  font-size: 0.8125rem;
  height: 3rem;
}
.seller .shops .info ul li .site{
  width: 70%;
  text-align: right;
}
.seller .shops .info ul li .site span{
  width: 70%;
  font-size: .74rem;
} 
.fa-angle-right {
  color: #ccc;
  font-size: 1.4rem;
}
.seller .business {
  margin-top: 1rem;
  background-color: #fff;
}
.seller .business .aptitude {
  background-color: #fff;
  width: 90%;
  padding-top: 1.2rem;
  margin: 0 auto;
  height: 2rem;
  display: flex;
  justify-content: space-between;
}
.seller .business .aptitude h3{
  font-weight: 700;
}
</style>
