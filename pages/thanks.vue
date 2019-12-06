<template>
    <section class="container">
        <h1>Thank you for your interest in {{ sitewide.name }}!</h1>
        <h2>We'll be in touch soon.</h2>
    </section>
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
.contact__page__form__container {
    padding: 0vh 20px;
    max-width: 800px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.contact__form__header {
    color: #FCA24D;
    margin: 0 0 30px;
    font-size: 1.4em;
    line-height: 1.4em;
}
</style>
