<template>
    <div>
    <p v-if="is_working">Estou trabalhando no momento</p>
    <p v-else>Não estou trabalhando no momento</p>

    <p>Utilizo essas tecnologias:</p>
    <ul>
    <li>Javascript</li>
    <li>PHP</li>
    <li>Node</li>
    <li>Express</li>
    </ul>
    <div>
    <button @click='showEmail'>{{ btnText }}</button>
    </div>
    <p v-show="email_show">Mande um email para: {{ email }}</p>
    <p>
    Para acessar meu portfolio basta clicar <a v-bind:href="link" target="_blank">Aqui</a>
    </p>
    <Picture/>
    </div>
</template>

<script>
import Picture from './Picture.vue'
export default {
    name: 'Info',
    data(){
        return{
            is_working: true,
            email_show: false,
            email: 'luiz@gmail.com',
            link: 'https://luizlopes12.vercel.app/',
            btnText: 'Mostrar email'
        }
    },
    components: {
        Picture
    },
    methods:{
        showEmail(){
            this.email_show = !this.email_show
            !this.email_show? this.btnText = 'Mostrar email': this.btnText = 'Esconder email'
        }
    }
}
</script>