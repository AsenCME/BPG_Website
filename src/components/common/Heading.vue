<template>
  <div class="heading">
    <div class="square"></div>
    <div class="pretext">{{ pretext }}</div>
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pretext"]
};
</script>

<style lang="scss" scoped>
@import "./../../styles/_common.scss";
.heading {
  color: white;
  width: 60%;
  padding-left: $frame;
  margin-top: $frame * 2;
  position: relative;
  z-index: inherit;
  margin-bottom: $frame * 2;
  z-index: 3;

  .pretext {
    font-weight: 200;
    font-size: 20px;
  }

  .text {
    font-size: 60px;
    font-weight: 700;
    line-height: 70px;
  }

  .square {
    box-shadow: $shadow-2;
    z-index: -1;
    width: 30vw;
    height: 30vw;
    background-color: $base-color-light;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 0px;
    transform: rotate(45deg);
    margin-left: -10vw;
    margin-top: -10vw;
  }
}
</style>