<template>
  <div id="learn-more-page">
    <Heading pretext="Learn more">
      <span>Find out how we intend to do deliver on our promises. Or don't. It's up to you really.</span>
    </Heading>

    <!-- Section #1 -->
    <div class="section how">
      <PatternBG text="How How How" repeat="2" />
      <div class="title">
        <span>How does it all work?</span>
        <div class="line"></div>
      </div>
      <div class="description">
        <span>It doesn't. At least now it does't because we have not figured out how it would work. Probably some location tracking, some AI, some blockchain, deep-learning and other buzzwords that get you to like what we have done in theory.</span>
      </div>
      <div class="cards-wrapper">
        <div class="container-title">Here are some FAQs for you:</div>
        <div class="cards-container">
          <Card title="Is my data saved?" description="Naturally. We collect data and then run ads tailord to you on our platform. We might even sell some of that data for sweet sweet cash." />
          <Card title="How can I rate?" description="You can't and you shouldn't." />
          <Card title="What counts as a trip?" description="LCD, DMT, Herion, Crack Cocaine, etc." />
          <Card title="How does the app predict delays?" description="By the power of Indian YouTubers who have taught me how to do AI." />
        </div>
      </div>
    </div>

    <!-- Section #2 -->
    <div class="section why">
      <div class="title">Why should you rate?</div>
      <div class="description">
        <span>I really don't know. Maybe you shouldn't rate if you don't want to. But guess what - the more you rate, the more data we have and next time your train is delayed, you will know, and you will choose an alternative route, maybe even one we have created fot you, who knows. But one thing is for sure, rate so you are not late!</span>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "./../components/common/Heading";
import PatternBG from "./../components/common/PatternBG";
import Card from "./../components/learn-more-components/Card";
export default { components: { Heading, PatternBG, Card } };
</script>

<style lang="scss" scoped>
@import "./../styles/learnmore.scss";
</style>