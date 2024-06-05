<template>
  <MenuHeader></MenuHeader>
  <MyStory></MyStory>
  <MyTimeline></MyTimeline>
  <SelPetitionUsa></SelPetitionUsa>
</template>

<script>
import MenuHeader from './components/MenuHeader.vue'
import MyStory from './components/MyStory.vue'
import MyTimeline from './components/MyTimeline.vue'
import SelPetitionUsa from './components/SelPetitionUsa.vue'

export default {
  name: 'App',
  components: {
    MenuHeader,
    MyStory,
    MyTimeline,
    SelPetitionUsa,
  }
}
</script>
