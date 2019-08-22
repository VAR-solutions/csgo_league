<template>
  <v-container mt-5>
    <Loader />
    <v-row align="center" justify="center" class="px-3 py-0 my-0">
      <v-img
        src="https://www.getoutfox.com/assets/images/rich-content/outfox_guides_csgo_banner.png"
        class="grey lighten-2"
        width="100%"
      ></v-img>
    </v-row>
    <!-- <v-row 
    mt-4
    >-->
    <!-- <v-col
        cols="6"
        sm="12"
        md="6"
        lg="6"
        class="px-0 lexend"

      >
        <v-card
          class="pa-2 lexend"
          
          tile
        >
          

        </v-card>
    </v-col>-->
    <!-- <v-col
        cols="12"
        md="12"
        sm="12"
        class="px-0"
    >-->
    <v-card class="pa-2 mt-4 lexend" tile>
      <v-row max-height="500">
        <v-col cols="12" xs="12" sm="12" md="4" lg="4" align="center" justify="center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/csgo-auction.appspot.com/o/Gaming%20club%20logo-04.png?alt=media&token=f5d98b86-1b79-4d10-aa0e-9244f08fac2d"
            width="80%"
            height="90%"
          />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="8" lg="8" align="left" justify="left">
          <p class="ab">
            <b>The League:</b>
          </p>

          <p>
            Every year in the odd semester
            <span
              style="color: #91ff00"
            >Arcadia : The Gaming Club of IIITV</span> organizes a league for the most loved computer game Counter Strike: Global Offensive .
            The league runs for about 2months with 5 teams competing against each other to be on the top. The teams are owned by the students themselves and also a formal auction is conducted to choose the players.
            We witness people getting happy, sad, emotional over the matches because they say
          </p>
          <p
            style="color: #91ff00; font-size: 16px"
            class="press"
          >"Gaming has no Religion, It itself is a religion"</p>
        </v-col>
      </v-row>
    </v-card>
    <!-- </v-col>
    </v-row>-->
  </v-container>
</template>

<script>
import Loader from "../components/Loader";

export default {
  name: "home",
  components: {
    Loader
  },
  data() {
    return {};
  }
};
</script>


<style>
.ab {
  font-size: 1.5em;
  color: #91ff00;
}
.fin {
  color: #91ff00;
}
.link {
  text-decoration: none;
}
.link:active {
  color: #91ff00;
  text-decoration: none;
}
.link:visited {
  color: #91ff00;
  text-decoration: none;
}
</style>
