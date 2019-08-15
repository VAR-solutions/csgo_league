<template>
  <v-container fluid pa-0 ma-0>
    <v-toolbar color="#282828" dark flat>
      <v-toolbar-title class="t press">CS:GO League</v-toolbar-title>

      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs
        
          color="#91ff00"
          v-model="tab"
          active-class
          align-with-title
          background-color="transparent"
        >
          <v-tabs-slider color="#91ff00"></v-tabs-slider>

          <v-tab 
          exact
          v-for="(item,i ) in items" :key="i" :to="{ name : link[i]}">{{ item }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <router-view></router-view>
  </v-container>
</template>


<style>
.t{
  color:#91ff00;

}
</style>
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