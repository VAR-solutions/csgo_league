<template>
  <v-container mt-5>
    <Loader />
    <v-card pa-2 width="90%" class="mx-auto">
      <v-row>
        <v-col cols="12" md="5" xs="12" justify="center" align="center">
          <v-avatar height="98%" width="78%">
            <img
              v-if="!data.photo"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadpool-1563973577.jpg?crop=0.563xw:1.00xh;0,0&resize=480:*"
            />

            <img v-else-if="data.photo" :src="data.photo" />
          </v-avatar>
        </v-col>
        <v-col cols="12" md="7" xs="12" justify="center" align="center" class="mt-5">
          <h1 class="fin">{{ data.tag}}</h1>
          <v-card-text class="lexend">
            <p style="font-size: 25px">
              <b>{{ data.name}}</b>
            </p>
            <p class="size">Primary Weapon: <span class="fin"> {{ data.primary_weapon.toUpperCase()}} </span></p>
            <p class="size">Secondary Weapon: <span class="fin"> {{ data.secondary_weapon.toUpperCase()}}</span></p>
            <p class="size">Category: <span class="fin"> {{ data.category.toUpperCase() }}</span></p>
            <p class="size">Team: <span class="fin"> {{data.team}}</span></p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<style>
.size {
  font-size: 25px;
}
</style>
<script>
import firebase from "firebase/app";
import "firebase/firestore";
import db from "../firebase";
import Loader from "../components/Loader";
export default {
  name: "profile",
  props: ["id"],
  components: {
    Loader
  },
  data() {
    return {
      data: {}
    };
  },
  created() {
    db.firestore()
      .collection("players")
      .doc(this.$route.params.id)
      .get()
      .then(res => {
        this.data = res.data();
      });
  }
};
</script>