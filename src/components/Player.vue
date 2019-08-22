<template>
  <v-card class="mx-auto mb-2" width="95%" tile :to="'/players/'+data.uid">
    <v-layout align-center justify-center pt-4>
      <v-avatar size="240">
        <img :src="data.photo" @error="imgUrlAlt" />
      </v-avatar>
    </v-layout>

    <p class="fin mt-3" justify="center" align="center">{{ this.data.tag }}</p>

    <p
      class="fontover"
      style="font-size: 1.8em; margin-top: -8%"
      justify="center"
      align="center"
    >{{ this.data.name.split(" ")[0] }}</p>
  </v-card>
</template>

<script>
export default {
  name: "player",
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    imgUrlAlt(event) {
      event.target.src =
        "https://firebasestorage.googleapis.com/v0/b/csgo-auction.appspot.com/o/side-03.png?alt=media&token=91ce7293-e061-4a46-8929-d72bb6917499";
    }
  }
};
</script>