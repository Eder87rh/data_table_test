<template>
    <div>
        <headerComponent/>
        <div class="container">
           <data-table>
               <data-table-header slot="header" :titles="titles"/>
               <tr slot="body" v-for="(data,index) in $store.getters.paymentsOrdered" :key="data.id">
                   <data-table-field :data="data.id" :index="index"/>
                   <data-table-field :data="data.name" :index="index" />
                   <data-table-field :data="data.description" :index="index" :editable="true"/>
                   <data-table-field :data="data.date" :index="index"/>
                   <data-table-field :data="data.amount" :index="index"/>
               </tr>
           </data-table>
        </div>
    </div>
</template>

<script>
import headerComponent from '../components/HeaderComponent'
import dataTable from '../components/data_table/DataTable'
import dataTableHeader from '../components/data_table/DataTableHeader'
import dataTableField from '../components/data_table/DataTableField'

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
        dataTableField
    }
}
</script>
<style lang="scss" scoped>

</style>


