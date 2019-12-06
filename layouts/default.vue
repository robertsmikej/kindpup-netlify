<template>
    <div>
        <Creeper v-if="sitewide.creeper_bar.shown"/>
        <Nav/>
        <nuxt/>
        <Footer/>
    </div>
</template>

<script>
import Creeper from '~/components/sitewide/Creeper.vue'
import Nav from '~/components/sitewide/Nav.vue'
import Footer from '~/components/sitewide/Footer.vue'

export default {
    components: {
        Creeper,
        Nav,
        Footer
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide;
        }
    }
}
</script>

<style>
:root {
    --default-font: "Raleway", 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

    --dark-blue: #262262;
    --blue: #0A74BB;
    --light-blue: #00AEEF;
    --red: #F1582B;
    --orange: #FCA24D;
    --yellow: #FFF202;
    --green: #485458;
    --light-green: #718C6B;
    --footer-back: black;
    --light-grey: grey;
    --grey: lightgrey;
    --dark-grey: darkgrey;
}
html {
    font-family: var(--default-font);
    font-size: 16px;
    line-height: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}
*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
.container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    min-height: calc(100vh - 100px);
    padding-top: 90px;
}
h1 {
    font-size: 3em;
    line-height: 1.3em;
}
h2 {
    font-size: 2em;
    line-height: 1.3em;
}
h3 {
    font-size: 1.8em;
    line-height: 1.1em;
}
h4 {
    font-size: 1.8em;
    line-height: 1em;
}
h5 {
    font-size: 1.5em;
    line-height: 1em;
}
h6 {
    font-size: 1.2em;
    line-height: 1.1em;
}
p {
    font-size: 1em;
    line-height: 1.4em;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 900px) {
    .container {
        padding-top: 60px;
    }
}
</style>
