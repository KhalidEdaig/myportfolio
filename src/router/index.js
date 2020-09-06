import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Services from "../views/Service.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { transitionName: "slide" },
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
    meta: { transitionName: "slide" },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: { transitionName: "slide" },
  },
  /*{
    path: "/team",
    name: "Team",
    component: Team,
    meta: { transitionName: "slide" }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { transitionName: "slide" }
  } */
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
