import router from "@/router";

export default {
    GET_ALERT({ commit }, payload) {
        if (payload) {
            commit("alert/SHOW_ALERT", true, { root: true });
            setTimeout(() => {
                commit("acesso/SET_DADOS_ACESSO", payload, { root: true });
                commit("loading/HIDE_LOADING", true, { root: true });
                router.push('/home')
            }, 2000);
        }
    },
    NOVA_SENHA({ commit }, payload) {
        if (payload) {
            commit("acesso/SET_NOVA_SENHA", payload, { root: true });
            router.push('/home')
        }
    },

}