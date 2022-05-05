import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Guard = () => {
    const router = createRouter({ ... })
    router.beforEach(async (to, from) => {
        if(!login.state.isLogin) {
            return { name: 'Home'}
        }
    })

}

export default Guard