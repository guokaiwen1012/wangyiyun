<template>
<div class="wraps">
        <ul class="head">
            <li>订单提交</li>
            <li class="active">填写收货地址</li>
            <li>正在办理</li>
            <li>办理完成</li>
        </ul>
        <div class="content">
            <div class="line">
                收货地址
            </div>
            <ul class="address">
                <li>
                    <span>联系省市</span>
                    <p>请填写收货地址</p>
                </li>
                <li>
                    <span>详细地址</span>
                </li>
                <li>
                    <span>联系电话</span>
                    <p>请输入联系电话</p>
                </li>
                <li>
                    <span>联系人</span>
                    <p>请输入联系人</p>
                </li>
            </ul>
            <div @click="share">
                微信分享
            </div>
            <div>
            <!-- accept设置为*号会在客户端上卡顿，最好用逗号连接 -->
            <input type="file" accept="image/png,image/jpg,image/jpeg,image/gif" @change="uploadFile">
            上传图片
            </div>

            <canvas id="canvas"></canvas>
        </div>
        <div class="foot">
            确认
        </div>
        
        <img src="../assets/cc-icon.png" alt="" class="kf">
        <img src="../assets/ee-icon.png" alt="" class="money">

        <!-- <van-popup v-model="showCost" position="bottom">
        <van-picker :columns="costColumns" show-toolbar title="选择补换城市"
          ref="costPicker"  @cancel="oncancel" @confirm="costConfirm" @change="costChange"/>
        </van-popup> -->

        
    </div>
</template>

<script>
import {doShare,uploadBase64} from '@/api/index';
export default {
    
    methods:{
        share(){
    // 分享到朋友圈
        window['CHELUN_SHARE_DATA_WXTIMELINE'] = {
            title: '分享一张大图',
            imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546919478716&di=b8a7d34022e91d86cd0d31fc9d6ec346&imgtype=0&src=http%3A%2F%2Fimg0.pclady.com.cn%2Fpclady%2F1606%2F30%2F1536947_14.jpg',
            type: 'photo'
        },
    // 分享到会话
    window['CHELUN_SHARE_DATA_WXMESSAGE'] = {
      title: '五年工作经验，一年模拟',
      desc: '微信分享秘籍',
      link: 'https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317332&token=&lang=zh_CN',
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546919682884&di=4dceaceab6cc8f5763a9a4e384b54843&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2017%2F04%2F30%2F149348371823762056.JPEG'
    },
    doShare();
        },
    uploadFile(e){
      console.log('file...', e.target.files[0].size);
      let file = e.target.files[0];
      // 先判断图片是否过大
      if (file.size > 30*1024){
        // 转成base64
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = res=>{
          console.log('res.result...', res.target.result);
          let img = new Image();
          img.src = res.target.result;
          img.onload = async ()=>{
            // 创建canvas进行压缩
            let canvas = document.getElementById('canvas');
            let context = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            // 第一种压缩，压缩画布大小
            context.drawImage(img, 0,0,img.width, img.height, 0,0, img.width, img.height);
            let base64 = canvas.toDataURL();
            let res = await uploadBase64(base64);
            console.log('res...', res);
            // 第二种压缩，压缩图片质量
            let base65 = canvas.toDataURL('image/jpeg', 0.1);
            let res2 = await uploadBase64(base65);
            console.log('res2...', res2);
          }
        }
      }
    }
    }
}
</script>

<style lang="scss">
#canvas{
    width: 100%;
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 12px;
    box-sizing: border-box;
}
.wraps{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #eee;
    color:#696969;
}

.head{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:#57A7DC;
    background: #fff;
    li{
        flex:1;
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size:14px;
        &.active{
            background: #3AAFFE;
            color:#fff;
        }
    }
}

.content {
    width: 100%;
    flex:1;
    overflow: auto;
}

.line{
    width: 100%;
    height: 44px;
    text-align: center;
    line-height: 44px;
}

.address{
    width: 100%;
    background: #fff;
    padding-left:10px;
    li{
        width: 100%;
        height: 44px;
        line-height: 44px;
        border-bottom:solid 1px #ccc;
        padding-right: 10px;
        display: flex;
        justify-content: space-between;
        &:last-child{
            border-bottom:0;
        }
    }
}

.foot{
    width: 100%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    background: #999;
    color:#fff;
}

.kf{
    position: fixed;
    right: 10px;
    bottom: 60px;
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 40px;
}
.money{
    position: fixed;
    right: 10px;
    bottom: 120px;
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 40px;
}
</style>
