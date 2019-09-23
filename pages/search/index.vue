<template>
    <div class="container">
        <h1>Search</h1>
        <p><nuxt-link to="/">Home</nuxt-link></p>
    <input type="text" name="search"/>
    <button @click="blackLotus()">Lotus</button>
</div>
</template>
<script>
Vue.component('mtg-fetch', {
    template: '#mtgfetch',
    props: {
        updateCard: Number
    },
    data: function() {
        return { card: this.cardNumber }
    },
    methods: {
        card: function() {
            
        }
    }
})
</script>
<style scoped>
input {
    background-color:lightslategray;
}
</style>