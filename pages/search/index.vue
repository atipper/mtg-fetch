<template>
    <div class="container">
        <h1>Search</h1>
        <p>Enter a search query below using a text from a card name. A list will be populated based on the results.</p>
        <input v-model="cardSearch" type="text" name="search" @keyup.enter="saveCard(cardSearch)"/>
        <button type="text" @click="saveCard(cardSearch)" v-bind:disabled="cardSearch.length === 0">Search</button>
        <br>
        <table v-if="cards.length >= 1" class="cardResults">
            <tr v-for="card in cards" :key="card.id">
                <td>{{ card.name }}</td>
                <td>{{ card.setName }}</td>
                <td>{{ card.imageURL }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import * as Magic from 'mtgsdk'
export default {
    data() {
        return {
            cards: [],
            cardSearch: ''
        }
    },
    methods: {
        saveCard: function(cardName) {
            this.cards = []
            Magic.card.all({name: cardName, pageSize: 1})
            .on('data', card => {
                this.cards.push({
                    name: card.name,
                    id: card.id,
                    setName: card.setName,
                    imageURL: card.imageURL
                })
                this.cardSearch = ''
            })
        }
    }
}
</script>

<style scoped>
input {
    background-color:lightslategray;
}

button {
    background-color:darkgray;
    border-radius: 25%;
    padding: 2px;
}

button:disabled {
    background-color:gainsboro;
    color: black;
}

table,tr,td {
    border: rgb(255, 255, 255) !important;
    padding: 3px;
}
</style>