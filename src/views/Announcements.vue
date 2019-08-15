<template>
    <v-container>
        <v-layout wrap>
            <Announcement v-for="(ex,k) in this.announcements" :key="k" :data="ex" />
        </v-layout>
    </v-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import db from "../firebase";
import  Announcement from "../components/Announcement";

export default {
  name: "announcements",
  components: {
    Announcement
  },
  created() {
    db.firestore()
      .collection("announcements")
      .get()
      .then(res => {
        res.forEach(doc => {
          this.announcements.push(doc.data());
          console.log(doc.data())
        });
      });
  },
  data() {
    return {
      announcements: []
    };
  }
};
</script>