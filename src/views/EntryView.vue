<!-- <template>
  <div class="about">
    <h1>This is an entry page</h1>
  </div>
  <div @showEntry="readEntry" :entry="entry">
    {{entry.title}}
  </div>
</template> -->

<!-- <script>
export default {
    props: {
        // entry: Object //not sure how this particular prop makes it here, we didn't send it to entry.vue from the parent or anywhere else, so how is it here?
        entry: {
            type: Object,
            default: () => {
                return {
                    title: "default title"
                }
            }
        }
    },
    methods: {
       readEntry(event) {
           console.log(event)
       }
    } 

}
</script> -->