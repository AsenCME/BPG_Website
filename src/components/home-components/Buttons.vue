<template>
  <div id="home-buttons">
    <div class="button" v-on:click="goto('/features')">
      <div class="text">Features</div>
      <div class="line"></div>
      <div class="line other"></div>
    </div>
    <div class="spacer"></div>
    <div class="button" @click="goto('/about')">
      <div class="text">About</div>
      <div class="line"></div>
      <div class="line other"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goto(link) {
      this.$router.push(link);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/buttons.scss";
</style>