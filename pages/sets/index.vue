<template>
    <div class="container">
        <h1>Sets</h1>
        <table>
            <tr v-for="set in sets" :key="set.id">
                <td>{{ set.name }}</td>
                <td>{{ set.block }}</td>
                <td>{{ set.set_type }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            sets: [],
            info: null,
            filtered: null
        }
    },
    mounted() {
        
    },
    created() {
        this.fetchSets()
    },
    methods: {
        fetchSets: function() {
            axios
            .get('https://api.scryfall.com/sets')
            .then(response => {
                this.info = response
                this.assignSets()
            })
        },
        assignSets: function() {
            this.sets = this.info.data.data
        },
        log: function() {
            console.log(this.scrySet[0])
        }
    },
    computed: {
        filteredSets() {
            
        }
    }
}
</script>

<style scoped>
img {
    background-color: #fff;
    padding: 2px;
    margin: 2px;
    border-radius: 1em;
}
</style>
