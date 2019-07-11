<template>
    <div>
        <form class="search-form">
            <div class="box-search">
                <i class="fa fa-search"></i>
                <input type="text" placeholder="输入商家，商品名称" v-model="keyword">
                <i class="fa fa-times-circle-o delete"></i>
            </div>
            <button type="submit" class="btn">搜索</button>
        </form>
        <section class="search-suggestion">
            <ul>
                <li class="list-item">
                    <a  class="search-suggestion-item">
                        <span class="item-search">
                            <i class="fa fa-search"></i>
                            <span class="match-word">小龙虾</span>外卖
                        </span>
                        <span class="result-count"></span>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: "search-form" ,
        data(){
            return {
                keyword:""
            }
        },
        methods:{
            
        }
    }
</script>

<style scoped>
    @import "../../../static/theme/0/Search/search-form/index.css" ;
    /*美团*/
    /*.search-form {*/
    /*    margin-top: .2rem;*/
    /*    margin-bottom: .2rem;*/
    /*    height: .8rem;*/
    /*    position: relative;*/
    /*    padding: 0 0.2rem;*/
    /*}*/
    /*.box-search {*/
    /*    vertical-align: middle;*/
    /*    position: relative;*/
    /*    margin-right: 1.4rem;*/
    /*    border-radius: .06rem;*/
    /*    border: 1px #CCC solid;*/
    /*    background: #FFF;*/
    /*    height: .8rem;*/
    /*    line-height: .8rem;*/
    /*    padding: 0 .7rem 0 .7rem;*/
    /*    -webkit-box-sizing: border-box;*/
    /*}*/
    /*!*搜索按钮*!*/
    /*.box-search>i:nth-of-type(1){*/
    /*    display: inline-block;*/
    /*    position: absolute;*/
    /*    left: .2rem;*/
    /*    font-size: .4rem;*/
    /*    color: #999;*/
    /*    vertical-align: middle;*/
    /*    font-style: normal;*/
    /*    height: .8rem;*/
    /*    line-height: .8rem;*/
    /*}*/
    /*!*input框*!*/
    /*.box-search>input {*/
    /*    width: 100%;*/
    /*    border: none;*/
    /*    background: rgba(255, 255, 255, 0);*/
    /*    outline-style: none;*/
    /*    display: inline-block;*/
    /*    line-height: .28rem;*/
    /*    height: 100%;*/
    /*    font-size: .28rem;*/
    /*    padding: 0;*/
    /*}*/

    /*!*删除按钮*!*/
    /*.box-search .delete {*/
    /*    display: inline-block;*/
    /*    position: absolute;*/
    /*    right: .2rem;*/
    /*    font-size: .4rem;*/
    /*    color: #999;*/
    /*    vertical-align: middle;*/
    /*    font-style: normal;*/
    /*    height: .8rem;*/
    /*    line-height: .8rem;*/
    /*}*/
    
    /*!*搜索按钮*!*/
    /*.btn {*/
    /*    border: 0;*/
    /*    position: absolute;*/
    /*    right: 0.2rem;*/
    /*    top: 0;*/
    /*    width: 1.2rem;*/
    /*    height: 100%;*/
    /*    background-color: #06c1ae;*/
    /*    color: #fff;*/
    /*    border-radius: .06rem;*/
    /*    font-size: .28rem;*/
    /*    cursor: pointer;*/
    /*}*/
    /*!*输入关键词 下拉列表*!*/
    /*.search-suggestion{*/
    /*    background-color: #fff;*/
    /*    border-top: 1px solid #ccc;*/
    /*}*/
    /*.list-item {*/
    /*    height: 0.8rem;*/
    /*    line-height: 0.8rem;*/
    /*    padding: 0 0.28rem;*/
    /*    background-color: #FDFDFC;*/
    /*    border-bottom: 1px solid #ccc;*/
    /*    color: #999999;*/
    /*}*/
    /*.list-item>.search-suggestion-item {*/
    /*    display: flex;*/
    /*    list-style: none;*/
    /*    color: #999999;*/
    /*    position:relative;*/
    /*    font-size: .28rem;*/
    /*    height: 100%;*/
    /*    text-decoration: none;*/
    /*    outline: 0;*/
    /*    justify-content: space-between;*/
    /*}*/
    /*.item-search {*/
    /*    display: block;*/
    /*    margin-right: 2rem;*/
    /*}*/
    /*.item-search>i:nth-of-type(1){*/
    /*    display: inline-block;*/
    /*    margin-right: 0.14rem;*/
    /*    font-size:.3rem;*/
    /*}*/
    /*.item-search > .match-word {*/
    /*    color: #06c1ae;*/
    /*}*/
    /*.result-count {*/
    /*   */
    /*}*/

    /*!*饿了吗*!*/
    /*.search-form {*/
    /*    margin-top: .2rem;*/
    /*    margin-bottom: .2rem;*/
    /*    height: .8rem;*/
    /*    position: relative;*/
    /*    padding: 0 0.2rem;*/
    /*}*/
    /*.box-search {*/
    /*    vertical-align: middle;*/
    /*    position: relative;*/
    /*    margin-right: 1.4rem;*/
    /*    border-radius: .06rem;*/
    /*    border: 1px #CCC solid;*/
    /*    background: #FFF;*/
    /*    height: .8rem;*/
    /*    line-height: .8rem;*/
    /*    padding: 0 .7rem 0 .7rem;*/
    /*    -webkit-box-sizing: border-box;*/
    /*}*/
    /*!*搜索图标*!*/
    /*.box-search>i:nth-of-type(1){*/
    /*    display: inline-block;*/
    /*    position: absolute;*/
    /*    left: .2rem;*/
    /*    font-size: .4rem;*/
    /*    color: #999;*/
    /*    vertical-align: middle;*/
    /*    font-style: normal;*/
    /*    height: .8rem;*/
    /*    line-height: .8rem;*/
    /*}*/
    /*!*input框*!*/
    /*.box-search>input {*/
    /*    width: 100%;*/
    /*    border: none;*/
    /*    background: rgba(255, 255, 255, 0);*/
    /*    outline-style: none;*/
    /*    display: inline-block;*/
    /*    line-height: .28rem;*/
    /*    height: 100%;*/
    /*    font-size: .28rem;*/
    /*    padding: 0;*/
    /*}*/

    /*!*删除按钮*!*/
    /*.box-search .delete {*/
    /*    display: inline-block;*/
    /*    position: absolute;*/
    /*    right: .2rem;*/
    /*    font-size: .4rem;*/
    /*    color: #999;*/
    /*    vertical-align: middle;*/
    /*    font-style: normal;*/
    /*    height: .8rem;*/
    /*    line-height: .8rem;*/
    /*}*/

    /*!*搜索按钮*!*/
    /*.btn {*/
    /*    border: 0;*/
    /*    position: absolute;*/
    /*    right: 0.2rem;*/
    /*    top: 0;*/
    /*    width: 1.2rem;*/
    /*    height: 100%;*/
    /*    color: #333;*/
    /*    background: #fff;*/
    /*    font-weight: 700;*/
    /*    border-radius: .06rem;*/
    /*    font-size: .32rem;*/
    /*    cursor: pointer;*/
    /*}*/
    /*!*输入关键词 下拉列表*!*/
    /*.search-suggestion{*/
    /*    background-color: #fff;*/
    /*    border-top: 1px solid #ccc;*/
    /*}*/
    /*.list-item {*/
    /*    height: 0.8rem;*/
    /*    line-height: 0.8rem;*/
    /*    padding: 0 0.28rem;*/
    /*    border-bottom:.1px solid #ccc;*/
    /*    color: #999999;*/
    /*}*/
    /*.list-item>.search-suggestion-item {*/
    /*    display: flex;*/
    /*    list-style: none;*/
    /*    color: #666;*/
    /*    position:relative;*/
    /*    font-size: .28rem;*/
    /*    height: 100%;*/
    /*    text-decoration: none;*/
    /*    outline: 0;*/
    /*    justify-content: space-between;*/
    /*}*/
    /*.item-search {*/
    /*    display: block;*/
    /*    margin-right: 2rem;*/
    /*}*/
    /*.item-search>i:nth-of-type(1){*/
    /*    display: inline-block;*/
    /*    margin-right: 0.14rem;*/
    /*    font-size:.3rem;*/
    /*}*/
    /*.item-search > .match-word {*/
    /*    color: #ccc;*/
    /*}*/
    /*.result-count {*/

    /*}*/

</style>
