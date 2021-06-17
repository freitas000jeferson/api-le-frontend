import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    auth
  },
  actions:{},
  state: {
    
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters:{}
})
export default store