<template>
    <div class="container">
        <h1>Search</h1>
        <p>Enter a search query below using a text from a card name. A list will be populated based on the results.</p>
        <input v-model="cardSearch" type="text" name="search" @keyup.enter="saveCard(cardSearch)"/>
        <button name="search" type="text" @click="saveCard(cardSearch)" v-bind:disabled="cardSearch.length === 0">Search</button>
        <br>
        <table v-if="cards.length >= 1" class="cardResults">
            <tr class="tableHeader">
                <td>Card Name</td>
                <td>Set Name</td>
                <td>Image</td>
                <td>Price</td>
            </tr>
            <tr v-for="card in cards" :key="card.id">
                <td>{{ card.name }}</td>
                <td>{{ card.setName }}</td>
                <td><a :href="card.imageUrl" target="_blank"><img id="cardImage" :src="card.imageUrl" /></a></td>
                <td></td>
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
                    imageUrl: card.imageUrl
                })
                this.cardSearch = ''
            })
        }
    }
}
</script>

<style scoped>
input[type=text], select {
  background-color: lightgrey;
  color: rgb(0, 0, 0);
  width: 15%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
    background-color: rgb(109, 109, 109);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 1em;
}

button:disabled {
    background-color:gainsboro;
    color: black;
}

.cardResults {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.cardResults td {
    font-size: 1em;
}

.tableHeader {
    font-weight: bold;
}

.cardResults td, .cardResults th {
  border: 1px solid #ddd;
  padding: 8px;
}

.cardResults tr:nth-child(even){background-color: #838383;}

.cardResults tr:hover {
    background-color: #ddd;
    color: black;
}

.cardResults th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  width: 100%;
  background-color: rgb(131, 131, 131);
  color: white;
}

#cardImage {
    height: 150px;
}
</style>