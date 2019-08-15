<template>
    <v-container>
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(item, i) in fixtures"
      :key="i"
      
      color="#91ff00"
      
      fill-dot
    >
      <v-card
      
        dark
      >
        <v-card-title class="title fin">Match #{{ item.mnumber }}</v-card-title>
        <v-card-text class="lexend">
          <p>Date: {{ item.date }}</p>
          <p style="font-size: 20px">{{item.team1}} vs {{item.team2}}</p>
          
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
    </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import db from "../firebase";
export default {
    name: "fixtures",
    created() {
    db.firestore()
      .collection("fixtures").orderBy("mnumber")
      .get()
      .then(res => {
        res.forEach(doc => {
          this.fixtures.push(doc.data());
          console.log(doc.data())
        });
      });
  },
    data(){
     return {
        fixtures: []
    }
    }
    
}
</script>