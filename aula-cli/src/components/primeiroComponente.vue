<template>
    <div>
    <h1>Olá Vue</h1>
    <p>Meu nome é: {{ name }}, e trabalho como: {{ prof }}</p>
    
    </div>
</template>


<script>
export default {
    name: 'primeiroComponente',
    data(){
        return{
            name: 'Luiz',
            prof: 'Programador'
        }
    }
}
</script>