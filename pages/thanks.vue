<template>
    <main>
        <h1>Thank you for your interest in {{ sitewide.name }}!</h1>
        <h2>We'll be in touch soon.</h2>
    </main>
</template>

<script>
const axios = require('axios');

import Hero from '~/components/sitewide/Hero.vue'
import ContactUs from '~/components/contacts/ContactUsForm.vue'

export default {
    components: {
        Hero,
        ContactUs
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        }
    },
    head () {
        return {
            title: "Kind Pup | Thank You For Your Inquiry",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "We'll be in touch soon with more details about our product",
                    hid: 'robots', name: 'robots', content: 'noindex, nofollow'
                }
            ]
        }
    }
}
</script>

<style>

</style>
