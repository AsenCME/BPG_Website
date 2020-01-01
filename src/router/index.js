import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import Home from "../views/Home.vue";
import Features from "../views/Features.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/features", name: "features", component: Features },
    { path: "/about", name: "about", component: About },
];

const router = new VueRouter({
    routes,
});

export default router;
