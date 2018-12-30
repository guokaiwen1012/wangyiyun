<template>
    <div class="wrap">
        <router-view></router-view>
        <div class="footer">
            <ul>
                <li @click="find">
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
                <li @click="zhanhao">
                    <img src="../img/icon_u7l64u0d7r/wode.png" alt="">
                    <span>账号</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import './scss/home.css';
import './flexible';
export default {
    methods: {
        find(){
            this.$router.push('/home/find')
        },
        zhanhao(){
            this.$router.push('/home/zhanhao')
        }
    },
}
</script>

<style>
    
</style>
