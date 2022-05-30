<template>
    <div class="main">
        <h1>
            My Journal
        </h1>
        <p>
            {{currentDate}}
        </p>
        <div class="inputs">
            <div>
                <input id="title" v-model="entry.title" placeholder="Title" name="Title" />
            </div>
            <div>
                <textarea id="content" v-model="entry.content" placeholder="Today I.." required></textarea>
            </div>
            <div>
             <button id="btnAdd" @click="addEntry" >Add</button>
            </div>
        </div>
        <Entries :entries="entries" />

    </div>
</template>



<script>
import Entries from '@/components/Entries.vue'

export default {
    name: 'JournalView',
    components: {
        Entries
    },
    data() {
        return {
            entry: {
                title: " ",
                content: " ",
                date: undefined,
            },
            entries: [],
            currentDate: this.getDate()
        }
    },
    methods: {
        createEntry() {
            let newEntry = Object.assign({}, this.entry);
            newEntry.date = new Date()
            console.log(newEntry)
            return newEntry

        },
        addEntry() {
            this.entries.push(this.createEntry())
            console.log(this.entries)
            this.entries
            this.entry = {
                title: " ",
                content: " ",
                date: undefined,
            }

        },
         getDate() {
            var today = new Date()
            var date = today.getDate() +'-'+(today.getMonth()+1)+'-' +today.getFullYear()
            return date
        }
    }

}

</script>


<style>
.main {
    font-family: 'Courier New', Courier, monospaces;
}


.inputs {
   
    width: 100%;
    height: 100%;
    margin: auto;
    margin-bottom: 24px;
 
   

}

#title {
    width: 800px;
    height: 24px;
    margin: 8px;
}

#content {
 
    min-width: 800px;
    min-height: 64px;
    margin: 8px;
}

#btnAdd {
    width: 800px;
}

</style>
