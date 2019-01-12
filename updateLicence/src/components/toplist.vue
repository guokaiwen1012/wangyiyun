<template>
    <div class="toplist">
        <ol>
          <li @click="showRadio">
            <span>服务类型</span>
            <span>{{type}}<img src="../img/icon_32r6q408sh5/iconfontyoujiantou-copy-copy-copy-copy.png" alt=""></span>
          </li>
          <li @click="cityClick">
            <span>当前驾照签发城市<em>?</em></span>
            <span>{{city.join(' ')}}</span>
          </li>
          <li @click="costClick">
            <span>可补换签发城市<em>?</em></span>
            <span>{{cost.join(' ')}}</span>
          </li>
          <li>
            <span>服务费</span>
            <span class="price">￥{{price.slice(0,1).join('')}}</span>
          </li>
        </ol>
        
        <van-popup v-model="isShow" position="bottom" :overlay="true">
            <van-picker :columns="current" show-toolbar @cancel="oncancel" @confirm="onconfirm"/>
        </van-popup>

        <van-popup v-model="showCity" position="bottom">
        <van-picker :columns="cityColumns" show-toolbar title="选择签发城市"
          ref="cityPicker"  @cancel="oncancel" @confirm="cityConfirm" @change="cityChange"/>
        </van-popup>

        <van-popup v-model="showCost" position="bottom">
        <van-picker :columns="costColumns" show-toolbar title="选择补换城市"
          ref="costPicker"  @cancel="oncancel" @confirm="costConfirm" @change="costChange"/>
        </van-popup>

        <div class="bottom">
      <button id="cc">跳转客服</button>
      <a href="mailto:342690199@qq.com">打电话</a>
      </div>
      </div>
      
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';
export default {
    data(){
        return{
            //控制类型
            isShow:false,
            current:['换驾照','补驾照'],
            type:"换驾照",
            //控制当前驾照
            showCity:false,
            //控制补换驾照
            showCost:false,
            //多列表选择配置
            cityColumns:[],
            //补换列表配置
            costColumns:[]
        }
    },
    mounted(){
        //获取签发城市，然后更新选择配置
        this.getCityList().then(res=>{
            this.cityColumns=[
                {
                    values:this.cityList.map(item=>item.name)
                },
                {
                    values:this.cityList[0].list.map(item=>item.name)
                }
            ]
        })
        
    },
    computed:{
        ...mapState({
            cityList:state=>state.cityPicker.cityList,
            city:state=>state.cityPicker.city,
            costList:state=>state.cityPicker.costList,
            cost:state=>state.cityPicker.cost,
            price:state=>state.cityPicker.price
        })
    },
    methods:{
        ...mapActions({
            getCityList:'cityPicker/getCityList',
            getCostList: 'cityPicker/getCostList'
        }),
        ...mapMutations({
            updateState:'cityPicker/updateState'
        }),
        showRadio(){
            this.isShow=true;
        },
        oncancel(){
            this.isShow=false;
            this.showCity=false;
            this.showCost=false;
        },
        onconfirm(value){
            this.type=value;
            this.oncancel();
        },
        cityConfirm(value){
            //触发mutation更新城市数据
            this.updateState({city:value})
            this.oncancel();
        },
        cityClick(){
            this.showCity=true;
        },
        //当省份改变的时候更新城市数据
        cityChange(picker,values){
            //获取当前省份的下标
            let index = this.cityList.findIndex(item=>item.name == values[0]);
            //调用api更新城市数据
            this.$refs.cityPicker.setColumnValues(1,this.cityList[index].list.map(item=>item.name));
        },
        costClick(){
            if(!this.city.length){
                alert('请选择签发城市');
                return;
            }else{
                this.getCostList().then(res=>{
                    //获取补换城市，然后更新选择配置
                        this.costColumns=[
                            {
                                values:this.costList.map(item=>item.name)
                            },
                            {
                                values:this.costList[0].list.map(item=>item.name)
                            }
                        ]
                })  
            }
            this.showCost=true;
        },
        costConfirm(value){
            this.updateState({cost:value});
            let index = this.costList.findIndex(item=>item.name == value[0]);
            let price = this.costList[index].list.map(item=>item.cost)
            console.log(index)
            console.log(price)
            this.updateState({price:price});
            this.oncancel();
        },
        costChange(picker,values){
            let index = this.costList.findIndex(item=>item.name == values[0]);
            //调用api更新城市数据
            this.$refs.costPicker.setColumnValues(1,this.costList[index].list.map(item=>item.name));
        }
    },
    

}
</script>

<style>

</style>
