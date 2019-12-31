<template>
    <div id="app">
        <Navigation />
        <router-view />
    </div>
</template>

<script>
import Navigation from "./components/common/Navigation";
export default {
    components: { Navigation },
};
</script>

<style lang="scss">
@import "./styles/app.scss";
</style>
