import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import MenuList from './components/MenuList'
import SubGroupMenu from './components/Menu/SubGroupMenu'

Vue.config.productionTip = false
Vue.component("menu-list-new", MenuList)
Vue.component("sub-group-menu", SubGroupMenu)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
