<template>
    <div class="container">
        <h1>Search</h1>
        <p><nuxt-link to="/">Home</nuxt-link></p>
        <input v-model="cardSearch" type="text" name="search" @keyup.enter="submitCard"/>
        <button type="text" @click="test">Search</button>
        <br>
        <ul>
            <li v-for="card in test" :key="card.name">{{ card.name }}</li>
        </ul>
    </div>
</template>

<script>
import * as Magic from 'mtgsdk'
export default {
    data: {
        state: 'default',
        cardSearch: '',
        cards: [
            {
                name: 'Black Lotus',
                rarity: 'Mythic'
            }
        ]
    },
    methods: {
        cardQuery: function() {
            card.all({ name: cardSearch, pageSize: 1 })
            .on('data', card => {
                return card.name
            })
        },
        submitCard: function(cardSearch) {
            this.card.push({
                name: this.name,
                rarity: this.rarity
            })
        },
        test: function() {
            // This functionally works, but speed is slow, need to quicken the results
            Magic.card.all({name: 'Squee', pageSize: 1})
            .on('data', card => {
                console.log(card.name)
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
</style>