<template>
  <div class="container">
    <TheNavbar />
    <TheContent/>
  </div>
</template>

<script>
//B1
import Button from "./components/base/bbutton.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheContent from "./components/layout/TheContent.vue";
export default {
  name: "App",
  components: {
    Button,
    TheContent,
    TheNavbar,
  },
};
</script>

<style>
@import url(../src/css/main.css);
</style>
