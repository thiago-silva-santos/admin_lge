export default {
    SHOW_ALERT: (state, payload) => {
        if (payload) {
            state.data.description = payload.description
            state.data.type = payload.type
            state.data.icon = payload.icon
        }
        state.data.showAlert = true;
    },  
    HIDE_ALERT: (state) => {
        state.data.showAlert = false;
    }
}  