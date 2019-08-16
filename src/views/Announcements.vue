<template>
    <v-container>
            <Announcement v-for="(ex,k) in this.announcements" :key="k" :data="ex" />
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
      .collection("announcements").orderBy('time', 'desc')
      .onSnapshot(res => {
        this.announcements = []
        res.forEach(doc => {
          this.announcements.push(doc.data());
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