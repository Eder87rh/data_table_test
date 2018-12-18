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
            <tr v-for="data in data" :key="data.id">
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
export default {
    data(){
        return{
            data:[
                {
                    id: '3471DA17-401F-9633-BF81-4CADA6FD5C79',
                    name: 'Kyra Lester',
                    description: 'Curabitur dictum. Phasellus in',
                    date: '2017-07-23T04:24:49-07:00',
                    amount: '345.54'
                },
                {
                    id: '3471DA17-401F-9633-BF81-4CADA6FD5C79',
                    name: 'Kyra Lester',
                    description: 'Curabitur dictum. Phasellus in',
                    date: '2017-07-23T04:24:49-07:00',
                    amount: '345.54'
                }
            ]
        }
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>

</style>

