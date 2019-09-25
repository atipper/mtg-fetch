<template>
    <div class="container">
        <h1>Sets</h1>
        <ul>
            <li :created="fetchSets" :mounted="fetchSets" :updated="fetchSets" v-for="set in sets" :key="set.id">{{ set.name }}</li>
        </ul>
    </div>
</template>

<script>
import * as Magic from 'mtgsdk'
export default {
    data() {
        return {
            sets: []
        }
    },
    methods: {
        fetchSets: function() {
            var setQuery = 'M13'
            console.log(setQuery)
            Magic.set.all({ name: setQuery })
            .on('data', set => {
                this.sets.push({
                    name: set.name,
                    block: set.block,
                    id: set.id
                })
            })
            console.log(this.sets)
        }
    }
}
</script>

<style scoped>

</style>