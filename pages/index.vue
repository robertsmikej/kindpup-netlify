<template>
  <section class="container">
        <Hero :hero="page.hero"/>
        <Signup/>
        <SideBySide :section="page.page_section_1"/>
        <Grid/>
  </section>
</template>

<script>
import Hero from '~/components/sitewide/Hero.vue'
import Signup from '~/components/contacts/Signup.vue'
import Grid from '~/components/Grid.vue'
import SideBySide from '~/components/SideBySide.vue'

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
