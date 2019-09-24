<template>
    <div class="container">
        <h1>Search</h1>
        <p><nuxt-link to="/">Home</nuxt-link></p>
        <input v-model="cardSearch" type="text" name="search" @keyup.enter="saveCard(cardSearch)"/>
        <button type="text" @click="saveCard(cardSearch)">Search</button>
        <br>
        <ul>
            <li v-for="card in cards" :key="card.id">{{ card.name }}</li>
        </ul>
    </div>
</template>

<script>
import * as Magic from 'mtgsdk'
export default {
    data: {
        state: 'default',
        cardSearch: '',
        cards: []
    },
    methods: {
        saveCard: function(cardName) {
            Magic.card.all({name: cardName, pageSize: 1})
            .on('data', card => {
                var name = card.name
                var id = card.id
                console.log(name)
                console.log(id)
                cards.push({
                    name: this.name,
                    id: this.id
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
</style>