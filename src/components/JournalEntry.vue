<template>
    <div class="entry">
       
        <details ref="details" class="input-sec">
            <summary>
                <span class="title" @input="editTitle" contenteditable="true">{{ entry.title }}</span>
                <div class="date">{{ entry.date }}</div>
            </summary>
            <p contenteditable="true" class="content" @input="editContent">
                {{ entry.content }}
            </p>
        </details>
        <div class="actions">
            <button @click="openDetail">edit</button>
            <button @click='$emit("delete", entry.id)'>delete</button>
        </div>
    </div>

 <!-- //edit and delete the entry
 //when you click open on new page using router or open modal
 //do validation -->
</template>

<script>
export default {
    emits: ['delete', 'contentEdit', 'titleEdit' ],
    props: {
        entry: Object //not sure how this particular prop makes it here, we didn't send it to entry.vue from the parent or anywhere else, so how is it here?
    },
    methods: {
        editContent(event, id) { //the event is the payload
            var contentValue = event.target.textContent
            var id = this.entry.id
            console.log("editContent",contentValue, id)
            this.$emit("contentEdit", contentValue,id)

        },
        editTitle(event) {
            var titleValue = event.target.textContent
            var id = this.entry.id
            console.log("editTitle",titleValue, id)
            this.$emit("titleEdit", titleValue, id)

        }, 
        openDetail() {
            const pos = this.$refs.details;
            pos.open = !pos.open;
        }
    }
}
</script>



<style lang="scss" scoped>
.entry {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4px;
}

details {
    flex: 1;
    text-align: left;
}

.date {
    font-size: 14px;
}

.title {
    font-weight: 600;
    padding: 4px 8px;
}

details {
    border: grey solid 1px;
    border-radius: 4px;
    &:hover {
        outline: #a7c5fa solid 2px;
    }

    summary {
        padding: 12px;
        cursor: pointer;
    }

    p {
        padding: 4px;
        margin: 0;
        border-top: grey solid 0.5px;
        padding: 12px;
    }
}

.actions {
    display: flex;
    gap: 4px;
}
</style>


