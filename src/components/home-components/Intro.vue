<template>
  <div id="intro-page">
    <div class="section">
      <div class="text">
        <span>
          Are you tired of being confused by the transportations system? Are you tired of
          crammed trains and delays and other things that make the public transit horrible
          to use omfg!
        </span>
        <div class="line"></div>
      </div>
      <progressive-img
        :src="require('../../assets/illustrations/subway.svg')"
        class="illustration"
      />
      <div class="square first"></div>
    </div>

    <div class="section">
      <progressive-img
        :src="require('../../assets/illustrations/annotation.svg')"
        class="illustration"
      />
      <div class="text right">
        <span>
          Well, we can provide the solution! I have no idea how but I am confident and
          hopeful and maybe some day we will be able to finish this project. Unless we
          don't want to!
        </span>
        <div class="line"></div>
      </div>
      <div class="square second"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/intro.scss";
</style>
