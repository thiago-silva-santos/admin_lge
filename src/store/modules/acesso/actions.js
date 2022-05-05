import router from "@/router";

export default {
    ACESSAR({ commit }, payload) {
        commit("loading/EXIBE_LOADING", null, { root: true });
        payload.http.post("paciente/acessar",
            {
                acesso: payload.acesso,
                senha: payload.senha
            }).then(response => {
                commit("loading/ESCONDE_LOADING", null, { root: true });
                if (response.data.mensagem) {
                    commit("alerts/ALERTA_ERRO", response.data.mensagem, { root: true });
                } else {
                    var data = {
                        ...response.data.result,
                        logado: true
                    };

                    commit("acesso/SET_DADOS_ACESSO",
                        {
                            usuario: data,
                            http: payload.http
                        }, { root: true });

                    router.push({ name: "Home" });
                }
            })
            // eslint-disable-next-line no-unused-vars
            .catch(error => {
                commit("loading/ESCONDE_LOADING", null, { root: true });
            });
    },
    PERFIL({ commit }, payload) {
        payload.http("paciente/perfil").then(response => {
            if (response.data.result) {
                commit("acesso/SET_PERFIL", response.data.result, { root: true });
            }
        })
            // eslint-disable-next-line no-unused-vars
            .catch(error => {
                commit("loading/ESCONDE_LOADING", null, { root: true });
            });
    },
    RECUPERAR_SENHA({ commit }, payload) {
        commit("loading/EXIBE_LOADING", null, { root: true });
        let data = {
            cpf: payload.cpf
        }
        payload.http.post("paciente/senha/recupera", data)
            .then(response => {
                commit("loading/ESCONDE_LOADING", null, { root: true });
                if (response.data.mensagem) {
                    commit("alerts/ALERTA_SUCESSO", response.data.mensagem, { root: true });
                    payload.funcaoRetorno();
                }
            })
            .catch(() => commit("loading/ESCONDE_LOADING", null, { root: true }));
    }
}