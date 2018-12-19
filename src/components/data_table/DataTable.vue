<template>
    <div>
        <table class="data-table">
            <slot name="header"/>
            <slot name="body"/>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return{
        }
    },
}
</script>

<style lang="scss" scoped>

</style>

