import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navCurrent: 1
  },
  mutations: {
    setNavCurrent(state, i) {
      state.navCurrent = i
    }
  },
  getters: {
    
  },
  actions: {},
  modules: {}
})
// 