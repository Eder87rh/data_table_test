<template>
    <td>
        <div v-if="!editing" class="data-table-field-container">
            <div>
                {{ this.data }}
            </div>
            <i v-if="this.editable"
                class="material-icons md-18 md-light editable-icon"
                @click="setEditMode"
            >
                edit
            </i>
        </div>
        <div v-else
            class="data-table-field-container-vertical"
        >
            <textarea v-model="value" class="textarea"/>
            <div class="data-table-field-container">
                <button class="button--border data-table-button"
                    @click="editing=false"
                >
                    CANCEL
                </button>
                <button class="button data-table-button"
                    @click="saveNewValue"
                >
                    SAVE
                </button>
                
            </div>
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
        },
        setEditMode(){
            this.editing = true
            this.value= this.data
        }
    }
}
</script>

<style lang="scss" scoped>
    .data-table-field-container{
        display:flex;
    }
    .data-table-button{
        flex-basis: 50%;
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
