<template>
  <div id="footer">
    Gang of Four, All Rights Reserved &copy;
    <span>{{new Date().getFullYear()}}</span>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_common.scss";
#footer {
  background-color: $base-color-lighter;
  color: white;
  padding: 40px;
  font-size: 16px;
  text-align: center;
  z-index: 100;
}
</style>