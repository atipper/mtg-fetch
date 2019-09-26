<template>
    <div class="container">
        <h1>Sets</h1>
        <!--<table>
            <tr v-for="set in sets" :key="set.id">
                <td>{{ set.name }}</td>
                <td>{{ set.block }}</td>
                <td>{{ set.releaseDate }}</td>
            </tr>
        </table>-->
        <div>
            <button @click="fetchScryfallImage">Generate</button>
            <p v-if="fallSet != null">
            Set: {{ fallSet.name }}<br><img :src="fallSet.icon_svg_uri" height="50px"/><br>Card count: {{fallSet.card_count}}
            </p>
        </div>
    </div>
</template>

<script>
import * as Magic from 'mtgsdk'
import axios from 'axios'
export default {
    data() {
        return {
            sets: [],
            info: null,
            fallSet: null
        }
    },
    mounted() {
        axios
        .get('https://api.scryfall.com/sets/aer')
        .then(response => (this.info = response))
    },
    created: function() {
        this.fetchSets()
    },
    methods: {
        fetchSets: function() {
            Magic.set.all({block: '', border: 'black'})
            .on('data', sets => {
                this.sets.push({
                    name: sets.name,
                    block: sets.block,
                    id: sets.id,
                    releaseDate: sets.release_date
                })
            })
        },
        fetchScryfallImage: function() {
            axios
            .get('https://api.scryfall.com/sets/aer')
            .then(response => (this.info = response))

            this.fallSet = this.info.data
            console.log(this.fallSet)
        }
    }
}
</script>

<style scoped>

</style>