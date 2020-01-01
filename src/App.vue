<template>
  <div id="app">
    <Navigation />
    <Spacer space="50px" />
    <router-view />
  </div>
</template>

<script>
import Spacer from "./components/common/Spacer";
import Navigation from "./components/common/Navigation";
export default {
  components: { Navigation, Spacer }
};
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
