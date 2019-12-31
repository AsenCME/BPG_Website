<template>
    <div class="home">
        <PatternBG text="Transportr" repeat="2" />
        <Spacer space="50px" />
        <Landing />
        <Intro />
        <Buttons />
    </div>
</template>

<script>
import Landing from "../components/home-components/Landing";
import Intro from "../components/home-components/Intro";
import Buttons from "../components/home-components/Buttons";
import Spacer from "../components/common/Spacer";
import PatternBG from "../components/common/PatternBG";
export default {
    components: { Landing, Intro, Buttons, Spacer, PatternBG },
};
</script>
