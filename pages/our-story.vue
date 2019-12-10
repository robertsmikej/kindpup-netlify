<template>
    <main>
        <Hero :heroSlides="page.hero" :heroOptions="page.hero_options"/>
        <SideBySide :section="page.sections[0]"/>
    </main>
</template>

<script>
import Hero from '~/components/sitewide/Hero.vue'
import SectionHeader from '~/components/content/SectionHeader.vue'
import SideBySide from '~/components/content/SideBySide.vue'

export default {
    components: {
        Hero,
        SectionHeader,
        SideBySide
    },
    computed: {
        page: function () {
            return this.$store.state.pages.our_story
        }
    }
}
</script>

<style>

</style>
