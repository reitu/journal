<template>

    <div class="main">
        <h1>
            My Journal
        </h1>
        <p>
            {{ currentDate }}
        </p>
        <div class="inputs">
            <div>
                <input id="title" v-model="entry.title" placeholder="Title" name="Title" />
            </div>
            <div>
                <textarea id="content" v-model="entry.content" placeholder="Today I.." required></textarea>
            </div>
            <div>
                <button id="btnAdd" @click="addEntry">Add</button>
            </div>
        </div>
        <!-- <a button emits data out/emits an event: THIS IS A NOTE" /> -->
        <Entry v-for="(entry) in entries" :key="entry.id" :entry="entry" @delete="deleteEntry" @titleEdit="updateTitle"
            @contentEdit="updateContent" />

    </div>
     <!-- <div v-for="(entry) in entries" :key="entry.id" :entry="entry" class="posts">
           <a :href="`${entry.title}`">{{ entry.title }}</a>
            <a href="http://localhost:8081/entry" @click='$emit("showEntry",entry.id )'>{{ entry.title }}</a>
    </div> -->

</template>



<script>
import Entry from '@/components/Entry.vue'

export default {
    //emits: 'showEntry',
    name: 'JournalView',
    components: {
        Entry
    },
    data() {
        return {
            entry: {
                id: undefined,
                title: " ",
                content: " ",
                //contentMin: " ",
                date: undefined,
            },
            entries: [],
            currentDate: this.getDate()
        }
    },
    methods: {
        createEntry() {
            let newEntry = Object.assign({}, this.entry);
            newEntry.id = Math.floor(Math.random() * 100);
            //newEntry.date = new Date()
            // var d = new Date();
            // var dateToday = d.getDate();
            // var month = dateToday.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
            // var year = dateToday.getFullYear();
            // //newEntry.contentMin = newEntry.content.substring(0, 50),
            //     console.log(newEntry)
            //     var date = dateToday + "/" + month + "/" + year;
            //     newEntry.date= date
            let now = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric", year:"numeric"});
            console.log(now)
            newEntry.date=now
            //console.log("the min text is", newEntry.contentMin)
            return newEntry

        },
        addEntry() {
            this.entries.push(this.createEntry())
            console.log(this.entries)
            this.entries
            this.entry = {
                title: " ",
                content: " ",
                //contentMin: " ",
                date: undefined,
            }
        },
        getDate() {
            var today = new Date()
            var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
            return date
        },
        deleteEntry(event) {
            console.log("deleting here", event)
            this.entries = this.entries.filter(item => item.id != event);
            console.log(this.entries)

        },
        updateTitle(title, id) {
            console.log("hello TITLE after clicking on the vue", title)
            console.log("this is the id i hVA E PASSED", id)
            const found = this.entries.find(element => element.id === id);
            found.title = title
            console.log("this is found", found.title)
            console.log(this.entries)
            console.log("found is above")

            //this above is the entry object 



        },
        updateContent(content, id) {
            console.log("hello CONTENT after clicking on the vue", content)
            console.log("this is the id i hVA E PASSED", id)
            const found = this.entries.find(element => element.id === id);
            found.content = content
            //var index = obj.findIndex(e => e.name === 'John');
            // obj.forEach(o => {
            //     if (o.name === 'John') {
            //         console.log(o);
            //     }
            // });
        }
    }




}

</script>


<style>
.container {
    display: flex;

}

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
