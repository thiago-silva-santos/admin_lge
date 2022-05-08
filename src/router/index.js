import Vue from 'vue'
import VueRouter from 'vue-router'
import paths from './paths'
import store from '../store'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: paths,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  let state = store.state;
  console.log('isLoggedStatus: '+ state.acesso.isLogged)
  if (to.meta.requireAuth) {
    if (state.acesso.isLogged)
      next()
    else
      next('/login')
  } else {
    next();
  }
});







export default router
