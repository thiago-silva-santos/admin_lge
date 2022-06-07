export default {
    SHOW_ALERT: (state, payload) => {
        console.log("MOSTRA_ALERT " + payload)
        if (payload) {
            // state.data.corprogress = payload.cor ? payload.cor : "white";
            state.data.description = payload.description
            state.data.type = payload.type
        }
        state.data.showAlert = true;
    },
    HIDE_ALERT: (state) => {
        console.log("ESCONDE_ALERT")
        state.data.showAlert = false;
        // state.data.corprogress = "white";
        // state.data.texto = "Carregando";
    }
}  