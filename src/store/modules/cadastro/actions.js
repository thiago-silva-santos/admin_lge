import router from "@/router";

export default {
    CADASTRAR_USUARIO({ commit }, payload) {
        if (payload) {
            commit("loading/SHOW_LOADING", true, { root: true });
            setTimeout(() => {
                commit("cadastro/SET_DADOS_CADASTRO", payload, { root: true });
                commit("loading/HIDE_LOADING", true, { root: true });
                router.push('/home')
            }, 2000);
        }
    },
}