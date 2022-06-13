
export default {

    INFO: ({ commit }, payload) => {
        commit("SHOW_DIALOG", { title: payload.title, description: payload.description, type: "info" })
    },
    WARNING: ({ commit }, payload) => {
        commit("SHOW_DIALOG", { title: payload.title, description: payload.description, type: "warning" })
    },
    ERROR: ({ commit }, payload) => {
        commit("SHOW_DIALOG", { title: payload.title, description: payload.description, type: "error" })
    },
    CUSTOM: ({ commit }, payload) => {
        commit("SHOW_DIALOG", { title: payload.title, description: payload.description, type: "error" })
    }



}