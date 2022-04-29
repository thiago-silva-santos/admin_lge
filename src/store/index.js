import Vue from 'vue'
import Vuex from 'vuex'
import { login } from './loginModule';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autenticado: false,
    token: null,
    user: 'Thiago'
  },
  mutations: {
    // setAuth(state, status) {
    //   state.autenticado = status;
    // },
    // setUser(state, nome) {
    //   state.user = nome
    // }
  },
  actions: {
  },
  modules: {
    login
  }
})
