
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Header from '../components/Header.vue'
import Loading from '../components/Loading/LoadingScreen.vue'
import VueRouter from 'vue-router'

// const NomeDaRota = this.$route.name



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
        components: {
            login: Login
        },
    },
    {
        path: '/captcha',
        name: 'Captcha',
        component: () => import('../views/Captcha.vue'),
    },

    {
        path: '/loading',
        name: 'Loading',
        component: Loading
    },
    {
        path: '/password',
        name: 'Password',
        component: () => import('../views/Password.vue'),
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

            requireAuth: true,
            breadCrumb: [
                {
                    text: 'Teste',
                }
            ],

        },
    },
    {
        path: '/manager',
        name: 'Manager',
        components: {
            default: () => import('../views/Manager.vue'),
            header: Header
        },
        meta: {
            requireAuth: true,
            breadCrumb: [
                {
                    text: 'Teste',
                }
            ],

        }

    },
    {
        path: '/:parametro',
        name: 'Tela1',
        components: {
            default: () => import('../views/Pages/Tela1.vue'),
            header: Header
        },
        breadCrumb(route = VueRouter) {
            const parametro = route.params.parametro;
            return [

                {
                    text: 'teste',
                },

                {
                    text: parametro,
                },
            ]
        }
    },
    {
        path: '/teste',
        name: 'Teste',
        components: {
            default: () => import('../views/Pages/Teste.vue'),
            header: Header
        },

        // children: [

        //     {
        //         path: '/teste/tela2',
        //         name: 'Tela2',
        //         components: {
        //             default: () => import('../views/Pages/Tela2.vue'),
        //             header: Header
        //         },
        //         children: [
        //             {
        //                 path: '/teste/tela3',
        //                 name: 'Tela3',
        //                 components: {
        //                     default: () => import('../views/Pages/Tela3.vue'),
        //                     header: Header
        //                 },
        //             }
        //         ]
        //     },

        // ],

        meta: {
            requireAuth: true,
            breadCrumb: [
                {
                    text: 'Teste',
                }
            ],

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