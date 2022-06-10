
export default {
    SHOW_DIALOG: (state, payload) => {
        if (payload) {
            state.data.title = payload.title
            state.data.type = payload.type
            state.data.description = payload.description
        }
        state.data.showDialog = true;
        state.data.delete = false

    },
    HIDE_DIALOG: (state, payload) => {
        if (payload) {
            state.data.delete = payload.delete
        }
            state.data.showDialog = false;
    }
}  