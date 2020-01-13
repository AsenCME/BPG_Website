import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueProgressiveImage from "vue-progressive-image";
Vue.use(VueProgressiveImage);

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faSkype } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEnvelope, faPhone, faTwitter, faFacebook, faSkype);
Vue.component("fa-icon", FontAwesomeIcon);

import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    router,
    store,
    created() {
        AOS.init({ anchorPlacement: "bottom-bottom" });
    },
    render: h => h(App),
});
