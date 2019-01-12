<template>
    <div class="header">
        <img src="https://h5.sinaimg.cn/upload/696/2017/08/23/weibologo.png" alt="" class="logo">
        <div class="inp">
            <img src="../assets/11.png" alt="">
            <input type="text" placeholder="大家都在搜: #杨天真公关能力#">
        </div>
        <img src="../assets/shenhebijijishibenxiezi.png" alt="" class="biji">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        .logo{
            width: 30px;
            height: 30px;
        }
        .biji{
            width: 30px;
            height: 30px;
        }
        .inp{
            background: #ccc;
            display: flex;
            align-items: center;
            width: 70%;
            img{
                width: 25px;
                height: 25px;
                color: #fff;
                margin: 0 10px;
                box-sizing: border-box;
            }
            input{
                border: none;
                background: #ccc;
                flex: 1;
            }
        }
    }
</style>
