<template>
  <div id="learn-more-page">
    <Heading pretext="Learn more">
      <span>Find out how we intend to do deliver on our promises.</span>
    </Heading>

    <!-- Section #1 -->
    <div class="section how">
      <PatternBG text="How How How" repeat="1" />
      <div class="square"></div>
      <div class="title">
        <span>How does it all work?</span>
        <div class="line"></div>
      </div>
      <div class="description">
        <span>Using anonymous location tracking with active participation of our users, we expect to streamline our heat mapping system, that will display, in an easy to use user-interface, where the problem areas are, as well as potential areas where one might experience delays, or full trains where one might experience an uncomfortable riding experience. Users will have the chance to help not only themselves, but also their fellow Müncheners by reporting inconsistencies, inconveniences, as well as rating their overall ride. This data will be input into a sort of blockchain where all like data will be analyzed to find patterns. And these patterns will be analyzed by our app to produce alternatives for all riders of MVV.</span>
      </div>
      <div class="cards-wrapper">
        <div class="container-title">Here are some FAQs for you:</div>
        <div class="cards-container">
          <Card
            title="Is my data saved?"
            description="Only data that the user chooses to share will be used. However, any data used will only be used to choose and run ads tailored to you on our platform. Opting out of data sharing will only cause our app to display ads that may or may not be a good fit for the user."
          />
          <Card
            title="How can I rate?"
            description="Rating is easier than ever. You will be asked to rate when our app knows that you have finished your journey. If you choose not to rate the trip right away? No problem, you will be notified at a frequency of your choice, or you can select a journey from your journey history at any time and give it a rating. However, it is always better to rate your journey as soon as you can, as it will help us improve our app for your future transportation experiences."
          />
          <Card title="What counts as a trip?" description="LCD, DMT, Herion, Crack Cocaine, etc." />
          <Card
            title="How does the app predict delays?"
            description="Transportr will cull all data and through advanced AI learning techniques will weed out outlying data and analyze patterns in data provided by the transportation department and by information collected from its users."
          />
        </div>
      </div>
    </div>

    <!-- Section #2 -->
    <div class="section why">
      <PatternBG text="Rate Rate Rate" repeat="1" />
      <div class="title">
        <span>Why should you rate?</span>
        <div class="line"></div>
      </div>
      <div class="description">
        <span>Rating only requires a few seconds of your time after each journey. Rating can only help you. By rating you are allowing our app to grow its databases and to improve the information it provides. The app then can give more precise options catered to your needs. The more you rate, the more data we have and next time your train is delayed, you will know, and you can easily choose an alternative route, maybe even one we have created and customized for you. But one thing is for sure, rate so you are not late!</span>
      </div>
      <div class="rate-prompt">
        <Reason
          v-for="(reason, index) in $store.state.reasons"
          :key="index"
          :text="reason.text"
          :explanation="reason.explanation"
          :index="index"
        />
      </div>
    </div>

    <!-- Secion #3 -->
    <div class="survery-results">
      <div class="headline">
        <span>
          After conducting extensive research and asking already over 100-people whether they would use the app or not, we have concluded that continuing with this project is highly advisable. We have found an astounding amount of people who would like to improve their public transpotation in often more ways than one. We have received a lot of helpful input. And we look forward to hearing more of what people have to say
          <span
            class="dot"
          >.</span>
        </span>
      </div>
      <div class="line"></div>
      <div class="text">
        <span>Since it is no secret that the public transportation in Munich is out-dated, inefficient, and anything but reliable. We feel it is our public duty to end procrastination related with improving the official public transportation system, and start doing what we can as a society. We no longer want to wait endlessly for our government to go through 20-years of paperwork and bureaucracy, to do what they could be doing now. We have the technology, so why wait? Let's make "Our" public transportation system the best it can be. Transportr is our portal into the future.</span>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "./../components/common/Heading";
import PatternBG from "./../components/common/PatternBG";
import Card from "./../components/learn-more-components/Card";
import Reason from "./../components/learn-more-components/Reason";

export default { components: { Heading, PatternBG, Card, Reason } };
</script>

<style lang="scss" scoped>
@import "./../styles/learnmore.scss";
</style>