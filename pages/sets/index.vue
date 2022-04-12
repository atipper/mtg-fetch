<template>
    <div class="container">
        <h1>Sets</h1>
        <table class="setResults">
            <tr class="tableHeader">
                <td>Set Name</td>
                <td>Set Block</td>
                <td>Set Type</td>
            </tr>
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
import db from '~/plugins/firebase.js'
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
            db.collection("mtgSets").add({
                    id: this.sets.id,
                    tcgplayer_id: this.sets.tcgplayer_id,
                    name: this.set.name,
                    block: this.sets.block,
                    set_type: this.sets.set_type,
                    card_count: this.sets.card_count,
                    icon_svg_uri: this.sets.icon_svg_uri,
                    search_uri: this.sets.search_uri,
                    //slug: this.generateUUID(),
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
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
.setResults {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.setResults td {
    font-size: 1em;
}

.tableHeader {
    font-weight: bold;
}

.setResults td, .setResults th {
  border: 1px solid #ddd;
  padding: 8px;
}

.setResults tr:nth-child(even){background-color: #838383;}

.setResults tr:hover {
    background-color: #ddd;
    color: black;
}

.setResults th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  width: 100%;
  background-color: rgb(131, 131, 131);
  color: white;
}

#setImage {
    height: 150px;
}
</style>
