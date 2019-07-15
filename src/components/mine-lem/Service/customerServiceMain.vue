<template>
    <div class="mainService">
        <h1>常见问题</h1>
        <div class="mainServiceSon" v-for="(i,index) in ids" :key="index">
          <div class="mainServiceSonOne">
            <span :class="i.icon" aria-hidden="true"></span>
            <span style="font-size: .7rem">{{i.id}}</span>
          </div>
          <div class="mainServiceSonTwo">
              <p>{{i.one}}</p>
              <p>{{i.two}}</p>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          ids:[
            {
              "icon":"fa fa-pencil-square-o","id":"退单问题",
              "one":"【申请客服进入,进度条查询】","two":"怎么申请部分订单?"
            },
            {
              "icon":"fa fa-pencil-square-o","id":"催单问题",
              "one":"订单超市怎么办","two":"为什么超时送达,没有超时赔付?"
            },
            {
              "icon":"fa fa-pencil-square-o","id":"活动问题",
              "one":"申请客服进入,进度条查询","two":"怎么申请部分订单?"
            },
            {
              "icon":"fa fa-pencil-square-o","id":"投诉问题",
              "one":"申请客服进入,进度条查询","two":"怎么申请部分订单?"
            }

          ]
        }
      },
        name: "customerServiceTop"
    }
</script>

<style scoped>
.mainService{
  width: 94%;
  min-height: 26rem;
  position: absolute;
  top:6.4rem;
  left:0.6rem;
  background: white;
}
.mainService>h1{
  font-size: .8rem;
  margin-top: 1rem;
  margin-bottom: .5rem;
  margin-left: .3rem;
}
  .mainServiceSon{
    width: 100%;
    height: 6rem;
    display: flex;
  }
  .mainServiceSonOne{
    width: 6rem;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: .5px solid lightgray;
    border-right: .5px solid lightgray;
  }
.mainServiceSonOne>span:nth-of-type(1){
  font-size: 1.2rem;
  color: #0085ff;
}
  .mainServiceSonTwo{
    width: 14rem;
    height: 6rem;
    display: flex;
    flex-direction: column;

  }
.mainServiceSonTwo>p{
  border-bottom: .5px solid lightgray;
  padding-left: .8rem;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  color: #666666;
  font-size: .9rem;
}
</style>
