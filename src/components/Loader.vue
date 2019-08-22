<template>
  <vue-element-loading
    is-full-screen
    :active="showCustomizeLoader"
    background-color="rgba(50, 50, 50, 1)"
  >
    <img
      src="https://firebasestorage.googleapis.com/v0/b/csgo-auction.appspot.com/o/side-03.png?alt=media&token=91ce7293-e061-4a46-8929-d72bb6917499"
      class="my-3 rotate-vert-center"
      height="250px"
    />
  </vue-element-loading>
</template>

<script>
import VueElementLoading from "vue-element-loading";

export default {
  name: "Loader",
  components: {
    VueElementLoading
  },
  data() {
    return {
      showCustomizeLoader: true
    };
  },
  created() {
    setTimeout(() => {
      this.showCustomizeLoader = false;
    }, 800);
  }
};
</script>

<style>
</style>