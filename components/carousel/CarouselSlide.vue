<template>
    <div class="carousel__slide">
        <div class="hero__background__image__container">
            <div class="hero__overlay" v-if="!this.noHeroImg"></div>
            <img :src="hero.image":alt="hero.button_text" class="hero__background__image">
        </div>
        <div class="hero__text__container">
            <div class="hero__text__inner">
                <h1>{{ hero.header }}</h1>
                <p>{{ hero.para }}</p>
                <div class="hero__cta" v-if="hero.button_text">
                    <nuxt-link v-if="hero.button_link" :to="hero.button_link" :style="{backgroundColor:hero.button_color}" class="hero__cta__button">{{ hero.button_text }}</nuxt-link>
                </div>
            </div>
            <div class="hero__small__image__container" v-if="hero.sub_image">
                <div class="hero__small__image__inner">
                    <img :src="hero.sub_image" alt="" class="hero__small__image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
