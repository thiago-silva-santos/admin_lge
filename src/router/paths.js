
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Header from '../components/Header.vue'
import Loading from '../components/Loading/LoadingScreen.vue'
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
        components: {
            password: () => import('../views/Password.vue')
        }

    },
    {
        path: '/',
        redirect: {
            name: "Login"
        }
    },
    {
        path: '/home',
        components: {
            default: Home,
            header: Header
        },

        children: [

            {
                path: '',
                component: () => import('../components/Pages/Tela1.vue'),
                meta: {
                    breadCrumb: [
                        {
                            text: 'Tela 1',
                            to: '/home'
                        },
                        {
                            text: 'Tela 2',
                            to: '/home/testando'
                        },
                        {
                            text: 'Tela 3',
                            to: '/home/:id/tela_3'
                        },

                    ],
                }
            },
            {
                path: ':id',
                name: 'Tela2',
                component: () => import('../components/Pages/Tela2.vue'),
                meta: {
                    breadCrumb: [{
                        text: 'Home',
                        to: '/home'
                    },
                    {
                        text: 'Tela 2',
                        to: '/home/testando'
                    }
                    ]
                }
            },
            {
                path: '/home/:id/tela_3',
                name: 'Tela3',
                component: () => import('../components/Pages/Tela3.vue'),
                meta: {
                    breadCrumb: [{
                        text: 'Tela 1',
                        to: '/home'
                    },
                    {
                        text: 'Tela 2',
                        to: '/home/:id'
                    },
                    {
                        text: 'Tela 3',
                        to: '/home/:id/tela_3'
                    }
                ]
                }
            }

        ],
        meta: {

            requireAuth: true,


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
        }


    },

    {
        path: '/register-users',
        name: 'Register Users',
        components: {
            default: () => import('../views/RegisterUsers.vue'),
            header: Header
        },
        meta: {
            requireAuth: true,
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