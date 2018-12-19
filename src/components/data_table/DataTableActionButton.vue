<template>
    <div>
        <button class="button">
            {{ this.title.toUpperCase() }}
        </button>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            required:true,
            type:String
        },
        data:{
            required:true,
            type:Object,
        },
        action:{
            required:true,
            type:Function,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
