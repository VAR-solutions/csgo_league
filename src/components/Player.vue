<template>
    <v-card class="mx-auto mb-2" width="95%" tile :to="'/players/'+data.uid">
      <v-layout align-center justify-center pt-4>
        <v-avatar size="75%">
          <img v-if="!data.photo"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/deadpool-1563973577.jpg?crop=0.563xw:1.00xh;0,0&resize=480:*"
          />
          <img v-else-if="data.photo"
            :src="data.photo" />
        </v-avatar>
      </v-layout>
      <v-layout align-center justify-center>
        <v-card-title class="fontover">{{ this.data.name.split(" ")[0] }}</v-card-title>
      </v-layout>
    </v-card>
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