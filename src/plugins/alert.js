import Vue from 'vue'
import store from '../store'

Vue.prototype.$alert = {

    success(text) {
        store.dispatch("alert/SUCCESS", text);
        setTimeout(() => {
            store.commit("alert/HIDE_ALERT")
        }, 4000);
    },
    info(text) {
        store.dispatch("alert/INFO", text);
        setTimeout(() => {
            store.commit("alert/HIDE_ALERT")
        }, 4000);
    },

    warning(text) {
        store.dispatch("alert/WARNING", text);
        setTimeout(() => {
            store.commit("alert/HIDE_ALERT")
        }, 4000);
    },
    error(text) {
        store.dispatch("alert/ERROR", text);
        setTimeout(() => {
            store.commit("alert/HIDE_ALERT")
        }, 4000);
    }

};