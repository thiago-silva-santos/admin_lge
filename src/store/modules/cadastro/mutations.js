export default {
    SET_DADOS_CADASTRO(state, payload) {
        state.name = payload.name
        state.email = payload.email
    },
}