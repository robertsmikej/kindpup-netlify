<template>
    <div class="hero">
        <div v-if="heroSlides.slides.length > 1">
            <no-ssr>
                <carousel :autoplay="heroOptions.autoplay" :loop="heroOptions.loop" :per-page="1" :mouse-drag="false" :pagination-padding="7" :autoplay-timeout="heroOptions.time_to_move" :pagination-active-color="'#FCA24D'" :speed="700">
                    <slide v-for="(slide, index) in heroSlides.slides" :key="index" class="hero__inner">
                        <div v-if="slide.background_image" class="hero__background__image__container">
                            <div class="hero__overlay"></div>
                            <img :src="slide.background_image" :alt="slide.header" class="hero__background__image"/>
                        </div>
                        <div class="hero__text__container">
                            <div class="hero__text__inner">
                                <h1>{{ slide.header }}</h1>
                                <p>{{ slide.para }}</p>
                                <div class="hero__cta" v-if="slide.button_text">
                                    <nuxt-link v-if="slide.button_link" :to="slide.button_link" :style="{backgroundColor:slide.button_color}" class="hero__cta__button">{{ slide.button_text }}</nuxt-link>
                                </div>
                            </div>
                            <div class="hero__small__image__container" v-if="slide.sub_image">
                                <div class="hero__small__image__inner">
                                    <img :src="slide.sub_image" :alt="slide.header" class="hero__small__image"/>
                                </div>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </no-ssr>
        </div>
        <div v-else-if="heroSlides.slides.length <= 1 || this.noHeroImg">
            <div class="hero__inner">
                <div v-if="singleHero.background_image" class="hero__background__image__container">
                    <div class="hero__overlay"></div>
                    <img :src="singleHero.background_image" :alt="singleHero.header" class="hero__background__image"/>
                </div>
                <div class="hero__text__container">
                    <div class="hero__text__inner">
                        <h1>{{ singleHero.header }}</h1>
                        <p>{{ singleHero.para }}</p>
                        <div class="hero__cta" v-if="singleHero.button_text">
                            <nuxt-link v-if="singleHero.button_link" :to="singleHero.button_link" :style="{backgroundColor:hero.button_color}" class="hero__cta__button">{{ singleHero.button_text }}</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="hero__small__image__container" v-if="singleHero.sub_image">
                    <div class="hero__small__image__inner">
                        <img :src="singleHero.sub_image" alt="" class="hero__small__image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        heroSlides: Object,
        heroOptions: Object
    },
    computed: {
        singleHero: function () {
            if (this.heroSlides.slides.length <= 1) {
                for (var slide in this.heroSlides.slides) {
                    return this.heroSlides.slides[0];
                }
            }
        }
    },
    data() {
        return {
            noHeroImg: false
        }
    }
}
</script>

<style>
    .hero {
        width: 100%;
        margin: 0 auto;
        position: relative;
    }
    .hero.heroNoImage {
        min-height: 0;
        background: none;
        padding: 30px 20px 40px;
        min-height: 466px;
        align-content: center;
    }
    .hero__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        z-index: 2;
    }
    .heroNoImage .hero__overlay {
        display: none;
    }
    .hero__inner {
        position: relative;
    }
    .hero__background__image__container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        align-items: center;
    }
    .hero__background__image {
        width: 100%;
        margin: 0;
        flex: 1 0 auto;
        height: 100%;
        display: block;
    }
    .heroNoImage .hero__inner {
        margin: 0 auto;
        justify-content: space-around;
    }
    .hero__text__container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 3;
        transform: translate(30%, -50%);
        transition: all .5s;
    }
    .heroNoImage .hero__text__container {
        margin: 0;
        /* flex: 1 1 auto; */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        order: 2;
    }
    .hero__text__inner {
        color: #FFF;
        text-align: center;
    }
    .heroNoImage .hero__text__inner {
        color: #232323;
    }
    .hero h1 {
        font-size: 3em;
        line-height: 1em;
        font-weight: 500;
        margin: 10px 0 0;
        text-align: left;
    }
    .hero h2 {
        font-size: 2em;
        line-height: 1em;
        margin: 10px 0;
    }
    .hero p {
        font-size: 1.2em;
        line-height: 1.2em;
        margin: 12px 0 0px;
        max-width: 400px;
        text-align: left;
    }
    .hero__cta {
        margin: 36px 0 0;
        display: flex;
        flex-direction: row;
        align-content: flex-start;
        justify-content: flex-start;
    }
    .hero__cta__button {
        color: #FFF;
        background-color: var(--dark-blue);
        padding: 14px 24px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
        border-radius: 5px;
        display: block;
        width: 280px;
        margin: 0;
    }
    .hero__small__image__container {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        align-items: center;
        justify-content: center;
        order: 1;
    }
    .hero__small__image__inner {
        padding: 20px;
    }
    .hero__small__image__container img {
        max-width: 440px;
    }
    .VueCarousel-dot-container {
        margin: 0 !important;
    }
    .VueCarousel-pagination {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 3;
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 1000px) {
        .hero__small__image__container img {
            max-width: 260px;
        }
        .hero h1 {
            font-size: 2.5em;
        }
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 800px) {
        .hero {
            padding: 10vh 0;
            min-height: 0;
        }
        .hero.heroNoImage {
            padding: 30px 14px;
            min-height: 0;
        }
        .hero__overlay {
            background: rgba(0, 0, 0, .4);
        }
        .hero__text__inner {
            margin: 0 auto;
        }
        .heroNoImage .hero__text__inner {
            margin: 0;
            padding: 0 0 0 20px;
        }
        .heroNoImage.hero h1 {
            text-align: left;
        }
        .hero__text__container {
            align-content: center;
            justify-content: center;
            margin: 0 20px;
        }
        .hero p {
            max-width: 500px;
        }
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 600px) {
        .hero__inner {
            flex-wrap: wrap;
        }
        .heroNoImage .hero__text__container {
            order: 1;
            margin-bottom: 10px;
        }
        .heroNoImage .hero__small__image__container {
            order: 2;
        }
        .heroNoImage.hero h1 {
            text-align: center;
        }
    }
</style>
