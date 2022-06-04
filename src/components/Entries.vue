<!-- <template>
    <div class="entries">
        <Entry v-for="(entry, key) in entries" :key="key" :entry="entry" @delete="logChange" />
    </div>
</template>

<script>
import Entry from './Entry.vue'

export default {
    emits: ['delete'], //you need to register the event you're gonna emit 
    name: 'Entries',
    components: {
        Entry
    },

    props: {
        entries: Array
    },
    methods: {

        logChange(event) {
            console.log('entries', event) //the "event" in this line is the data I'm emit via the emit to the other side, and it;s the responsibility of the other component to listen to what is being emitted if it intends to use it
            this.$emit("deleteItem", event) //so you must ca
        }

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
</style> -->
