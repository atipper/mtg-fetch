<template>
    <div class="container">
        <h1>Sets</h1>
        <ul>
            <li v-for="set in sets" :key="sets.id">{{ set.name }}</li>
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
            Magic.set.all.then({
                var sets = this.sets
                for each (var set in sets) {
                    return set
                }
            })
        }
    }
}
</script>

<style scoped>

</style>