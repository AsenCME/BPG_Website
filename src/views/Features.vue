<template>
  <div id="features-page">
    <!-- Heading -->
    <Heading pretext="Features">
      We've packed a lot into this.
      <br />Take a look at the features available.
    </Heading>

    <!-- Features -->
    <div class="features-overview">
      <PatternBG text="Features" repeat="3" />
      <div class="left">
        <div class="feature-short">
          <div class="text">Heat Maps</div>
          <div class="circle"></div>
        </div>
        <div class="feature-short middle">
          <div class="text">Rating System</div>
          <div class="circle"></div>
        </div>
        <div class="feature-short">
          <div class="text">Trip Advising System</div>
          <div class="circle"></div>
        </div>
      </div>

      <img class="mockup" src="../assets/mockup.png" />

      <div class="right">
        <div class="feature-short">
          <div class="text">Journey History</div>
          <div class="circle"></div>
        </div>
        <div class="feature-short middle">
          <div class="text">Travel Info/Warnings</div>
          <div class="circle"></div>
        </div>
        <div class="feature-short">
          <div class="text">New! Rate your Conductor</div>
          <div class="circle"></div>
        </div>
      </div>

      <div class="square first"></div>
      <div class="square second"></div>
    </div>

    <!-- Features in details -->
    <div class="features-details-container">
      <div class="square"></div>
      <FeatureDetails
        v-for="(feature, index) in $store.state.features"
        :key="feature.name"
        :name="feature.name"
        :description="feature.description"
        :illustrationURL="feature.illustrationURL"
        :color="index%2==0 ? 'first' : 'second'"
      />
    </div>
  </div>
</template>

<script>
import PatternBG from "./../components/common/PatternBG";
import Heading from "./../components/common/Heading";
import FeatureDetails from "./../components/features-components/FeatureDetails.vue";
export default {
  components: { PatternBG, FeatureDetails, Heading }
};
</script>

<style lang="scss" scoped>
@import "../styles/features.scss";
</style><template>
  <div id="features-page">
    <!-- Heading -->
    <Heading pretext="Features">
      We've packed a lot into this.
      <br />Take a look at the features available.
    </Heading>

    <!-- Features -->
    <div class="features-overview">
      <PatternBG text="Features" repeat="3" />
      <div class="left">
        <div class="feature-short">
          <div class="text">Feature here</div>
          <div class="circle"></div>
        </div>
        <div class="feature-short middle">
          <div class="text">Feature here</div>
          <div class="circle"></div>
        </div>
        <div class="feature-short">
          <div class="text">Feature here</div>
          <div class="circle"></div>
        </div>
      </div>

      <progressive-img :src="require('../assets/mockup.png')" class="mockup" />

      <div class="right">
        <div class="feature-short">
          <div class="text">Feature here</div>
          <div class="circle"></div>
        </div>
        <div class="feature-short middle">
          <div class="text">Feature here</div>
          <div class="circle"></div>
        </div>
        <div class="feature-short">
          <div class="text">Feature here</div>
          <div class="circle"></div>
        </div>
      </div>

      <div class="square first"></div>
      <div class="square second"></div>
    </div>

    <!-- Features in details -->
    <div class="features-details-container">
      <div class="square"></div>
      <FeatureDetails
        v-for="(feature, index) in $store.state.features"
        :key="feature.name"
        :name="feature.name"
        :description="feature.description"
        :illustrationURL="feature.illustrationURL"
        :color="index%2==0 ? 'first' : 'second'"
      />
    </div>
  </div>
</template>

<script>
import PatternBG from "./../components/common/PatternBG";
import Heading from "./../components/common/Heading";
import FeatureDetails from "./../components/features-components/FeatureDetails.vue";
export default {
  components: { PatternBG, FeatureDetails, Heading }
};
</script>

<style lang="scss" scoped>
@import "../styles/features.scss";
</style>