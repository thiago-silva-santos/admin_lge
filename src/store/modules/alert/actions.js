
export default {
    SUCCESS: ({commit}, text) => {
        commit("SHOW_ALERT", { description: text, icon: "mdi-check", type: "success" })
    },
    INFO: ({commit}, text) => {
        commit("SHOW_ALERT", { description: text, icon: "mdi-information", type: "info" })
    },
    WARNING: ({commit}, text) => {
        commit("SHOW_ALERT", { description: text, icon: "mdi-alert", type: "warning" })
    },
    ERROR: ({commit}, text) => {
        commit("SHOW_ALERT", { description: text, icon: "mdi-error", type: "error" })
    }


}