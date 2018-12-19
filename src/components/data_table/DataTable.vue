<template>
    <div>
        <table class="data-table">
            <slot name="header"/>
            <slot name="body"/>
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

