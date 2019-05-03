import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Home from "./views/Home.vue";
import Services from "./views/Services.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/about",
      component: About
    },
    {
      path: "/",
      component: Home
    },
    {
      path: "/services",
      component: Services
    },
    {
      path: "/contact",
      component: Contact
    }
  ]
});
export default router;
