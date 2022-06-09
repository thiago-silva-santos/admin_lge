export default {
    SHOW_DIALOG: (state, payload) => {
        if (payload) {
            state.data.title = payload.title
            state.data.type = payload.type
            state.data.description = payload.description
        }
        state.data.showDialog = true;
    },  
    HIDE_DIALOG: (state) => {
        state.data.showDialog = false;
    }
}  