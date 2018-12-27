<template>
    <div class="wrap">
        <div class="head">
            <div class="header">
                <img src="../img/icon_5ks603f1ie/huatong.png" alt="">
                <div class="inp">
                    <input type="text" placeholder="猜你喜欢 浮生">
                </div>
                <img src="../img/icon_5ks603f1ie/yinleliebiao.png" alt="">
            </div>
            <div class="tabTitle">
                <span @click="left">个性推荐</span>
                <span @click="right">主播电台</span>
            </div>
            
        </div>
        <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1113518.jpg?max_age=2592000" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1112264.jpg?max_age=2592000" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1111885.jpg?max_age=2592000" alt="">
                    </div>
                </div>
            </div>

            <div class="nav">
            <ul>
                <li>
                    <img src="../img/icon_5ks603f1ie/shouyinji.png" alt="">
                    <p>私人FM</p>
                </li>
                <li>
                    <img src="../img/icon_5ks603f1ie/shouyinji.png" alt="">
                    <p>私人FM</p>
                </li>
                <li>
                    <img src="../img/icon_5ks603f1ie/shouyinji.png" alt="">
                    <p>私人FM</p>
                </li>
                <li>
                    <img src="../img/icon_5ks603f1ie/shouyinji.png" alt="">
                    <p>私人FM</p>
                </li>
            </ul>
            </div>
        <div class="con">
            <div class="sing" v-show="flag">
                <h1>推荐歌单 ></h1>
                <ul>
                    <li v-for="(val,index) in list" :key="index">
                        <img :src="val.img" alt="">
                        <p>{{val.tit}}</p>
                    </li>
                </ul>
            </div>
            <div class="sings" v-show="!flag">
                123
            </div>
        </div>
        <div class="footer">
            <ul>
                <li>
                    <img src="../img/icon_u7l64u0d7r/wangyiyunyinle.png" alt="">
                    <span>发现</span>
                </li>
                <li>
                    <img src="../img/icon_u7l64u0d7r/bofang.png" alt="">
                    <span>视频</span>
                </li>
                <li>
                    <img src="../img/icon_u7l64u0d7r/yinyue.png" alt="">
                    <span>我的</span>
                </li>
                <li>
                    <img src="../img/icon_u7l64u0d7r/pengyou.png" alt="">
                    <span>朋友</span>
                </li>
                <li>
                    <img src="../img/icon_u7l64u0d7r/wode.png" alt="">
                    <span>账号</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import './scss/home.css';
import './flexible';
export default {
    data(){
        return {
            flag:true,
            list:[
                {
                    img:"https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000",
                    tit:"要做什么梦是每个人的自由"
                },
                {
                    img:"https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000",
                    tit:"要做什么梦是每个人的自由"
                },
                {
                    img:"https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000",
                    tit:"要做什么梦是每个人的自由"
                },
                {
                    img:"https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000",
                    tit:"要做什么梦是每个人的自由"
                },
                {
                    img:"https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000",
                    tit:"要做什么梦是每个人的自由"
                },
                {
                    img:"https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg?max_age=2592000",
                    tit:"要做什么梦是每个人的自由"
                }
            ]
        }
    },
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          loop:true
        })
      },
    methods: {
        left(){
            this.flag=!this.flag
        },
        right(){
            this.flag=!this.flag
        }
    },
}
</script>

<style>
    
</style>
