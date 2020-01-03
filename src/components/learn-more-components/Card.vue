<template>
  <div class="card">
    <div class="card-title">
      <span>{{ title }}</span>
      <div class="line"></div>
    </div>
    <div class="card-description">
      <span>{{ description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description"]
};
</script>

<style lang="scss" scoped>
@import "../../styles/common";
.card {
  background-color: $complementary-color;
  border-radius: 20px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  padding: $frame / 2;
  margin: 20px 0px;
  width: 25%;
  z-index: 3;
  cursor: crosshair;

  box-shadow: $shadow-1;
  transition: 0.3s $easer;

  .card-title {
    color: black;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    .line {
      height: 3px;
      width: 30%;
      background-color: $secondary-color;
      margin-top: 20px;
    }
  }

  .card-description {
    color: black;
    font-size: 16px;
    overflow: hidden;

    max-height: 0px;
    margin-top: 0px;
    transition: 0.3s $easer;
  }

  &:hover {
    box-shadow: $shadow-hover;

    .card-description {
      max-height: 1000px;
      margin-top: 20px;
    }
  }
}
</style>