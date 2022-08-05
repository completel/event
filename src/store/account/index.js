const state = {
    // 保存用户信息在vuex中
    account: {},
};

const mutations = {
    ACCOUNTS(state, data) {
        state.account = data;
    }
};

const actions = {
    accounts({ commit }, data) {
        commit("ACCOUNTS", data);
    }
};

const getters = {};


export default {
    state,
    mutations,
    actions,
    getters
}