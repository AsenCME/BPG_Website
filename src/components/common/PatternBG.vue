<template>
    <div class="background-letters">
        <div v-for="i in +repeat" :key="i">
            <div>{{ text }}</div>
            <div class="second">{{ text }}</div>
            <div class="third">{{ text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["text", "repeat"],
};
</script>

<style lang="scss" scoped>
.background-letters {
    overflow: hidden;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    position: absolute;
    color: #111111;
    mix-blend-mode: color-dodge;
    font-weight: 700;
    font-size: 200px;
    z-index: 0;
    line-height: 185px;

    .second {
        margin-left: 40vw;
    }

    .third {
        margin-left: -20vw;
    }
}
</style>
