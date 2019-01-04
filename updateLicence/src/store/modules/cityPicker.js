import { cityList, costList } from '@/api/index';

const state = {
    //签发城市列表
    cityList: [],
    //可补换城市列表
    costList: [],
    //选择的签发城市
    city: [],
    //选择的补换城市
    cost: [],
    //服务费
    price: []
}

const mutations = {
    updateState(state, action) {
        state = Object.assign(state, action);
        console.log(state)
    }
}

const actions = {
    //获取签发城市列表
    async getCityList({ commit }) {
        let res = await cityList();
        res.data.forEach(item => {
            item.list.forEach(item => {
                item.list.forEach(value => {
                    delete value.list;
                })
            })
        })
        commit('updateState', { cityList: res.data })
    },

    //获取可补换的城市列表
    async getCostList({ commit, state }, action) {
        let proIndex = state.cityList.findIndex(item => item.name == state.city[0]),
            cityIndex = state.cityList[proIndex].list.findIndex(item => item.name == state.city[1]);
        let res = await costList(1, state.cityList[proIndex].id, state.cityList[proIndex].list[cityIndex].id);
        console.log('res...', res.data);
        commit('updateState', { costList: res.data })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}