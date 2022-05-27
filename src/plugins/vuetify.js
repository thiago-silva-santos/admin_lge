import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
const blabla = {
    light: {
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
