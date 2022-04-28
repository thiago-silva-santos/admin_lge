import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import MenuTesteVT from './components/MenuTesteVT'
import MenuListNew from './components/MenuListNew'
import SubGroupMenu from './components/Menu/SubGroupMenu'

Vue.config.productionTip = false
Vue.component("menu-teste-vt", MenuTesteVT)
Vue.component("menu-list-new", MenuListNew)
Vue.component("sub-group-menu", SubGroupMenu)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
