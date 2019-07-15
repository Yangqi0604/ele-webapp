<template>
  <div>
    <section class="nav-items" v-if="!this.show">
        <ul class="item-list">
          <li class="item"
            v-for="(item,index) in itemList"
            :to="item.path"
            :class="{active:currentIndex==index}"
            @click="changeSelect(index)"
          >{{item.name}}</li>
        </ul>
        <div class="item-more" >
          <i class="fa fa-chevron-down"></i>
        </div>
    </section>
    
  </div>

</template>

<script>
export default {
    name: "NavItemHeader",
    props:["itemList"],
    data(){
      return{
        show:false,
        currentIndex:0
      }
    },
  methods:{
    changeSelect(index){
      //点击切换成选中的样式，把变量的值赋值为 index
       this.currentIndex=index;
    },
    open(){
      this.show=true;
    },
    close(){
      this.show=false
    }
  }
}
</script>

<style scoped>
  @import "../../../static/theme/1/yuanjng.css";




</style>
