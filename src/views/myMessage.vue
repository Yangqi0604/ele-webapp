<template>
    <div class="myMessage">
        <div class="messageTop">
          <router-link to="/customerService" class="fa fa-chevron-left" aria-hidden="true">
          </router-link>
          <p>我的客服</p>
        </div>
        <ul class="messageMain" id="ooo"></ul>
        <div class="messageBottom">
          <input type="text" placeholder="请简短描述您的问题" v-model="txt" @keydown.13="mess">
          <button class="fa fa-arrow-up" aria-hidden="true" @click="mess"></button>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          txt:"",
          data:""
        }
      },
        name: "myMessage",
        created() {
          this.mess()
        },
        methods:{
               mess(){
                 let txtvalue=this.txt;
                let webSocket = new WebSocket("ws://localhost:8082")
                //监听是否成功链接服务器
                webSocket.onopen = function (e) {
                  console.log("成功")
                  //向服务器发送消息
                  webSocket.send(txtvalue)
                  //渲染页面
                  let uls = document.getElementById('ooo')
                  let lis = document.createElement("li")
                  let img = document.createElement("img")
                  let ads = document.createElement("a")
                  img.src = "https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/"
                  img.style = `width:2rem;height:2rem;line-height: 2rem;vertical-align: middle`
                  lis.style = `color:gray;min-width:10rem;min-height:2rem;text-align:right;line-height: 2rem;`
                  ads.style = `background:#0085ff;border-radius: 5px;color:white;min-width:3rem;height:2rem;line-height: 2rem;`
                  ads.innerText =txtvalue
                  lis.appendChild(ads)
                  lis.appendChild(img)
                  uls.append(lis)
                }
                //服务器推送过来的数据
                 let a;
                webSocket.onmessage = function (e) {
                     a =  e.data;
                }
                 setTimeout(function () {
                   this.data=a;
                   let uls1 = document.getElementById('ooo')
                   let lis1 = document.createElement("li")
                   let imgs = document.createElement("img")
                   let ass = document.createElement('a')
                   ass.innerText = this.data;
                   imgs.src = "//shadow.elemecdn.com/faas/service/static/media/customer-service.9f9fce54.png";
                   imgs.style = `width:2rem;height:2rem;line-height: 2rem;vertical-align: middle`
                   lis1.appendChild(imgs)
                   lis1.appendChild(ass)
                   ass.style = `background:white;border-radius: 5px;color:black;min-width:3rem;height:2rem;line-height: 2rem;`
                   lis1.style = `color:black;min-height:2rem; line-height: 2rem;text-align:left;`
                   uls1.append(lis1)
                   },1500 )
               }

        }
    }
</script>

<style scoped>
  .myMessage{
    background: #F4F4F4;
  }
.messageTop{
  width: 100%;
  height: 3rem;
  background:white;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
}
.messageTop>.fa-chevron-left{
  display: inline-block;
  width: 3rem;
  font-size: 1.2rem;
  color: #0085ff;
  margin-left: 1rem;
  text-decoration: none;

}
.messageTop>p {
  font-size: 1rem;

}
.messageMain{
  width: 100%;
  height: 37rem;
  margin-top: 1rem;
  margin-bottom: 4rem;
  font-size: 1.2rem;
  overflow: auto;
}

.messageBottom{
  width: 100%;
  height: 3rem;
  background:white;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

}
.messageBottom>input{
  width: 18rem;
  height: 1.5rem;
}
.messageBottom>button{
  width:2rem;
  height: 1.8rem;
}
</style>
