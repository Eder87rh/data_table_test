<template>
    <td>
        <div v-if="!editing" class="data-table-field-container">
            <div>
                {{ this.data }}
            </div>
            <i v-if="this.editable"
                class="material-icons md-18 md-light editable-icon"
                @click="editing = !editing"
            >
                edit
            </i>
        </div>
        <div v-else
            class="data-table-field-container-vertical"
        >
            <textarea v-model="value" class="textarea"/>
            <button class="button"
                @click="saveNewValue"
            >
                SAVE
            </button>
        </div>
    </td>
</template>

<script>
export default {
    props:{
        data:{
            required:true,
            type:String
        },
        index:{
            required:true,
            type:Number,
        },
        editable:{
            default:false,
            type:Boolean
        }
    },
    data(){
        return {
            editing:false,
            value:''
        }
    },
    mounted(){
        this.value = this.data
    },
    methods:{
        saveNewValue(){
            this.$store.commit('updateDescription', {
                index: this.index,
                description: this.value
            })
            this.editing = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .data-table-field-container{
        display:flex;
    }
    .data-table-field-container-vertical{
        display:flex;
        flex-direction: column;
    }
    .editable-icon{
        margin-left:$s-size;
        cursor: pointer;
    }
    .textarea{
        min-height: 8.2rem;
    }
</style>
