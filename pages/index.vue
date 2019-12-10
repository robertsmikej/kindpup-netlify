<template>
    <main>
        <Hero :heroSlides="page.hero" :heroOptions="page.hero_options"/>
        <Signup/>
        <SideBySide :section="page.sections[0]"/>
        <Grid/>
    </main>
</template>

<script>
import Hero from '~/components/sitewide/Hero.vue'
import Signup from '~/components/contacts/Signup.vue'
import Grid from '~/components/content/Grid.vue'
import SideBySide from '~/components/content/SideBySide.vue'

export default {
    components: {
        Hero,
        Signup,
        Grid,
        SideBySide
    },
    computed: {
        page: function () {
            return this.$store.state.pages.home;
        }
    },
    head() {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
            title: "",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: ""
                }
            ]
        };
    }
}
</script>

<style>

</style>
