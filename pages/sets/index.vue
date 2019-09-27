<template>
    <div class="container">
        <h1>Sets</h1>
        <table>
            <tr v-for="set in sets" :key="set.id">
                <td>{{ set.name }}</td>
                <td>{{ set.block }}</td>
                <td>{{ set.set_type }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import database from '../../components/firebaseInit'
export default {
    data() {
        return {
            cards: null,
            sets: null,
            info: null,
            filtered: null
        }
    },
    mounted() {
        
    },
    created() {
        this.fetchSets()
    },
    methods: {
        fetchSets: function() {
            axios
            .get('https://api.scryfall.com/sets')
            .then(response => {
                this.info = response
                this.assignSets()
            })
        },
        assignSets: function() {
            this.sets = this.info.data.data
        },
        fetchCards: function() {
            
        },
        assignCards: function() {

        },
        storeSets: function() {
            this.db.collection('mtgSets').add({
                name: this.sets.name,
                block: this.sets.block,
                set_type: this.sets.set_type,
                id: this.sets.id,
                slug: this.generateUUID()
            })
            .then(function(docRef) {
                console.log('Document written with ID: ', docRef.id)
            })
            .catch(function(error) {
                console.error('Error adding document: ', error)
            })
        },
        generateUUID() {
            let d = new Date().getTime()
            let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                let r = (d + Math.random() * 16) % 16 | 0
                d = Math.floor(d / 16)
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
            })
            return uuid
        }
    }
}
</script>

<style scoped>
img {
    background-color: #fff;
    padding: 2px;
    margin: 2px;
    border-radius: 1em;
}
</style>
