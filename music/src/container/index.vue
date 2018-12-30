<template>
    <div class="wrap">
        <div class="con">
            <div class="logo">
             <img src="../img/wangyiyunyinle.png" alt="">
            </div>
            <div class="btn">
                <router-link class="phonelogin" to="/phone">手机号登录</router-link>
                <button class="zuce">注册</button>
                <button class="shi">游客试用</button>
            </div>
        </div>
        
        <div class="footer">
            <p>其他登录方式</p>
            <ul>
                <li>
                    <img src="../img/weixin.png" alt="">
                    <p>微信</p>
                </li>
                <li>
                    <img src="../img/qq.png" alt="">
                    <p>QQ</p>
                </li>
                <li>
                    <img src="../img/wangyi.png" alt="">
                    <p>微博</p>
                </li>
                <li>
                    <img src="../img/5.png" alt="">
                    <p>网易邮箱</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import './scss/style.css';
import './flexible';
export default {

}
</script>

<style>

</style>
