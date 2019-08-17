<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" xs="12" justify="center" align="center">
        <v-card >
          <v-img v-if="!data.photo"
            width="50%"
            src="https://firebasestorage.googleapis.com/v0/b/csgo-auction.appspot.com/o/side-03.png?alt=media&token=91ce7293-e061-4a46-8929-d72bb6917499"
          ></v-img>
          <v-img v-else-if="data.photo"
            :src="data.photo"
          ></v-img>
          <v-card-title class="justify-center fin lexend">{{ data.name }}</v-card-title>
          <p class="fontover" justify ="center" align="center" style="font-size: 1.2em">Owner: {{this.data.owner}}<br>Contact: {{data.mob}}</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" xs="12">
        <v-layout wrap>
          <v-flex v-for="(ex,k) in this.players" :key="k" xs12 sm6 md4>
            <Player :data="ex" />
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import db from "../firebase";
import Player from "../components/Player";

export default {
  name: "Team",
  components: {
    Player
  },
  created() {
    db.firestore()
      .collection("teams")
      .doc(this.$route.params.id)
      .get()
      .then(res => {
        this.data = res.data();
        // console.table(res.data())
        res.data().player_ids.forEach(k => {
          db.firestore()
            .collection("players")
            .doc(k)
            .get()
            .then(r => {
              // console.log(r.data())
              this.players.push(r.data());
            });
        });
      });
  },
  data() {
    return {
      data: {},
      players: []
    };
  }
};
</script>

<style>
</style>