<template>
  <div class="wrapper">
    <div class="title" @click="goto('/')">Transportr</div>
    <div class="menu">
      <div class="menu-item" @click="goto('/')">Home</div>
      <div class="menu-item" @click="goto('/features')">Features</div>
      <div class="menu-item" @click="goto('/learnmore')">Learn More</div>
      <div class="menu-item" @click="goto('/about')">About Us</div>
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
@import "../../styles/navigation.scss";
</style>