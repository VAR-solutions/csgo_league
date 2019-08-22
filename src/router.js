/* eslint-disable no-unused-vars */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Players from "./views/Players.vue";
import Teams from "./views/Teams.vue";
import Announcements from "./views/Announcements.vue";
import Fixtures from "./views/Fixtures.vue";
import PointsTable from "./views/PointTable.vue";
import Profile from "./views/Profile.vue";
import Team from "./views/Team.vue";
import Rules from "./views/Rules.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home | CS:GO League - Arcadia"
      }
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "About | CS:GO League - Arcadia"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/teams",
      name: "teams",
      component: Teams,
      meta: {
        title: "Teams | CS:GO League - Arcadia"
      }
    },
    {
      path: "/announcements",
      name: "announcements",
      component: Announcements,
      meta: {
        title: "Announcements | CS:GO League - Arcadia"
      }
    },
    {
      path: "/fixtures",
      name: "fixtures",
      component: Fixtures,
      meta: {
        title: "Fixtures | CS:GO League - Arcadia"
      }
    },
    {
      path: "/ptable",
      name: "pointsTable",
      component: PointsTable,
      meta: {
        title: "Points Table | CS:GO League - Arcadia"
      }
    },
    {
      path: "/players",
      name: "players",
      component: Players,
      meta: {
        title: "Players | CS:GO League - Arcadia"
      }
    },
    {
      path: "/players/:id",
      name: "profile",
      component: Profile,
      props: true,
      meta: {
        title: "Player's Profile | CS:GO League - Arcadia"
      }
    },
    {
      path: "/teams/:id",
      name: "Team",
      component: Team,
      props: true,
      meta: {
        title: "Team's Profile | CS:GO League - Arcadia"
      }
    },
    {
      path: "/rules",
      name: "Rules",
      component: Rules,
      meta: {
        title: "Rules | CS:GO League - Arcadia"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    el => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  next();
});

export default router;
