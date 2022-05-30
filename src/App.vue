<template>
  <JournalView />
</template>

<script>
import JournalView from '@/views/JournalView.vue'
export default { //must have this!! cos must let programme know that the app.vue comes with the journal view
  components: {
    JournalView 
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
