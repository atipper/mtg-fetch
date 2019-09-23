<template>
    <div class="container">
    <script type="module">
        import * as Magic from 'mtgsdk'
        Magic.card.find(3).then(result =>{
            console.log(result.card.name)
        })
    </script>
    <h1>Search</h1>
    <p><nuxt-link to="/">Home</nuxt-link></p>
    <input type="text" name="search"/>
    <button type="text" @click="blackLotus()">Search</button>
    </div>
</template>

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