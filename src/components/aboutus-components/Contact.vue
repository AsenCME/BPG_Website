<template>
  <div class="contact">
    <div class="square">
      <fa-icon class="icon" :icon="[iconType, iconName]"></fa-icon>
    </div>
    <div class="label">{{ label }}</div>
    <div class="info">{{ info }}</div>
  </div>
</template>

<script>
export default { props: ["iconType", "iconName", "label", "info"] };
</script>

<style lang="scss" scoped>
@import "../../styles/common";
.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: $frame / 2;

  .square {
    width: 8vmax;
    height: 8vmax;
    background-color: $base-color-light;
    box-shadow: $shadow-2;
    border-radius: 20px;
    transform: rotate(45deg);
    margin-bottom: calc(1vw + 20px);
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      transform: rotate(-45deg);
      color: $complementary-color;
      font-size: 40px;
    }
  }

  .label {
    font-size: 20px;
    color: white;
    font-weight: 700;
  }

  .info {
    font-size: 18px;
    font-weight: 200;
    color: white;
    margin-top: 10px;
  }
}
</style>
