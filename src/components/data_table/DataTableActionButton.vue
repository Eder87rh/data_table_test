<template>
    <div>
        <button class="button" 
            @click="action"
        >
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
        action:{
            required:true,
            type:Function,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
