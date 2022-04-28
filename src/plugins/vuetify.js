import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
const blabla = {
    light: {
        primary: '#E91E63',
        secondary: '#9C27b0',
        accent: '#e91e63',
        info: '#00CAE3',
        success: '#4CAF50',
        warning: '#FB8C00',
        error: '#FF5252',
        bluemoon: '#0077FF',
        black: '#00000'
    }
}
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: blabla

    },

});
