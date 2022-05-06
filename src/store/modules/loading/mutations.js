export default {
    EXIBE_LOADING: (state, payload) => { 
        if(payload) {
            state.dataLoading.corprogress = payload.cor ? payload.cor : "white";
            state.dataLoading.texto = payload.texto ? payload.texto : "Carregando";
        }          
        state.dataLoading.exibe = true;
    },
    ESCONDE_LOADING: (state) => {
        state.dataLoading.exibe = false;
        state.dataLoading.corprogress = "white";
        state.dataLoading.texto = "Carregando";
    }
}  