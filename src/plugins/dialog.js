import Vue from 'vue'
import store from '../store'

Vue.prototype.$dialog = {


    info(payload) {
        store.dispatch("dialog/INFO", payload);
    },

    warning(payload) {
        store.dispatch("dialog/WARNING", payload );
    
    },
    error(payload) {
        store.dispatch("dialog/ERROR", payload);
    },


};