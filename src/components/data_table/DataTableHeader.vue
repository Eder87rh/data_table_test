<template>
    <tr>
        <th v-for="(title, index) in titles" 
            @click="$store.commit('setSortBy', title)"
            :key="index">
            <i v-if="sortBy === title && orientation === 'desc'" 
                class="material-icons md-light">
                arrow_downward
            </i>
            <i v-if="sortBy === title && orientation === 'asc'" 
                class="material-icons md-light">
                arrow_upward
            </i>
            {{ title.toUpperCase() }}
        </th>
    </tr>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props:{
        titles:{
            required:true,
            type:Array,
        }
    },
    data(){
        return{

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
