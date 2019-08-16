<template>
  <v-layout wrap>
    <v-row class="mx-auto">
      <v-col>
        <v-card dark max-width="800" class="mx-auto">
          <v-card-text class="white--text" pa-0>
            <div class="overline mb-0">{{timestamp}}</div>
            <v-list >
              <v-list-item>
                <div class="fontover">{{ this.data.announcement }}</div>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script>
import moment from "moment"

export default {
  name: "Announcement",
  props: ["data"],
  computed: {
      timestamp: function() {
          return moment(this.data.time).calendar()
      }
  }
};
</script>