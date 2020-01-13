<template>
  <div id="landing-page">
    <div class="text-container">
      <div class="title" data-aos="fade-right">
        <span class="text">Transportr</span>
      </div>
      <div class="slogan" data-aos="fade-down" data-aos-delay="200">
        <div class="text">Improving public tranportation externally.</div>
      </div>
      <div class="buttons-wrapper">
        <progressive-img
          :src="require('../../assets/google-play-button.png')"
          class="button"
          data-aos="zoom-in-right"
          data-aos-delay="400"
        />

        <progressive-img
          :src="require('../../assets/app-store-button.png')"
          class="button"
          data-aos="zoom-in-right"
          data-aos-delay="500"
        />
      </div>
    </div>
    <progressive-img
      :src="require('../../assets/illustrations/location.svg')"
      class="illustration"
      data-aos="fade-left"
    />

    <div class="square"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/landing.scss";
</style>
