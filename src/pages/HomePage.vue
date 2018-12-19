<template>
    <div>
        <headerComponent/>
        <div class="container">
           <data-table :allData="$store.getters.paymentsOrdered">
               <data-table-header slot="header" :titles="titles"/>
           </data-table>
        </div>
    </div>
</template>

<script>
import headerComponent from '../components/HeaderComponent'
import dataTable from '../components/data_table/DataTable'
import dataTableHeader from '../components/data_table/DataTableHeader'

export default {
    data(){
        return {
            titles:['id', 'name', 'description', 'date', 'amount'],
        }
    },
    components:{
        headerComponent,
        dataTable,
        dataTableHeader,

    }
}
</script>
<style lang="scss" scoped>

</style>


