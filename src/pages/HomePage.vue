<template>
    <div>
        <headerComponent/>
        <div class="container">
           <data-table />
        </div>
    </div>
</template>

<script>
import headerComponent from '../components/HeaderComponent'
import dataTable from '../components/DataTable'
export default {
    data(){
        return {

        }
    },
    components:{
        headerComponent,
        dataTable
    }
}
</script>
<style lang="scss" scoped>

</style>


