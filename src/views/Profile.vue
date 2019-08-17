<template>
  <v-container  mt-5>
    <v-card pa-2 
      width="90%"
      class="mx-auto"
     
     
    >
      <v-row  > 
        <v-col cols="12" md="5" xs="12" justify="center" align="center" >
          <img width="50%"
            src="https://firebasestorage.googleapis.com/v0/b/csgo-auction.appspot.com/o/side-03.png?alt=media&token=91ce7293-e061-4a46-8929-d72bb6917499"
          />
        </v-col>
        <v-col cols="12" md="7" xs="12" justify="center" align="center" class="mt-5">
            <h1 class="fin">{{ data.tag}}</h1>
            <v-card-text>
               <p class="lexend" style="font-size: 25px">{{ data.name}}</p>
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
  font-size: 25px;
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
        this.data = res.data();
      });
  }
};
</script>