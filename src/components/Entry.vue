<template>
    <div class="entry">

        <div>
                {{ entry.date }}
        </div>
       
        <details ref="details" class="input-sec">
            <summary  contenteditable="true" class="title" @input="editTitle">
                {{ entry.title }}
            </summary>
            <!-- <p id="date">
                {{ entry.date }}
            </p> -->
            <p contenteditable="true" class="content" @input="editContent">
                {{ entry.content }}
            </p>
        </details>
         <button @click="openDetail">
            Edit
        </button>
 
        <div id="btn-sec">
            <!-- <button  onclick=openDetail(1)>
                Edit
            </button> -->
            <button @click='$emit("delete", entry.id)'>
                Delete
            </button>
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



<style>
.entry {
    border-bottom: grey solid 0.5px;
    display: flex;
    justify-content: space-between;


}

#title {
    font-weight: bold;
}

#input-sec {
    
   
}

#btn-sec {
    display: flex;
    justify-content: space-evenly;
    padding-top: 20px;

}

details {
    flex: 1;
    text-align: left;
}

details > summary {
  padding: 4px;
  background-color: #eeeeee;
  border: none;
  box-shadow: 1px 1px 2px #bbbbbb;
  cursor: pointer;
}

details > p {
  background-color: #eeeeee;
  padding: 4px;
  margin: 0;
  box-shadow: 1px 1px 2px #bbbbbb;
}
</style>
