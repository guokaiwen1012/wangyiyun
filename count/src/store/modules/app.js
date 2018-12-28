const state = {
    num: 1000
}

const mutations = {
    changeNum(state, { payload }) {
        state.num = payload == "+" ? state.num + 1 : state.num - 1
    }
}

const getters = {
    date(state) {
        let date = new Date();
        let year = date.getFullYear(),
            month = (date.getMonth() + 1).toString().padStart(2, '0'),
            day = date.getDate().toString().padStart(2, '0'),
            hour = date.getHours().toString().padStart(2, '0'),
            min = date.getMinutes().toString().padStart(2, '0'),
            sec = date.getSeconds().toString().padStart(2, '0');
        return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
    }
}

const actions = {
    changeNumAsync({ commit }, action) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit("changeNum", action)
                resolve()
            }, 1000)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}