<template>
  <div>
    <!-- 分类按钮 -->
    <div class="entries">
      <ele-swipe>
        <ele-swipe-item class="item-overflow">
          <div class="itemfood" v-for="(item,index) in indexdata" :key="index">
            <div class="img_item">
              <img :src="item.pic1" alt />
            </div>
            <span>{{item.z1}}</span>
          </div>
        </ele-swipe-item>
      </ele-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      "indexdata":[
        {"pic1":"./logo.png","z1":"运动"},
        {"pic1":"./logo.png","z1":"运动"},
        {"pic1":"./logo.png","z1":"健康"} ,
        {"pic1":"./logo.png","z1":"运动"},
        {"pic1":"./logo.png","z1":"运动"},
        {"pic1":"./logo.png","z1":"健康"} ,
        {"pic1":"./logo.png","z1":"运动"},
        {"pic1":"./logo.png","z1":"运动"},
        {"pic1":"./logo.png","z1":"健康"} ,
         {"pic1":"./logo.png","z1":"健康"} ,
    ]
    }
  }
}
</script>

<style scoped>
  /* 分类按钮 */
.entries {
  background: pink;
  width: 100%;
  height:12rem;
  text-align: center;
  display: flex;
  overflow: hidden;

}
.item-overflow{
    width: 200%;
    overflow-y:auto; 
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
  width:3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: lightgreen;
}
.img_item img {
  width: 100%;
  height: 100%;
  
}
.itemfood span {
  display: block;
  color: #666;
  font-size: 0.72rem;
}
</style>
