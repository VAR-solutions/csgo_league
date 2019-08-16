<template>
  <v-container  mt-5>
    <v-card pa-2 
      width="80%"
      class="mx-auto"
     
     
    >
      <v-row  > 
        <v-col cols="12" md="4" xs="12" justify="center" align="center">
          <img width="80%"
            src="https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
          />
        </v-col>
        <v-col cols="12" md="8" xs="12" justify-center align-self-center>
            <v-card-title><h1>{{ data.name}}</h1></v-card-title>
            <v-card-text>
               <p class="fin lexend" style="font-size: 25px">{{ data.tag}}</p>
               <p class="size lexend">Primary Weapon: {{ data.primary_weapon}}</p> 
               <p class="size lexend">Secondary Weapon: {{ data.secondary_weapon}}</p>
               <p class="size lexend">Category: To be decided</p>
               <p class="size lexend">Team: To be Auctioned</p>
                <h2>{{ data.category}}</h2>
            </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<style>
.size{
  font-size: 20px;
}
</style>
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