<template>
    <div class="entries">
        <Entry v-for="(entry, key) in entries" :key="key" :entry="entry" />
    </div>
</template>

<script>
import Entry from './Entry.vue'

export default {
    name: 'Entries',
    components: {
        Entry
    },

    props: {
        entries: Array
    }
}


</script>

<style>
.entries {
    border: grey 0.5px solid;
    border-radius: 8px;
    width: 800px;
    height: 700px;
    margin: auto;


}
</style>
