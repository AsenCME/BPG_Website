<template>
  <div class="teammate-container">
    <img class="image" :src="imageURL" />
    <div class="text-container">
      <div class="name">{{ name }}</div>
      <div class="bio">{{ bio }}</div>
      <div class="square"></div>
    </div>
  </div>
</template>

<script>
export default { props: ["name", "bio", "imageURL"] };
</script>

<style lang="scss" scoped>
@import "../../styles/common";
.teammate-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .image {
    width: 50%;
    margin-bottom: -50px;
    position: relative;
    box-shadow: $shadow-2;
    border-radius: 20px;
    z-index: 10;
  }
  .text-container {
    position: relative;
    border-radius: 10px;
    box-shadow: $shadow-2;
    padding: $frame / 2 $frame;
    padding-top: 100px;
    background-color: $complementary-color;
    overflow: hidden;
    z-index: 5;

    .name {
      text-align: center;
      font-size: 32px;
      margin-bottom: 20px;
    }
    .bio {
      text-align: center;
      font-size: 16px;
    }
    .square {
      position: absolute;
      top: -10%;
      left: -10%;
      width: 8vw;
      height: 8vw;
      border-radius: 20px;
      transform: rotate(30deg);
      background-color: $secondary-color;
      z-index: -1;
    }
  }
}
</style>