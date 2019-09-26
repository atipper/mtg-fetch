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
            <button @click="log">Log Me</button>
            <ul v-if="sets != null">
                <li v-for="set in sets" :key="set.id">
                    {{ set.name }}
                </li>
            </ul>
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
            info: null
        }
    },
    mounted() {
        this.assignSets()
    },
    created() {
        this.fetchSets()
    },
    methods: {
        fetchSets: function() {
            axios.get('https://api.scryfall.com/sets').then(
                response => (this.info = response)
            )
        },
        assignSets: function() {
            async function assign() {
                var setArr = this.info.data
                console.log(setArr)
                this.sets.push({
                    name: this.setArr.name,
                    id: this.setArr.id
                })
            }
        },
        log: function() {
            console.log(this.sets)
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
