<template>
  <!-- <v-container>
    <Loader />
    <h1 class="fin" align="center">COMING SOON...</h1>
  </v-container> -->
  <v-container>
    <Loader />
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item v-for="(item, i) in fixtures" :key="i" color="#91ff00" fill-dot>
        <template v-slot:icon>
          <span>
            <v-icon v-if="item.flag">mdi-checkbox-marked-circle-outline</v-icon>
          </span>
        </template>
        <v-card dark>
          <v-card-title class="title fin">Match #{{ item.mnumber }}</v-card-title>
          <v-card-text class="lexend">
            <p>Date: {{ item.date }}</p>
            <p style="font-size: 20px">{{item.team1}} vs {{item.team2}}</p>
          </v-card-text>
          <v-card-actions>
            <p v-if="item.flag" class="title fin">{{ item.wonby }} won the match</p>
            <!-- <div class="flex-grow-1"></div> -->
            <!-- <v-btn v-if="item.flag" @click="dialogScore = true">See Scorecard</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import "firebase/firestore";
import db from "../firebase";
import Loader from "../components/Loader";

export default {
  name: "fixtures",
  components: {
    Loader
  },
  created() {
    db.firestore()
      .collection("fixtures")
      .orderBy("mnumber")
      .get()
      .then(res => {
        res.forEach(doc => {
          this.fixtures.push(doc.data());
        });
      });
  },
  data() {
    return {
      fixtures: []
    };
  }
};
</script>