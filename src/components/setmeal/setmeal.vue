<template>
    <div>
        <ul class="setmeal-top">
            <li v-for="(item,index) in list"><p>{{item.text}}</p></li>
        </ul>
        <div class="kong"></div>
    </div>
</template>

<script>
export default {
    computed: {},
    components: {
    },
    data(){
        return {
                list:[
                    {text:"全部类别"},
                    {text:"简餐便当"},
                    {text:"传统美食"},
                    {text:"西式套餐"},
                    {text:"港澳风味"},
                    {text:"日韩料理"},
                ]
        
            }
    }
};
</script>

<style lang="scss" scoped>
.setmeal-top{
    display: flex;
    height: 2.4rem;
    width: 100%;
    background-color: #fff;
    overflow-y: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    position: fixed;
    top: 0;
}
.setmeal-top li{
    margin-left: 1rem;
    line-height: 2.4rem;
    color: #999;
}
.kong{
    margin-top: 2.4rem;
}
</style>
