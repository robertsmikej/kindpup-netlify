<template>
    <main>
        <Hero :heroSlides="page.hero" :heroOptions="page.hero_options"/>
        <div class="site__section contact__page__form__container">
            <h3 class="contact__form__header">Please fill out the form below to contact us</h3>
            <ContactUs :contactCompany="false" :messageText="'How Can We Help?'"/>
        </div>
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
        page: function () {
            return this.$store.state.pages.contact
        }
    },
    head () {
        return {
            title: "Kind Pup | Contact Us",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "Do you have any questions for the Kind Pup? We're here to help with your dog CBD questions!",
                    hid: 'robots', name: 'robots', content: 'index, follow'
                }
            ]
        }
    }
}
</script>

<style>
.contact__page__form__container {
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
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 600px) {
    .contact__form__header {
        color: #FCA24D;
        margin: 0 0 10px;
        font-size: 1.1em;
        line-height: 1em;
    }
}
</style>
