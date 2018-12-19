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
            <tr v-for="payment in $store.getters.paymentsOrdered" :key="payment.id">
                <td>{{ payment.id }}</td>
                <td>{{ payment.name }}</td>
                <td>{{ payment.description }}</td>
                <td>{{ $store.getters.dateTimeFormat(payment.date) }}</td>
                <td>${{ payment.amount }}</td>
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

