<template>
    <div>
        <table class="data-table">
            <slot name="header"/>

            <tr v-for="data in allData" :key="data.id">
                <td>{{ data.id }}</td>
                <td>{{ data.name }}</td>
                <td>{{ data.description }}</td>
                <td>{{ $store.getters.dateTimeFormat(data.date) }}</td>
                <td>${{ data.amount }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import firebase from '../../configFirebase.js'
import { mapState } from 'vuex'

export default {
    props:{
        allData:{
            required:true,
            type:Array
        }
    },
    data(){
        return{
        }
    },
    methods:{
       
    },

}
</script>

<style lang="scss" scoped>

</style>

