export default {
    SET_DADOS_ACESSO(state, payload) {
        state.name = payload.name
        state.isLogged = payload.isLogged;
    },
    SET_PERFIL(state, payload) {
        if(payload) {
            state.perfil = payload;
        }
    },
    LIMPA_DADOS_ACESSO() {
    }
}