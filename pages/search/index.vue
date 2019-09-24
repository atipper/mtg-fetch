<template>
    <div class="container">
        <h1>Search</h1>
        <p><nuxt-link to="/">Home</nuxt-link></p>
        <input type="text" name="search"/>
        <button type="text" @click="card()">Search</button>
    </div>
</template>
<script>
import * as Magic from 'mtgsdk'
export default {
    data() {
        return {
            card: function cardSearch(cardNum) {
                Magic.card.find(cardNum).then(result =>{
                    console.log(result.card.name)
                })
            }
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