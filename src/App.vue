<template>
  <v-app dark>
    <v-app-bar app color="#282828" dark flat>
      <v-toolbar-title class="t press">CS:GO League</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs
          color="#91ff00"
          v-model="tab"
          align-with-title
          active-class
          background-color="transparent"
        >
          <v-tabs-slider  color="#91ff00"></v-tabs-slider>
          <v-tab exact v-for="(item,i ) in items" :key="i" :to="{ name : link[i]}">{{ item }}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-content app>
      <router-view></router-view>
    </v-content>
    <v-footer app padless absolute class="lexend">
      <v-col class="text-center" cols="12">
        Made with
        <span class="fin">💚</span> by
        <span class="fin">
          <a href="https://github.com/VAR-solutions" class="link">UpThrust</a>
        </span> For
        <span class="fin">Arcadia</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Navbar",

  methods: {},
  data() {
    return {
      tab: null,
      items: [
        "Home",
        "Players",
        "Teams",
        "Announcements",
        "Points Table",
        "Fixtures",
        "Rules"
      ],
      link: [
        "home",
        "players",
        "teams",
        "announcements",
        "pointsTable",
        "fixtures",
        "Rules"
      ],
      user: null
    };
  }
};
</script>

<style>
.t {
  color: #91ff00;
}
.v-application--is-ltr .v-tabs--align-with-title > .v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows) > .v-slide-group__wrapper > .v-tabs-bar__content > .v-tab:first-child, .v-application--is-ltr .v-tabs--align-with-title > .v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows) > .v-slide-group__wrapper > .v-tabs-bar__content > .v-tabs-slider-wrapper + .v-tab {
    margin-left: 16px !important;
}
</style>