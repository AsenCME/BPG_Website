<template>
  <div class="home">
    <PatternBG text="Transportr" repeat="2" />
    <Landing />
    <Intro />
    <Buttons />
  </div>
</template>

<script>
import Landing from "../components/home-components/Landing";
import Intro from "../components/home-components/Intro";
import Buttons from "../components/home-components/Buttons";
import PatternBG from "../components/common/PatternBG";
export default {
  components: { Landing, Intro, Buttons, PatternBG }
};
</script>
