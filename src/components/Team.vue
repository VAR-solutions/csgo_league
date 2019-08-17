<template>
  <v-flex xs12 sm6 md4>
    <v-card class="mx-auto my-2" width="95%" tile >
      <v-layout align-center justify-center pt-4>
        <v-avatar size="75%">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadpool-1563973577.jpg?crop=0.563xw:1.00xh;0,0&resize=480:*"
          />
        </v-avatar>
      </v-layout>
      <v-layout align-center justify-center>
        <v-card-title class="fin lexend">{{ this.data.name }}</v-card-title>
        
      </v-layout>
      <p class="fontover" justify ="center" align="center" style="font-size: 1.2em">Team Owner: {{this.data.owner}}</p>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "Team",
  props: ["data"],
  data() {
    return {};
  }
};
</script>