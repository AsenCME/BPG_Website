<template>
  <div id="app">
    <Navigation />
    <Spacer space="120px" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Spacer from "./components/common/Spacer";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
export default {
  components: { Navigation, Spacer, Footer }
};
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
