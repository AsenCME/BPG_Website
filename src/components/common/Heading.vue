<template>
  <div class="heading">
    <div class="text">
      <slot></slot>
    </div>
    <div class="square"></div>
  </div>
</template>


<style lang="scss" scoped>
@import "../../styles/_common.scss";
.heading {
  color: white;
  width: 60%;
  padding-left: $frame;
  margin-top: $frame * 2;
  position: relative;
  z-index: inherit;
  margin-bottom: $frame * 2;

  .text {
    font-size: 60px;
    font-weight: 700;
    line-height: 70px;
    z-index: inherit;
  }

  .square {
    z-index: -1;
    width: 26vw;
    height: 26vw;
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