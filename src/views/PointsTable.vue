<template>
  <v-container>
    <Loader />
    <v-data-table
      :headers="headers"
      :items="teamstats"
      item-key="name"
      hide-default-footer
      :loading="dataload"
      loading-text="Loading... Please wait"
      class="elevation-1"
      sort-by="points"
      sort-desc
    ></v-data-table>
  </v-container>
</template>

<script>
import Loader from "../components/Loader";
import firebase from "firebase/app";
import "firebase/firestore";
import db from "../firebase";
export default {
  name: "pointsTable",
  components: {
    Loader
  },
  data() {
    return {
      headers: [
        {
          text: "Team Name",
          align: "left",
          value: "name",
          sortable: false
        },
        { text: "Matches Played", value: "mplayed", sortable: false},
        { text: "Matches Won", value: "mwon", sortable: false },
        { text: "Rounds Won", value: "rwon", sortable: false },
        { text: "Rounds Lost", value: "rlost", sortable: false },
        { text: "Round Difference", value: "rd", sortable: false },
        { text: "Points", value: "points" }
      ],
      teamstats: [],
      dataload: true,
    };
  },

  created() {
    db.firestore().collection("teams").onSnapshot(snap => {
      this.dataload = true;
      this.teamstats = [];
      snap.forEach(res => {
        var teamdetails = {};
        teamdetails["name"] = res.data().name
        teamdetails["mplayed"] = res.data().mplayed
        teamdetails["mwon"] = res.data().mwon
        teamdetails["rwon"] = res.data().rwon
        teamdetails["rlost"] = res.data().rlost
        teamdetails["rd"] = teamdetails["rwon"] - teamdetails["rlost"]
        var point = (teamdetails["mwon"] * 100) + teamdetails["rd"]
        teamdetails["points"] = point
        this.teamstats.push(teamdetails)
      });
      this.dataload = false;
    })
  }
};
</script>