<template>
    <div class="wraper">
        <div class="tou">
            <span></span>
            <span class="zhan">账号</span>
            <span><img src="../img/icon_5ks603f1ie/yinleliebiao.png" alt="" class="touicon"></span>
        </div>
        <div class="container"> 
            <div class="user">
            <div class="one">
                <img src="../img/354572-106.jpg" alt="" class="userimg">
                <p>
                    <span>张晓宇_</span>
                    <span class="ji">Lv.6</span>
                </p>
            </div>
            <p class="qian">签到</p>
        </div>
        <div class="userinit">
            <ul class="useri">
                <li>
                    <span>动态</span>
                    <span>1</span>
                </li>
                <li>
                    <span>关注</span>
                    <span>3</span>
                </li>
                <li>
                    <span>粉丝</span>
                    <span>1</span>
                </li>
                <li>
                    <span>编辑</span>
                    <span>我的资料</span>
                </li>
            </ul>
        </div>

        <div class="userlist">
            <div class="mexin">
                <p class="once">
                    <img src="../img/icon_u7l64u0d7r/pengyou.png" alt="" class="zuo">
                    <span>我的消息</span>
                </p>
                <img src="../img/iconfontyoujiantou-copy-copy-copy-copy.png" alt="" class="you">
            </div>
            
            <ul class="huiyuan">
                <li>
                    <p class="once" @click="gohy">
                        <img src="../img/icon_u7l64u0d7r/pengyou.png" alt="" class="zuo">
                        <span>会员中心</span>
                    </p>
                    <img src="../img/iconfontyoujiantou-copy-copy-copy-copy.png" alt="" class="you">
                </li>
                <li>
                    <p class="once">
                        <img src="../img/icon_u7l64u0d7r/pengyou.png" alt="" class="zuo">
                        <span>商城</span>
                    </p>
                    <img src="../img/iconfontyoujiantou-copy-copy-copy-copy.png" alt="" class="you">
                </li>
                <li>
                    <p class="once">
                        <img src="../img/icon_u7l64u0d7r/pengyou.png" alt="" class="zuo">
                        <span>游戏推荐:明日之后</span>
                    </p>
                    <img src="../img/iconfontyoujiantou-copy-copy-copy-copy.png" alt="" class="you">
                </li>
                <li>
                    <p class="once">
                        <img src="../img/icon_u7l64u0d7r/pengyou.png" alt="" class="zuo">
                        <span>在线听歌免流量</span>
                    </p>
                    <img src="../img/iconfontyoujiantou-copy-copy-copy-copy.png" alt="" class="you">
                </li>
            </ul>

            <ul class="she">
                <li>
                    <p class="once">
                        <img src="../img/icon_u7l64u0d7r/pengyou.png" alt="" class="zuo">
                        <span>设置</span>
                    </p>
                    <img src="../img/iconfontyoujiantou-copy-copy-copy-copy.png" alt="" class="you">
                </li>
                <li>
                    <p class="once">
                        <img src="../img/icon_u7l64u0d7r/pengyou.png" alt="" class="zuo">
                        <span>扫一扫</span>
                    </p>
                    <img src="../img/iconfontyoujiantou-copy-copy-copy-copy.png" alt="" class="you">
                </li>
                <li>
                    <p class="once">
                        <img src="../img/icon_u7l64u0d7r/pengyou.png" alt="" class="zuo">
                        <span>个性换肤</span>
                    </p>
                    <img src="../img/iconfontyoujiantou-copy-copy-copy-copy.png" alt="" class="you">
                </li>
                <li>
                    <p class="once">
                        <img src="../img/icon_u7l64u0d7r/pengyou.png" alt="" class="zuo">
                        <span>夜间模式</span>
                    </p>
                    <img src="../img/iconfontyoujiantou-copy-copy-copy-copy.png" alt="" class="you">
                </li>
            </ul>
        </div>
        </div>
        
    </div>
</template>

<script>
import './scss/zhanhao.css'
export default {
    methods:{
        gohy(){
            this.$router.push('/hy')
        }
    }
}
</script>

<style>

</style>
