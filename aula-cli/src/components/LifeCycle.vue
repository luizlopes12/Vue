<template>
    <h1>Meu nome é: {{ name }}</h1>
</template>

<script>
export default {
    name: 'LifeCycle',
    data(){
        return{
            name: 'Ainda não sei'
        }
    },
    created(){
        setTimeout(()=>{
        this.name = 'Luiz'
        }, 1000)
    },
    mounted(){
        setTimeout(()=>{
        this.name = 'Pedro'
        }, 2000)
    },

}
</script>