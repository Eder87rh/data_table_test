<template>
    <div >
        <table class="data-table">
            <tr>
                <th >ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
                <th>Amount</th>
            </tr>
            <tr v-for="data in $store.state.data" :key="data.id">
                <td>{{ data.id }}</td>
                <td>{{ data.name }}</td>
                <td>{{ data.description }}</td>
                <td>{{ data.date }}</td>
                <td>{{ data.amount }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import firebase from '../configFirebase.js'

export default {
    data(){
        return{
        }
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>

</style>

