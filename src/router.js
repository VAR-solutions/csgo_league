import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Players from "./views/Players.vue";
import Teams from "./views/Teams.vue";
import Announcements from "./views/Announcements.vue";
import Fixtures from "./views/Fixtures.vue";
import PointsTable from "./views/PointTable.vue";
import Profile from "./views/Profile.vue";
import Register from "./views/Register";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/teams",
      name: "teams",
      component: Teams
    },
    {
      path: "/announcements",
      name: "announcements",
      component: Announcements
    },
    {
      path: "/fixtures",
      name: "fixtures",
      component: Fixtures
    },
    {
      path: "/ptable",
      name: "pointsTable",
      component: PointsTable
    },
    {
      path: "/players",
      name: "players",
      component: Players
    },
    {
      path: "/players/:id",
      name: "profile",
      component: Profile,
      props: true
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});
