<template>
  <v-flex xs12 sm6 md3>
    <v-card class="mx-auto my-2" width="95%" tile :to="'/players/'+data.uid">
      <v-layout align-center justify-center pt-4>
        <v-avatar size="75%">
          <img
            src="https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
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