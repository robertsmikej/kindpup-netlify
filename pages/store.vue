<template>
    <section class="container">
        <Hero :heroSlides="page.hero" :heroOptions="page.hero_options"/>
        <div class="store__container">
            <div id='collection-component-1575936425585'></div>
            <div v-html="page.page_code"></div>
        </div>
    </section>
</template>

<script>
import Hero from '~/components/sitewide/Hero.vue'

export default {
    components: {
        Hero
        
    },
    computed: {
        page: function () {
            return this.$store.state.pages.store
        }
    },
    head () {
        return {
            // script: [
            //     { src: 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js' }
            // ],
            title: "Kind Pup | Store",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "Our CBD is the Dog-Gone best!",
                    hid: 'robots', name: 'robots', content: 'index, follow'
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