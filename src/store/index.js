import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autenticado: false
  },
  mutations: {
    setAuth(state, status) {
      state.autenticado = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
