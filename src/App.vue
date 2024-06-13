<template>
  <MenuHeader></MenuHeader>
  <MyStory></MyStory>
  <MyTimeline></MyTimeline>
  <SelPetitionUsa></SelPetitionUsa>
  <DisclaimerFooter></DisclaimerFooter>
</template>

<script>
import MenuHeader from './components/MenuHeader.vue'
import MyStory from './components/MyStory.vue'
import MyTimeline from './components/MyTimeline.vue'
import SelPetitionUsa from './components/SelPetitionUsa.vue'
import DisclaimerFooter from './components/DisclaimerFooter.vue'

export default {
  name: 'App',
  components: {
    MenuHeader,
    MyStory,
    MyTimeline,
    SelPetitionUsa,
    DisclaimerFooter,
  }
}
</script>
