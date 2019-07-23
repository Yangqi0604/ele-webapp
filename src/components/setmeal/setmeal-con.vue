<template>
    <div class="setmeal-con">
        <div class="setmeal-ju"></div>
        <div class="setmeal-pad"  v-for="item in list" >
            <div class="setmeal-con-one">
                <div class="one-left">
                    <img :src="item.pic" alt="">
                </div>
                <div class="one-right">
                    <h1>{{item.dian}}
                        <span class="pin">
                            <span>评分{{item.pin}}丨</span>
                            <span>月售{{item.yue}}</span>
                        </span>
                    </h1>
                    <ul class="one-right-small">
                        <li>{{item.header}}</li>
                    </ul>
                </div>
            </div>
            <div class="kong"></div>
            <div class="setmeal-con-two">
                <ul class="two-samll">
                    <li> 
                        <img :src="item.pic1" alt="">
                        <div class="two-samll-right">
                            <h1>{{item.tiao}}</h1>
                            <div class="two-samll-rightzi">{{item.xin}}</div>
                            <div class="li-pic">
                                <p>￥{{item.pice}}
                                    <del>
                                        ￥{{item.oldpic}}
                                    </del>
                                </p>
                                <img :src="item.pic2" alt="">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="setmeal-con-three">
                <div class="three-more">
                    <p>{{item.more}}<i :class="'fa fa-'+item.icon" aria-hidden="true"></i></p>
                </div>
            </div>
        </div>
        
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
                    {pic:"https://fuss10.elemecdn.com/4/3f/6cf2451ec69f0bb7b23961b6d4379png.png?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/",
                    dian:"贡茶(幽都T11店)",
                    pin:"4.7",
                    yue:"1030",
                    header:"回头客多",
                    pic1:"https://fuss10.elemecdn.com/c/f2/9700ff1ce44879ee3b3a54a0ae54cjpeg.jpeg?imageMogr/format/webp/thumbnail/!218x218r/gravity/Center/crop/218x218/",
                    tiao:"跳跳奶盖草莓",
                    xin:"新鲜草莓，加原味奶盖，奶盖上加跳跳糖",
                    pice:"20.8",
                    oldpic:"24",
                    pic2:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzI3IDE4LjA5VjkuOTk1QTEgMSAwIDAgMCAyMC43MzQgOWgtMS42NWEuOTk1Ljk5NSAwIDAgMC0uOTkzLjk5NHY4LjA5N0g5Ljk5NGExIDEgMCAwIDAtLjk5NC45OTR2MS42NDljMCAuNTQ3LjQ0NS45OTMuOTk0Ljk5M2g4LjA5N3Y4LjA5N2ExIDEgMCAwIDAgLjk5NC45OTRoMS42NDlhLjk5NS45OTUgMCAwIDAgLjk5My0uOTk0di04LjA5N2g4LjA5N2ExIDEgMCAwIDAgLjk5NC0uOTkzdi0xLjY1YS45OTUuOTk1IDAgMCAwLS45OTQtLjk5M2gtOC4wOTd6TTIwIDQwQzguOTU0IDQwIDAgMzEuMDQ2IDAgMjBTOC45NTQgMCAyMCAwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIweiIvPjwvc3ZnPg==",
                    more:"展开更多套餐1个",
                    icon:"angle-down"
                    },
                    {pic:"https://fuss10.elemecdn.com/0/0c/87f2ffcfc36727ff6098fbee90949jpeg.jpeg?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/",
                    dian:"吉满杯(鱼化寨地铁口)",
                    pin:"4.7",
                    yue:"330",
                    header:"回头客多",
                    pic1:"https://fuss10.elemecdn.com/b/48/3fef358d60515bdd352e98355d893jpeg.jpeg?imageMogr/format/webp/thumbnail/!218x218r/gravity/Center/crop/218x218/",
                    tiao:"蜂蜜鲜百香双Q",
                    xin:"天然龙眼搭配鲜百香原汁，搭配Q弹珍珠与椰果，双Q口感超丰富",
                    pice:"16",
                    oldpic:"16",
                    pic2:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzI3IDE4LjA5VjkuOTk1QTEgMSAwIDAgMCAyMC43MzQgOWgtMS42NWEuOTk1Ljk5NSAwIDAgMC0uOTkzLjk5NHY4LjA5N0g5Ljk5NGExIDEgMCAwIDAtLjk5NC45OTR2MS42NDljMCAuNTQ3LjQ0NS45OTMuOTk0Ljk5M2g4LjA5N3Y4LjA5N2ExIDEgMCAwIDAgLjk5NC45OTRoMS42NDlhLjk5NS45OTUgMCAwIDAgLjk5My0uOTk0di04LjA5N2g4LjA5N2ExIDEgMCAwIDAgLjk5NC0uOTkzdi0xLjY1YS45OTUuOTk1IDAgMCAwLS45OTQtLjk5M2gtOC4wOTd6TTIwIDQwQzguOTU0IDQwIDAgMzEuMDQ2IDAgMjBTOC45NTQgMCAyMCAwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIweiIvPjwvc3ZnPg==",
                    },
                    {pic:"https://fuss10.elemecdn.com/6/f5/32234233aaa4023d1dda7c9fd528apng.png?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/",
                    dian:"港岛记*香港叉饭",
                    pin:"4.6",
                    yue:"1030",
                    header:"回头客多",
                    pic1:"https://fuss10.elemecdn.com/f/de/4521d90f1de8ecccb91ed7f5a5bb3jpeg.jpeg?imageMogr/format/webp/thumbnail/!218x218r/gravity/Center/crop/218x218/",
                    tiao:"跳跳奶盖草莓",
                    xin:"新鲜草莓，加原味奶盖，奶盖上加跳跳糖",
                    pice:"25.9",
                    oldpic:"46.5",
                    pic2:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzI3IDE4LjA5VjkuOTk1QTEgMSAwIDAgMCAyMC43MzQgOWgtMS42NWEuOTk1Ljk5NSAwIDAgMC0uOTkzLjk5NHY4LjA5N0g5Ljk5NGExIDEgMCAwIDAtLjk5NC45OTR2MS42NDljMCAuNTQ3LjQ0NS45OTMuOTk0Ljk5M2g4LjA5N3Y4LjA5N2ExIDEgMCAwIDAgLjk5NC45OTRoMS42NDlhLjk5NS45OTUgMCAwIDAgLjk5My0uOTk0di04LjA5N2g4LjA5N2ExIDEgMCAwIDAgLjk5NC0uOTkzdi0xLjY1YS45OTUuOTk1IDAgMCAwLS45OTQtLjk5M2gtOC4wOTd6TTIwIDQwQzguOTU0IDQwIDAgMzEuMDQ2IDAgMjBTOC45NTQgMCAyMCAwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIweiIvPjwvc3ZnPg==",
                    more:"展开更多套餐2个",
                    icon:"angle-down"
                    },
                    {pic:"https://fuss10.elemecdn.com/f/ee/ab5d1a3de4e8ea173d928d2847c92jpeg.jpeg?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/",
                    dian:"皇家慕斯西饼屋蛋糕房",
                    pin:"4.7",
                    yue:"1030",
                    header:"回头客多",
                    pic1:"https://fuss10.elemecdn.com/8/b5/4f316206aa71dd22da9e751910b65jpeg.jpeg?imageMogr/format/webp/thumbnail/!218x218r/gravity/Center/crop/218x218/",
                    tiao:"跳跳奶盖草莓",
                    xin:"新鲜草莓，加原味奶盖，奶盖上加跳跳糖",
                    pice:"20.8",
                    oldpic:"24",
                    pic2:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzI3IDE4LjA5VjkuOTk1QTEgMSAwIDAgMCAyMC43MzQgOWgtMS42NWEuOTk1Ljk5NSAwIDAgMC0uOTkzLjk5NHY4LjA5N0g5Ljk5NGExIDEgMCAwIDAtLjk5NC45OTR2MS42NDljMCAuNTQ3LjQ0NS45OTMuOTk0Ljk5M2g4LjA5N3Y4LjA5N2ExIDEgMCAwIDAgLjk5NC45OTRoMS42NDlhLjk5NS45OTUgMCAwIDAgLjk5My0uOTk0di04LjA5N2g4LjA5N2ExIDEgMCAwIDAgLjk5NC0uOTkzdi0xLjY1YS45OTUuOTk1IDAgMCAwLS45OTQtLjk5M2gtOC4wOTd6TTIwIDQwQzguOTU0IDQwIDAgMzEuMDQ2IDAgMjBTOC45NTQgMCAyMCAwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIweiIvPjwvc3ZnPg==",
                    more:"展开更多套餐1个",
                    icon:"angle-down"
                    },
                    {pic:"https://fuss10.elemecdn.com/f/2b/da2392ae9cc0cf2d1bde3ec0ac59fpng.png?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/",
                    dian:"贡茶(幽都T11店)",
                    pin:"4.7",
                    yue:"1030",
                    header:"回头客多",
                    pic1:"https://fuss10.elemecdn.com/7/63/0ebe5359d7bebd6be35bdf1e299f2jpeg.jpeg?imageMogr/format/webp/thumbnail/!218x218r/gravity/Center/crop/218x218/",
                    tiao:"跳跳奶盖草莓",
                    xin:"新鲜草莓，加原味奶盖，奶盖上加跳跳糖",
                    pice:"36.9",
                    oldpic:"48",
                    pic2:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzI3IDE4LjA5VjkuOTk1QTEgMSAwIDAgMCAyMC43MzQgOWgtMS42NWEuOTk1Ljk5NSAwIDAgMC0uOTkzLjk5NHY4LjA5N0g5Ljk5NGExIDEgMCAwIDAtLjk5NC45OTR2MS42NDljMCAuNTQ3LjQ0NS45OTMuOTk0Ljk5M2g4LjA5N3Y4LjA5N2ExIDEgMCAwIDAgLjk5NC45OTRoMS42NDlhLjk5NS45OTUgMCAwIDAgLjk5My0uOTk0di04LjA5N2g4LjA5N2ExIDEgMCAwIDAgLjk5NC0uOTkzdi0xLjY1YS45OTUuOTk1IDAgMCAwLS45OTQtLjk5M2gtOC4wOTd6TTIwIDQwQzguOTU0IDQwIDAgMzEuMDQ2IDAgMjBTOC45NTQgMCAyMCAwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIweiIvPjwvc3ZnPg==",
                    },
                    {pic:"https://fuss10.elemecdn.com/f/c0/5c56e03c833314fdd073d168a5f16png.png?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/",
                    dian:"贡茶(幽都T11店)",
                    pin:"4.7",
                    yue:"1030",
                    header:"回头客多",
                    pic1:"https://fuss10.elemecdn.com/c/ca/3274cb3981bbe349233efcea374bejpeg.jpeg?imageMogr/format/webp/thumbnail/!218x218r/gravity/Center/crop/218x218/",
                    tiao:"跳跳奶盖草莓",
                    xin:"新鲜草莓，加原味奶盖，奶盖上加跳跳糖",
                    pice:"20.8",
                    oldpic:"24",
                    pic2:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNzI3IDE4LjA5VjkuOTk1QTEgMSAwIDAgMCAyMC43MzQgOWgtMS42NWEuOTk1Ljk5NSAwIDAgMC0uOTkzLjk5NHY4LjA5N0g5Ljk5NGExIDEgMCAwIDAtLjk5NC45OTR2MS42NDljMCAuNTQ3LjQ0NS45OTMuOTk0Ljk5M2g4LjA5N3Y4LjA5N2ExIDEgMCAwIDAgLjk5NC45OTRoMS42NDlhLjk5NS45OTUgMCAwIDAgLjk5My0uOTk0di04LjA5N2g4LjA5N2ExIDEgMCAwIDAgLjk5NC0uOTkzdi0xLjY1YS45OTUuOTk1IDAgMCAwLS45OTQtLjk5M2gtOC4wOTd6TTIwIDQwQzguOTU0IDQwIDAgMzEuMDQ2IDAgMjBTOC45NTQgMCAyMCAwczIwIDguOTU0IDIwIDIwLTguOTU0IDIwLTIwIDIweiIvPjwvc3ZnPg==",
                    more:"展开更多套餐1个",
                    icon:"angle-down"
                    },
                ],
                
                

        
            }
    }
};
</script>

