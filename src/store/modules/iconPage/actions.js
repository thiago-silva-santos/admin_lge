
export default {
    DIALOG({ commit }, payload) {
        if (payload) {
            commit("iconPage/SET_DIALOG", payload, { root: true });
        }
    },
}