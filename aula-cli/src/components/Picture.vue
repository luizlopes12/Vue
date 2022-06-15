<template lang="">
    <div>
        <img :src='url' :alt='url_alt'/>
    </div>
</template>
<script>
export default {
    name: 'Picture',
    data(){
        return{
        url: '/favicon.ico',
        url_alt: 'Logo do vue'
        }
    }
}
</script>