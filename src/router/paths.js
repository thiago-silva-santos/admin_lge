
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Header from '../components/Header.vue'
import Register from '../views/Register.vue'



export default [

    {
        path: '*',
        redirect: {
            name: "Login"
        }
    },
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
        path: '/captcha',
        name: 'Captcha',
        component: () => import('../views/Captcha.vue'),
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
        },
    meta: {

        requireAuth: true
    }

    },
    {
        path: '/about',
        name: 'About',
        components: {
            default: () => import('../views/About.vue'),
            header: () => import('../components/Header.vue')
        },
    },

]