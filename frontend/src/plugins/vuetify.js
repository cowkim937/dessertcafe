import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VueI18n from 'vue-i18n';

Vue.use(Vuetify);
Vue.use(VueI18n);

const messages = {
    en: {
        $vuetify: {
            footer:{
                about: "About us",
                roughmap: "Directions",
                franchisor: "Franchisor",
                sitemap: "Site map"
            },
        },
    },
    ko: {
        $vuetify: {
            footer:{
                about: "엄지랑",
                roughmap: "찾아오시는 길",
                franchisor: "가맹 상담",
                sitemap: "사이트 맵"
            },
        },
    },
}

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'ko', // set locale
    messages, // set locale messages
})

export default new Vuetify({
    lang: {
        t: (key, ...params) => i18n.t(key, params),
    },
})
