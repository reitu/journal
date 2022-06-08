<template>
    <header>
        <h1>My Journal</h1>
        <p>{{ currentDate }}</p>
    </header>
    <div class="main">
        <div class="form">
            <input v-model="title" placeholder="Title" name="title" />
            <textarea v-model="content" placeholder="Today I.." name="content" required></textarea>
            <button @click="addEntry()">Add</button>
        </div>
        <div class="entries">
            <div class="pagination">
                <button :disabled="page == 1" @click="--page">previous</button>
                <button
                    v-for="index in lastPage"
                    :key="'pagination' + index"
                    :disabled="page == index"
                    @click="page = index"
                >
                    {{index}}
                </button>

                <button :disabled="page == lastPage" @click="++page">next</button>
            </div>
            <div class="entries-list">
                <JournalEntry
                    v-for="(entry) in pageEntries"
                    :key="entry.id"
                    :entry="entry"
                    @delete="deleteEntry"
                    @titleEdit="updateTitle"
                    @contentEdit="updateContent"
                />
            </div>
        </div>
    </div>
</template>

<script>
import JournalEntry from '@/components/JournalEntry.vue'

export default {
    name: 'JournalView',
    components: {
    JournalEntry
},
    data() {
        return {
            title: "",
            content: "",
            entries: [],
            currentDate: this.getDate(),
            page: 1,
            //page 0 being the originial first page else x = -1
            max: 5
        }
    },
    computed: {
        lastPage () {
            return Math.ceil((this.entries.length || 1) / this.max)
        },
        pageEntries() {
            let startFrom = (this.page - 1) * this.max

            return this.entries.slice(startFrom, startFrom + this.max)
        }
    },
    mounted () {
    },
    methods: {
        addEntry(title = this.title, content = this.content) {
            if (title == "") return 
            if (content == "") return 

            var entry = {
                title: title,
                content: content,
                id: Math.floor(Math.random() * 100),
                date: new Date().toLocaleDateString('en-us', { weekday: "long", month: "long", day: "numeric", year: "numeric" })
            }

            this.entries.unshift(entry)

            this.title = ""
            this.content = ""
        },
        getDate() {
            var today = new Date()
            var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
            return date
        },
        deleteEntry(event) {
            this.entries = this.entries.filter(item => item.id != event);
        },
        updateTitle(title, id) {
            const found = this.entries.find(element => element.id === id);
            found.title = title
        },
        updateContent(content, id) {
            const found = this.entries.find(element => element.id === id);
            found.content = content
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    text-align: left;
    border-bottom: 1px solid #ccc;
    padding: 24px;

    h1 {
        margin:0;
    }
    p {
        margin:0;
    }
}

.main {
    font-family: 'Courier New', Courier, monospaces;
    display: flex;
    padding: 16px;
    gap: 16px;

}

.form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 26%;

    input {
        height: 36px;
        line-height: 36px;
        padding: 0 8px;
        border-radius: 4px;
        border: 1px solid #CCC;
    }

    textarea {
        height: 60px;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #CCC;
    }

    button {
        padding: 8px;
        background: #4285F4;
        color: white;
        border: none;
        border-radius: 4px;
    }
}

@media only screen and (max-width: 900px) {
    .main {
        flex-direction: column;
    }

    .form {
        width: auto;
    }
}

.entries {
    flex: 1;
    .pagination {
        padding: 24px 0 32px;
        display: flex;
        gap: 4px;
        justify-content: flex-end;
    }

    .entries-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}
</style>
