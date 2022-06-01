import router from "@/router";

export default {
    ACESSAR({ commit }, payload) {
        if (payload) {
            commit("loading/SHOW_LOADING", true, { root: true });
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

    // commit("loading/EXIBE_LOADING", true, { root: true });
    // commit("loading/ESCONDE_LOADING", true, { root: true });

    // PERFIL({ commit }, payload) {
    //     payload.http("paciente/perfil").then(response => {
    //         if (response.data.result) {
    //             commit("acesso/SET_PERFIL", response.data.result, { root: true });
    //         }
    //     })
    //         // eslint-disable-next-line no-unused-vars
    //         .catch(error => {
    //             commit("loading/ESCONDE_LOADING", null, { root: true });
    //         });
    // },
    // RECUPERAR_SENHA({ commit }, payload) {
    //     commit("loading/EXIBE_LOADING", null, { root: true });
    //     let data = {
    //         cpf: payload.cpf
    //     }
    //     payload.http.post("paciente/senha/recupera", data)
    //         .then(response => {
    //             commit("loading/ESCONDE_LOADING", null, { root: true });
    //             if (response.data.mensagem) {
    //                 commit("alerts/ALERTA_SUCESSO", response.data.mensagem, { root: true });
    //                 payload.funcaoRetorno();
    //             }
    //         })
    //         .catch(() => commit("loading/ESCONDE_LOADING", null, { root: true }));
    // }
}