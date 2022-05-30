<template>
    <div class="entry">
        <div id="input-sec">
            <div id="title">
                {{ entry.title }}
            </div>
            <div id="btn-sec">
                <button>
                    Edit
                </button>
                <button>
                    Delete
                </button>
            </div>
        </div>
        <div id="content">
            {{ entry.content }}
        </div>
        <div id="date">
            {{ entry.date }}
        </div>
    </div>

 //edit and delete the entry
 //when you click open on new page using router or open modal
 //do validation
</template>


<style>
.entry {
    border-bottom: grey solid 0.5px;
    width: 100%;
    height: 200px;
    


}

#title {
    font-weight: bold;
}

#input-sec {
    display: flex;
    justify-content: space-between;
}

#btn-sec {
    display: flex;

}
</style>

<script>
export default {
    props: {
        entry: Object //not sure how this particular prop makes it here, we didn't send it to entry.vue from the parent or anywhere else, so how is it here?
    }
}
</script>