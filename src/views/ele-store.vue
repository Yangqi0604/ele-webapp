<template>
    <div>
        <div class="elestore-head">
            <div class="estoreHead-top">
                <i class="fa  fa-angle-left fa-lg"></i>
                <div>
                    <p>品牌</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .estoreHead-top{
        background-image: url(https://fuss10.elemecdn.com/a/c1/ead69c6a1e0c515aa9cdbd6314eccpng.png?imageMogr/format/webp/thumbnail/750x/);
        background-size: cover;
        background-repeat: no-repeat;
        height:6.25rem;
        width:100%;
        position: relative;
    }
    .estoreHead-top i{
        color: white;
        font-size:2.12125rem;
        padding-left: .7rem;
        font-weight:300;
    }
    .estoreHead-top div{
    width: 5rem;
    height: 5rem;
    background-image: url(https://fuss10.elemecdn.com/7/51/214c1949dc059732ac12ea7d9ce8bpng.png?imageMogr/format/webp/thumbnail/150x/);
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 39%;
    left: 38%;
    }
    .estoreHead-top div p{
    color: #6f3f15;
    font-weight: 700;
    font-size: .48rem!important;
    background-image: linear-gradient(90deg,#fff100,#ffe339);
    }    
</style>