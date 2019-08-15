<template>
  <v-container fluid pa-0 ma-0>
    <v-toolbar color="cyan" dark flat>
      <v-toolbar-title class="black--text">CS:GO League</v-toolbar-title>

      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs
          color="black"
          v-model="tab"
          active-class
          align-with-title
          background-color="transparent"
        >
          <v-tabs-slider color="black"></v-tabs-slider>

          <v-tab v-for="(item,i ) in items" :key="i" :to="{ name : link[i]}">{{ item }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <router-view></router-view>
  </v-container>
</template>

<script>

export default {
  name: "Navbar",

  methods: {
  },
  data() {
    return {
      tab: null,
      items: [
        "Home",
        "Players",
        "Teams",
        "Announcements",
        "Points Table",
        "Fixtures"
      ],
      link: [
        "home",
        "players",
        "teams",
        "announcements",
        "pointsTable",
        "fixtures"
      ],
      user: null,
      };
  }
};
</script>