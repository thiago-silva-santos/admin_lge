import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Header from '../components/Header.vue'
import Register from '../views/Register.vue'
import { login } from '../store/loginModule'
Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    redirect: {
      name: "Login"
    }
  },
  {
    path: '/home',
    name: 'Home',
    components: {
      default: Home,
      header: Header
      // default: () => import('../views/Home.vue'),
      // header: () => import('../components/Header.vue')
    },

    beforeEnter: (to, from, next) => {
      if(login.state.isLogin === false) {
          next("/login");
      } else {
        next()
      }
  }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: () => import('../views/About.vue'),
      header: () => import('../components/Header.vue')
    },
    beforeEnter: (to, from, next) => {
      if(login.state.isLogin === false) {
          next("/login");
      } else {
        next()
      }
  }
  },
  {
    path :'*',
    redirect: {
      name: "Login"
    }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
