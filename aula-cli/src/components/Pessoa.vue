<template>
<div>
    <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
    <Info/>
</div>
</template>

<script>
import Info from './info.vue'
export default {
    name: 'Pessoa',
    data(){
        return{
            nome: 'Luiz'
        }
    },
    components: {
        Info
    }
}
</script>