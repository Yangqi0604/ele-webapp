<template>
    <div class="bottomSearch">
        <div class="lefts">
          <span class="fa fa-commenting-o icons" aria-hidden="true"></span>
          <span class="phones">在线客服</span>
        </div>
        <div class="rights">
          <span  class="fa fa-phone icons" aria-hidden="true"></span>
          <span class="phones">电话客服</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "customerServiceTop"
    }
</script>

<style scoped>
.bottomSearch{
  width: 100%;
  height: 4rem;
  position: fixed;
  bottom: 0;
  background:white;
  display: flex;
}
  .lefts,.rights{
    width: 50%;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    font-size: .8rem;
  }
  .icons{
    color: #0085ff;
    font-size: 1rem;
  }
  .phones{
    color: #666666;
  }
</style>
