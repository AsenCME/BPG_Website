<template>
  <div class="reason">
    <div class="square" :class="{'other': index % 2 == 1}">
      <div class="square inner"></div>
    </div>
    <div class="text-container">
      <div class="text">{{ text }}</div>
      <div class="explanation">
        <span>{{ explanation }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default { props: ["text", "explanation", "index"] };
</script>

<style lang="scss" scoped>
@import "../../styles/common";
.reason {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: calc(2vw + 20px);

  .square {
    display: flex;
    align-self: center;
    justify-content: center;
    width: 5vw;
    height: 5vw;
    background-color: $base-color-light;
    transform: rotate(45deg);
    border-radius: 20px;

    .inner {
      transform: scale(0.5) rotate(45deg);
      border-radius: 50%;
      background-color: $base-color;
    }

    &.other {
      background-color: $secondary-color;
    }
  }
  .text-container {
    margin-left: 2.5vw;

    .text {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .explanation {
      font-size: 16px;
      width: 50vw;
    }
  }
}
</style>