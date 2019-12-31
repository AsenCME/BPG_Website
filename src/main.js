import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

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
