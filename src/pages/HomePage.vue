<template>
    <div>
        <headerComponent title="Data-Table Brite Core" subtitle="Created by Eder Ramírez Hernández"/>
        <div class="container">
           <data-table>
               <data-table-header slot="header" :titles="titles"/>
               <tr slot="body" v-for="(data,index) in $store.getters.paymentsOrdered" :key="data.id">
                   <data-table-field :data="data.id" :index="index"/>
                   <data-table-field :data="data.name" :index="index" />
                   <data-table-field :data="data.description" :index="index" :editable="true"/>
                   <data-table-field :data="$store.getters.dateTimeFormat(data.date)" :index="index"/>
                   <data-table-field :data="`$ ${data.amount}`" :index="index"/>
                   <td>
                       <data-table-action-button 
                            title="save to firestore"
                            :action="() => $store.dispatch('saveDataFirestore', data)"
                        />
                   </td>
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
import dataTableActionButton from '../components/data_table/DataTableActionButton'

export default {
    data(){
        return {
            titles:['id', 'name', 'description', 'date', 'amount', 'actions'],
        }
    },
    components:{
        headerComponent,
        dataTable,
        dataTableHeader,
        dataTableField,
        dataTableActionButton
    }
}
</script>
<style lang="scss" scoped>

</style>


