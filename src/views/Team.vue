<template>
  <v-container>
    <Loader />
    <v-row>
      <v-col cols="12" md="4" xs="12" justify="center" align="center">
        <v-card>
          <v-layout align-center justify-center pt-4>
            <v-avatar size="240">
              <img
                v-if="!data.photo"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadpool-1563973577.jpg?crop=0.563xw:1.00xh;0,0&resize=480:*"
              />
              <img v-else-if="data.photo" :src="data.photo" />
            </v-avatar>
          </v-layout>
          <v-card-title class="justify-center fin lexend">{{ data.name }}</v-card-title>
          <p class="fontover" justify="center" align="center" style="font-size: 1.2em">
            Owner: {{this.data.owner}}
            <br />
            Contact: {{data.mob}}
          </p>
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
import Loader from "../components/Loader";
export default {
  name: "Team",
  components: {
    Player,
    Loader
  },
  created() {
    db.firestore()
      .collection("teams")
      .doc(this.$route.params.id)
      .onSnapshot(res => {
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