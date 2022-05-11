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
        space_cadet: '#17183B',
        jet: '#34312D',
        grey_web: '#7E7F83',
        preto: '#272727'
    }
}
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: blabla

    },

});
