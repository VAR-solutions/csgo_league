<template>
  <v-container mt-5>
    <Loader />
    <v-card pa-2 width="90%" class="mx-auto">
      <v-row>
        <v-col cols="12" md="5" xs="12" justify="center" align="center">
          <v-avatar size="270">
            <img :src="data.photo" @error="imgUrlAlt" />
          </v-avatar>
        </v-col>
        <v-col cols="12" md="7" xs="12" justify="center" align="center" class="mt-5">
          <h1 class="fin">{{ data.tag}}</h1>
          <v-card-text class="lexend">
            <p style="font-size: 25px">
              <b>{{ data.name}}</b>
            </p>
            <p class="size">
              Primary Weapon:
              <span class="fin">{{ data.primary_weapon.toUpperCase()}}</span>
            </p>
            <p class="size">
              Secondary Weapon:
              <span class="fin">{{ data.secondary_weapon.toUpperCase()}}</span>
            </p>
            <p class="size">
              Category:
              <span class="fin">{{ data.category.toUpperCase() }}</span>
            </p>
            <p class="size">
              Team:
              <span class="fin">{{data.team}}</span>
            </p>
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
  },
  methods: {
    imgUrlAlt(event) {
      event.target.src =
        "https://firebasestorage.googleapis.com/v0/b/csgo-auction.appspot.com/o/side-03.png?alt=media&token=91ce7293-e061-4a46-8929-d72bb6917499";
    }
  }
};
</script>