<template>
  <div id="about-page">
    <!-- Headline -->
    <div class="headline">
      <div class="square"></div>
      <div class="square other"></div>
      <div class="title">
        <span>
          We are a team of four who are somewhat like-minded in our goal to improve public transportation for all. However, we all come from varying backgrounds. We are Asen a bulgarian-wiz of javascript, Derek an American with an east meets west persona, Franz, and Yulin a mathematician with deep interest in making music as well as friends with everyone!
        </span>
      </div>
      <div class="line"></div>
    </div>

    <!-- Team -->
    <div class="team-container">
      <PatternBG text="Team Team Team" repeat="10" />
      <Teammate
        class="teammate-wrapper"
        v-for="member in $store.state.team"
        :key="member.name"
        :class="{ 'leader': member.leader }"
        :name="member.name"
        :bio="member.bio"
        :imageURL="member.imageURL"
      />
    </div>

    <!-- Contacts -->
    <div class="contacts">
      <div class="title">
        <span>Get in touch with us</span>
        <div class="line"></div>
      </div>
      <div class="contacts-container">
        <Contact
          v-for="(contact, index) in $store.state.contacts"
          :key="index"
          :iconType="contact.iconType"
          :iconName="contact.iconName"
          :label="contact.label"
          :info="contact.info"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Teammate from "../components/aboutus-components/Teammate";
import Contact from "../components/aboutus-components/Contact";
import PatternBG from "../components/common/PatternBG";
export default { components: { Teammate, Contact, PatternBG } };
</script>

<style lang="scss" scoped>
@import "../styles/aboutus.scss";
</style>
