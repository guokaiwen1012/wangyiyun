<template>
    <div id="wrap">
    <div class="wraper">

    <div class="header">
        <img src="../img/icon_32r6q408sh5/right.png" alt="" class="">
        <h1>补换驾照</h1>
        <img src="../img/icon_32r6q408sh5/diandian.png" alt="">
    </div>
    
    <div class="con">
      
    <div class="nav">
          <span><strong class="active">提交订单</strong><i class="active"></i></span>
          <span><strong>填写收货地址</strong><i></i></span>
          <span><strong>正在办理</strong><i></i></span>
          <span>办理完成</span>
    </div>

    <div class="banner">
        <img src="../img/images/1_02.gif" alt="">
    </div>

    <Upload />
    
      <div class="toplist">
        <ol>
          <li>
            <span>服务类型</span>
            <span>换驾照 <img src="../img/icon_32r6q408sh5/iconfontyoujiantou-copy-copy-copy-copy.png" alt=""></span>
          </li>
          <li>
            <span>当前驾照签发城市<em>?</em></span>
            <span>请选择签发地</span>
          </li>
          <li>
            <span>可补换签发城市<em>?</em></span>
            <span>请选择补换地</span>
          </li>
          <li>
            <span>服务费</span>
            <span class="price">￥399</span>
          </li>
        </ol>
      </div>

      <div class="bottomlist">
        <ol>
          <li>
            <span>优惠</span>
            <span>登录后查看优惠券 <img src="../img/icon_32r6q408sh5/iconfontyoujiantou-copy-copy-copy-copy.png" alt=""></span>
          </li>
        </ol>
      </div>

      <div class="question">
        <span>常见问题?</span>
      </div>
      </div>
      
      <div class="kefu">
        <img src="../img/images/kefu_05.gif" alt="">
      </div>
      
      <div class="footer">
        <span>实付:<em>￥399</em></span>
        <span class="btn">立即支付</span>
      </div>

    </div>
    </div>
</template>

<script>
import Upload from '@/components/Upload';
export default {
    components:{
        Upload
    }
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 12px;
  }
  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #wrap {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    .wraper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #eeeeee
    }
}

.header {
    width: 100%;
    height: 44px;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    background: #fff;
    img {
        width: 25px;
        height: 25px;
    }
    h1 {
        font-weight: 600;
        font-size: 18px;
    }
}

.con{
  width: 100%;
  flex: 1;
  overflow-y: auto;
}
.nav {
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
    background: #fff; 
    span {
        width: 25%;
        height: 50px;
        color: skyblue;
        position: relative;
        overflow: hidden;
        i{
          display: inline-block;
          border-top: 1px solid;
          border-right: 1px solid;
          width: 34px;
          height: 34px;
          border-color: #ccc;
          transform: rotate(45deg);
          position: absolute;
          right: 10px;
          top: 6px;
          z-index: 0;
        }
        strong{
          width: 70%;
          height: 100%;
          display: inline-block;
          margin-right: 28px;
          position: relative;
          z-index: 999;
        }
    }
    span:nth-child(4) {
        border: none;
    }
}

strong.active,i.active{
    color: #fff;
    background: skyblue;
}

.banner {
    width: 100%;
    height: 20%;
    img {
        width: 100%;
        height: 100%;
    }
}



.toplist {
    width: 100%;
    margin: 10px 0;
    background: #fff;
    ol {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        box-sizing: border-box;
        li {
            width: 100%;
            padding: 10px 0;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
            span {
                display: flex;
                align-items: center;
                img {
                    width: 25px;
                    height: 25px;
                }
                em {
                    width: 15px;
                    height: 15px;
                    margin-left: 6px;
                    background: #ccc;
                    color: #fff;
                    border-radius: 100%;
                    font-style: normal;
                }
            }
            span.price{
              color: red;
            }
        }
        li:nth-child(4){
          border: none;
        }
    }
}

.bottomlist{
   width: 100%;
    margin: 10px 0;
    background: #fff;
    ol {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        box-sizing: border-box;
        li {
            width: 100%;
            padding: 10px 0;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
            span {
                display: flex;
                align-items: center;
                img {
                    width: 25px;
                    height: 25px;
                }
            }
        }
    }
}

.question{
  width: 100%;
  span{
    color: blue;
    border-bottom: 1px solid blue;
  }
}

.kefu{
  width: 50px;
  height: 50px;
  position: fixed;
  right: 15px;
  bottom:50px;
  img{
    width: 100%;
    height: 100%;
  }
}

.footer{
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left:10px;
  box-sizing: border-box;
  span{
    em{
      color:red;
      margin-left: 5px;
      font-style: normal;
    }
  }
  span.btn{
    height: 100%;
    background: rgb(121, 121, 121);
    color: #fff;
    padding: 10px 10px;
    box-sizing: border-box;
  }
}
</style>
