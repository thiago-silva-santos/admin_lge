export default {
    SHOW_LOADING: (state, payload) => { 
        if(payload) {
            // state.dataLoading.corprogress = payload.cor ? payload.cor : "white";
            state.dataLoading.description = payload.description ? payload.description : "Carregando";
        }          
        state.dataLoading.showLoading = true;
    },
    HIDE_LOADING: (state) => {
        console.log("ESCONDE_LOADING")
        state.dataLoading.showLoading = false;
        // state.dataLoading.corprogress = "white";
        // state.dataLoading.texto = "Carregando";
    }
}  