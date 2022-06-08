import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify'
import MenuList from './components/MenuList'
import SubGroupMenu from './components/Menu/SubGroupMenu'

import './plugins/axios'
import './plugins/alert'

Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.component("menu-list-new", MenuList)
Vue.component("sub-group-menu", SubGroupMenu)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
