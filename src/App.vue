<template>
  <JournalView />
  <!-- <EntryView /> -->
</template>

<script>
import JournalView from '@/views/JournalView.vue'
// import EntryView from '@/views/EntryView.vue'
export default { //must have this!! cos must let programme know that the app.vue comes with the journal view
  components: {
    JournalView, 
    // EntryView
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
