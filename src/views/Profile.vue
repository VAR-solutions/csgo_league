<template>
  <v-container>
    <v-card pa-2>
      <v-layout row > 
        <v-flex xs12 md6 justify-center align-self-center>
          <img width="50%"
            src="https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
          />
        </v-flex>
        <v-flex xs12 sm6 justify-center align-self-center>
            <v-card-title><h1>{{ data.name}}</h1></v-card-title>
            <v-card-text>
               <h2>{{ data.tag}}</h2>
               <h2>{{ data.primary_weapon}}</h2> 
                <h2>{{ data.secondary_weapon}}</h2>
                <h2>{{ data.category}}</h2>
            </v-card-text>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>
<script>
import firebase from "firebase/app";
import "firebase/firestore";
import db from "../firebase";
export default {
  name: "profile",
  props: ["id"],
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
        console.log(res.data());
        this.data = res.data();
      });
  }
};
</script>