<style lang="scss" scoped>
.setmeal-con{
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #aaa;
}
.setmeal-con .setmeal-ju{
    height: 2.6rem;
}
.setmeal-con .setmeal-pad{
    width: 96%;
    height: 16rem;
    background-color: #fff;
    margin: 0 auto;
}


.setmeal-con .setmeal-pad .kong{
    height: .5rem;
}

.setmeal-con .setmeal-pad .setmeal-con-one{
    height: 3rem;
    width: 100%;
    display: flex;
    padding: .5rem 0;
}
.setmeal-con .setmeal-pad .setmeal-con-one .one-left{
    height: 100%;
    width: 15%;
    margin-right: .4rem;
}
.setmeal-con .setmeal-pad .setmeal-con-one .one-left img{
    height: 100%;
    width: 99%;
    border:1px solid #999;
}
.setmeal-con .setmeal-pad .setmeal-con-one .one-right{
    height: 100%;
    width: 85%;
}
.setmeal-con .setmeal-pad .setmeal-con-one .one-right h1{
    font-size: 1.1rem;
    color:#666;
    display: flex;
    justify-content: space-between;
}
.setmeal-con .setmeal-pad .setmeal-con-one .one-right h1 .pin{
    font-size: .7rem;
    color:#aaa;
}
.setmeal-con .setmeal-pad .setmeal-con-one .one-right .one-right-small{
    color: #a45b1c;
    margin-top: .6rem;
}
.setmeal-con .setmeal-pad .setmeal-con-one .one-right .one-right-small li{
    height: 1.2rem;
    border:1px solid #a45b1c;
    line-height: 1.2rem;
    width: 4rem;
    padding: 0 0 0 .4rem;
}


