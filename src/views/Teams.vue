<template>
<v-container grid-list-sm align-content-space-between>
    <v-layout wrap>
      <Team v-for="(ex, k) in this.teams" :key="k" :data="ex" />
    </v-layout>
  </v-container>
    
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import db from "../firebase";
import  Team from "../components/Team";
export default {
    name: "teams",
    components: {
        Team
    },
    created() {
    db.firestore()
      .collection("teams")
      .onSnapshot(res => {
        this.teams = []
        res.forEach(doc => {
          this.teams.push(doc.data());
          console.log(doc.data());
        });
      });
},
data() {
    return {
      teams: []
    };
  }
};
</script>