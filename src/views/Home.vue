<template>
  <div class="home">
    <Landing />
    <Intro />
  </div>
</template>

<script>
import Landing from "../components/home-components/Landing";
import Intro from "../components/home-components/Intro";
export default {
  components: { Landing, Intro }
};
</script>
