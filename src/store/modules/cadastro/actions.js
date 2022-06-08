import router from "@/router";

export default {
    CADASTRAR_USUARIO({ commit, dispatch }, payload) {
        if (payload) {
            commit("loading/SHOW_LOADING", true, { root: true });
            setTimeout(() => {
                commit("cadastro/SET_DADOS_CADASTRO", payload, { root: true });
                commit("loading/HIDE_LOADING", true, { root: true });
                dispatch("alert/ERROR",
                    "Usuário cadastrado com sucesso!",
                    { root: true });
                router.push('/home')
            }, 1000);
            setTimeout(() => {
                commit("alert/HIDE_ALERT", true, { root: true })

            }, 8000);

        }
    },
}