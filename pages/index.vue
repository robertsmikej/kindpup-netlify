<template>
  <section class="container">
        <Hero :page="page"/>
        <!-- <Signup/>
        <SideBySide/> -->
        <!-- <Grid/> -->
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
            return this.$store.state.pages.filter(function (p) {
                return p.page_title === "Home";
            })[0];
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
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