.setmeal-con .setmeal-pad .setmeal-con-two{
    height: 7rem;
    width: 100%;
}
.setmeal-con .setmeal-pad .setmeal-con-two .two-samll{
    width: 100%;
    height: 100%;
}
.setmeal-con .setmeal-pad .setmeal-con-two .two-samll li{
    width: 100%;
    height: 100%;
    display: flex;
}
.setmeal-con .setmeal-pad .setmeal-con-two .two-samll li img{
    width: 30%;
    height: 100%;
    border:0.5px solid rgba(0,0,0,.05);
    background-color: #fff;
}
.setmeal-con .setmeal-pad .setmeal-con-two .two-samll li .two-samll-right{
    width: 70%;
    height: 100%;
    margin-left: .4rem;
}
.setmeal-con .setmeal-pad .setmeal-con-two .two-samll li .two-samll-right > h1{
    font-size: 1.1rem;
    color: #333;
}
.setmeal-con .setmeal-pad .setmeal-con-two .two-samll li .two-samll-right .two-samll-rightzi{
    font-size: .75rem;
    color: #999;
    height: 3rem;
    line-height: 2rem;
}
.setmeal-con .setmeal-pad .setmeal-con-two .two-samll li .two-samll-right .li-pic{
    height: 2rem;
    width: 100%;
    margin-top: .9rem;
    display: flex;
    line-height: 2rem;
    justify-content: space-between;
}
.setmeal-con .setmeal-pad .setmeal-con-two .two-samll li .two-samll-right .li-pic p{
    font-size: 1.2rem;
    color: #b91f20;
}
.setmeal-con .setmeal-pad .setmeal-con-two .two-samll li .two-samll-right .li-pic del{
    font-size: .8rem;
    color: #666;
}
.setmeal-con .setmeal-pad .setmeal-con-two .two-samll li .two-samll-right .li-pic img{
    width: 1.6rem;
    height: 90%;
}
.setmeal-con .setmeal-pad .setmeal-con-three{
    height: 4rem;
    width: 100%;
}
.setmeal-con .setmeal-pad .setmeal-con-three .three-more{
    height: 100%;
    line-height: 4rem;
    text-align: center;
    color: #999;
}
.setmeal-con .setmeal-pad .setmeal-con-three .three-more i{
    margin-left: .4rem;
}
</style>
