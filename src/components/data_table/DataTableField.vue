<template>
    <td>
        {{ this.data }}
    </td>
</template>

<script>
export default {
    props:{
        data:{
            required:true,
            type:String
        },
        editable:{
            default:false,
            type:Boolean
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
