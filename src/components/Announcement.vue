<template>
  <v-flex>
    <v-card color="#385F73" dark>
      <v-card-text class="white--text">
        <div class="headline mb-2">{{ this.data.announcement }}</div>{{ this.data.time.seconds | moment('calendar') }}
      </v-card-text>
    </v-card>
  </v-flex>
</template>
<script>
import VueMoment from "vue-moment"

export default {
  name: "announcement",
  props: ["data"],
  created() {
    console.log("Dfghh");
  }
};
</script>