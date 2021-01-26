import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// const modulesFiles = require.context('./modules', false, /\.js$/)
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    a: {
      state: {
        name: 'ggggg'
      }
    }
  }
})
