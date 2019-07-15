<template>
    <div class="goldNav">
        <div class="gold">
            <h1>0</h1>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
        <div class="golds">
            <span>当前金币 @</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "goldNav"
    }
</script>

<style scoped>
    .goldNav {
        width: 100%;
        height: 110px;
        background-color: #008FFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .gold {
        display: flex;
        align-items: center;
        margin-left: 10%;
    }
    .gold h1 {
        font-size: 34px;
        font-weight: 900;
        color: #FFFFFF;
    }
    .gold i{
        font-size: 24px;
        margin-left: 10px;
        color: #FFFFFF;
    }
    .gold i{
        font-size: 24px;
        margin-left: 10px;
        color: #FFFFFF;
    }
    .golds {
        display: flex;
        align-items: center;
        margin-left: 10%;
        margin-top: 10px;
    }
    .golds span {
        font-size: 12px;
        color: #FFFFFF;
    }
</style>