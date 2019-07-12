<template>
  <div class="order">
     <div class="order-processing">
       <div class="processing-top">
         <img src="https://fuss10.elemecdn.com/7/d3/48a777a6b444dc317cc24d101220cjpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/">
          <div class="time">
            <div class="tiMe"> 
            <div class="ele-tiMe">
                <h3>肯德基宅急送(风八..</h3>
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
            <span>5小时52分钟前</span>
          </div>
          <p>订单超时未支付</p>
          </div> 
       </div>
       <!-- 第二层 -->
       <div class="price">
          <div class="price-row">
            <p>雪菜笋丁鸡肉粥T</p>
            <span>￥16.50</span>
          </div>
       </div>
       <!-- 第三层 -->
       <div class="once-agin">
          <a>再来一单</a>
       </div>
     </div> 
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  height: 12rem;
  background-color: #f4f4f4;
  .order-processing {
    width: 100%;
    height: 11.5rem;
    background-color: white;
    .processing-top {
      width: 100%;
      height: 3.4rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .time {
        width: 86%;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 0.05rem solid #f3f3f3;
        .tiMe {
          width: 60%;
          height: 3.4rem;
          .ele-tiMe {
            width: 75%;
            height: 2rem;
            display: flex;
            align-items: center;
            color: #2e2e2e;
            justify-content: space-around;
            h3 {
              font-size: 0.92rem;
            }
            i {
              font-size: 0.62rem;
              color: #3b3b3b;
            }
          }
          span {
            font-size: 0.62rem;
            color: #aaaaaa;
          }
        }
        p {
          font-size: 0.80rem;
          color: #323232;
        }
      }
      img {
        width: 2rem;
        height: 2rem;
      }
    }
    .price {
      width: 100%;
      height: 4rem;
      border-bottom: 0.05rem solid #f3f3f3;
      .price-row {
        display: flex;
        justify-content: space-between;
        width: 76%;
        height: 4rem;
        align-items: center;
        margin: 0 auto;
        p {
          font-size: 0.78rem;
          color: #9f9f9f;
        }
        span {
          font-size: 0.78rem;
          color: #373737;
        }
      }
    }
    .once-agin {
      width: 100%;
      height: 4.5rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      a {
        width: 18%;
        height: 2rem;
        display: block;
        text-align: center;
        line-height: 2rem;
        margin-right: 1.2rem;
        border-radius: 0.25rem;
        font-size: 0.88rem;
        color: #1f9aff;
        border: 0.05rem solid #1f9aff;
      }
    }
  }
}

</style>
