const MyApp = {
    data() {
        return{
            name: '',
            age: 30,
            input_name: ''
        }
    },
    methods: {
        formSubmit(e){
            e.preventDefault()
            this.name = this.input_name
        }
    }
}

Vue.createApp(MyApp).mount('#app')