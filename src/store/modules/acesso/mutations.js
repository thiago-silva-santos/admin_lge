export default {
    SET_DADOS_ACESSO(state, payload) {
       
        state.isLogged = payload
    },
    SET_PERFIL(state, payload) {
        if(payload) {
            state.perfil = payload;
        }
    },
    LIMPA_DADOS_ACESSO() {
    }
}