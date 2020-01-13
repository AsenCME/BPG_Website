<template>
  <div class="feature-details" :class="{color1: color == 'first', color2: color == 'second'}">
    <PatternBG :text="name" repeat="2" />
    <div class="text-container">
      <div class="name">{{name}}</div>
      <div class="description">{{description}}</div>
    </div>
    <progressive-img class="illustration" :src="illustrationURL" alt="Illustratiion" />
  </div>
</template>

<script>
import PatternBG from "../common/PatternBG";
export default {
  components: { PatternBG },
  props: ["name", "description", "illustrationURL", "color"]
};
</script>

<style lang="scss" scoped>
@import "../../styles/_common.scss";
.feature-details {
  overflow: hidden;
  padding: 50px $frame * 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .text-container {
    z-index: 2;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .name {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .description {
      font-size: 20px;
      font-weight: 400;
    }
  }

  .illustration {
    width: 40%;
    z-index: 2;
  }

  &.color1 {
    background-color: $base-color-light;
    color: white;
  }
  &.color2 {
    background-color: $complementary-color;
    color: black;
  }
}
</style>