<template>
  <v-flex xs12 sm6 md3>
    <v-card class="mx-auto my-2" width="95%" tile :to="'/players/'+data.uid">
      <v-layout align-center justify-center pt-4>
        <v-avatar size="75%">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/csgo-auction.appspot.com/o/side-03.png?alt=media&token=91ce7293-e061-4a46-8929-d72bb6917499"
          />
        </v-avatar>
      </v-layout>
      <v-layout align-center justify-center>
        <v-card-title>{{ this.data.name }}</v-card-title>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "player",
  props: ["data"],
  data() {
    return {
      
    };
  }
};
</script>