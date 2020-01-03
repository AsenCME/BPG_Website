import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import Home from "../views/Home.vue";
import Features from "../views/Features.vue";
import LearnMore from "../views/LearnMore.vue";
import AboutUs from "../views/AboutUs.vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/features", name: "features", component: Features },
    { path: "/learnmore", name: "learnmore", component: LearnMore },
    { path: "/about", name: "about", component: AboutUs },
];

const router = new VueRouter({
    routes,
});

export default router;
