<template>
  <v-container grid-list-sm align-content-space-between>
    <v-layout wrap>
      <v-flex v-for="(ex,k) in this.players" :key="k" xs12 sm6 md3>
        <Player :data="ex" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import db from "../firebase";
import Player from "../components/Player";

export default {
  name: "players",
  components: {
    Player
  },
  created() {
    db.firestore()
      .collection("players")
      .orderBy("name")
      .get()
      .then(res => {
        res.forEach(doc => {
          this.players.push(doc.data());
        });
      });
  },
  data() {
    return {
      players: []
    };
  }
};
</script>