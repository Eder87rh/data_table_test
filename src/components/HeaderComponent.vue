<template>
    <div class="header">
        <div class="container">
            <h1 class="header__title"> {{ this.title }}</h1>
             <h2 class="header__subtitle"> {{ this.subtitle }}</h2> 
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            required: true,
            type: String,       
        },
        subtitle:{
            required: true,
            type: String,
        }
    }
    
}
</script>
