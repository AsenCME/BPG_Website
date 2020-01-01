<template>
  <div id="features-page">
    <!-- Heading -->
    <Heading>
      We've packed a lot into this.
      <br />Take a look at the features available.
    </Heading>

    <!-- Features -->
    <div class="features-overview">
      <div class="left">
        <div class="feature-short">
          <div class="text">Feature here</div>
          <div class="line"></div>
        </div>
        <div class="feature-short">
          <div class="text">Feature here</div>
          <div class="line"></div>
        </div>
        <div class="feature-short">
          <div class="text">Feature here</div>
          <div class="line"></div>
        </div>
      </div>
      <img class="mockup" src="../assets/mockup.png" />
      <div class="right">
        <div class="feature-short">
          <div class="text">Feature here</div>
          <div class="line"></div>
        </div>
        <div class="feature-short">
          <div class="text">Feature here</div>
          <div class="line"></div>
        </div>
        <div class="feature-short">
          <div class="text">Feature here</div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../components/common/Heading.vue";
export default { components: { Heading } };
</script>

<style lang="scss" scoped>
@import "../styles/features.scss";
</style>