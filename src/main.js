import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify'
import MenuList from './components/Menu/MenuList'

import './plugins/axios'
import './plugins/alert'
import './plugins/dialog'

Vue.use(Vuelidate)
Vue.config.productionTip = false
Vue.component("menu-list", MenuList)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
