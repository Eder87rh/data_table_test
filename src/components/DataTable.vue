<template>
    <div>
        <table class="data-table">
            <tr>
                <th @click="sortById">
                    <i v-if="sortBy === 'id' && orientation === 'desc'" 
                        class="material-icons md-light">
                        arrow_downward
                    </i>
                    <i v-if="sortBy === 'id' && orientation === 'asc'" 
                        class="material-icons md-light">
                        arrow_upward
                    </i>
                    ID
                </th>
                <th @click="sortByName">
                    <i v-if="sortBy === 'name' && orientation === 'desc'" 
                        class="material-icons md-light">
                        arrow_downward
                    </i>
                    <i v-if="sortBy === 'name' && orientation === 'asc'"
                        class="material-icons md-light">
                        arrow_upward
                    </i> 
                    Name</th>
                <th
                    @click="sortByDescription"
                >
                    <i v-if="sortBy === 'description' && orientation === 'desc'" 
                        class="material-icons md-light">
                        arrow_downward
                    </i>
                    <i v-if="sortBy === 'description' && orientation === 'asc'"
                        class="material-icons md-light">
                        arrow_upward
                    </i> 
                    Description</th>
                <th
                    @click="sortByDate"
                >
                    <i v-if="sortBy === 'date' && orientation === 'desc'" 
                        class="material-icons md-light">
                        arrow_downward
                    </i>
                    <i v-if="sortBy === 'date' && orientation === 'asc'"
                        class="material-icons md-light">
                        arrow_upward
                    </i> 
                    Date
                </th>
                <th @click="sortByAmount">
                    <i v-if="sortBy === 'amount' && orientation === 'desc'" 
                        class="material-icons md-light">
                        arrow_downward
                    </i>
                    <i v-if="sortBy === 'amount' && orientation === 'asc'"
                        class="material-icons md-light">
                        arrow_upward
                    </i>
                    Amount</th>
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
import { mapState } from 'vuex'

export default {
    data(){
        return{
        }
    },
    methods:{
        sortById(){
            this.$store.commit('sortById')
            this.$store.commit('toggleSort')
        },
        sortByName(){
            this.$store.commit('sortByName')
            this.$store.commit('toggleSort')
        },
        sortByDescription(){
            this.$store.commit('sortByDescription')
            this.$store.commit('toggleSort')
        },
        sortByDate(){
            this.$store.commit('sortByDate')
            this.$store.commit('toggleSort')
        },
        sortByAmount(){
            this.$store.commit('sortByAmount')
            this.$store.commit('toggleSort')
        }
    },
    computed:{
        ...mapState({
            sortBy: ({modFilters}) => modFilters.sortBy,
            orientation: ({modFilters}) => modFilters.sortOrientation
        })
    }
}
</script>

<style lang="scss" scoped>

</style>

