import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//types  //显示类型
const types = {
  SET_LOCATION: "SET_LOCATION",
  SET_ADDRESS: "SET_ADDRESS",
  SET_CHANGE: "SET_CHANGE"
}

//state 状态
const state = {
  location: {},
  address: "",
  flag: true
}

//getters
const getters = {
  location: state => state.location,
  address: state => state.address,
  // change: state => state.change
}

//mutations
const mutations = {
  [types.SET_LOCATION](state, location) {
    if (location) {
      state.location = location;
    } else {
      state.location = null;
    }
  },
  [types.SET_ADDRESS](state, address) {
    if (address) {
      state.address = address;
    } else {
      state.address = "";
    }
  },
  changeclick: state => {
    state.flag = !state.flag;
  }
}


//action
const actions = {
  setLocation: ({
    commit
  }, location) => {
    commit(types.SET_LOCATION, location);
  },
  setAddress: ({
    commit
  }, address) => {
    commit(types.SET_ADDRESS, address);
  },
  setchange: ({
    commit
  }, flag) => {
    commit(types.SET_CHANGE, flag);
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})