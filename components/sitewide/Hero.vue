<template>
    <div class="hero" :class="{heroNoImage: this.noHeroImg}" :style="{background: 'url(' + hero.image + ')' }">
        <div class="hero__overlay" v-if="!this.noHeroImg"></div>
        <div class="hero__inner">
            <div class="hero__text__container">
                <div class="hero__text__inner">
                    <!-- <div v-if="hero.hero_main_text" v-html="page.hero_main_text"></div> -->
                    <h1>{{ hero.header }}</h1>
                    <p>{{ hero.para }}</p>
                    <div class="hero__cta" v-if="hero.button_text">
                        <nuxt-link v-if="hero.button_link" :to="hero.button_link" :style="{backgroundColor:hero.button_color}" class="hero__cta__button">{{ hero.button_text }}</nuxt-link>
                    </div>
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
    computed: {
        heroBackground: function () {
            if (this.page.background_image === null) {
                this.noHeroImg = true;
                return "#FFF";
            } else {
                return this.page.background_image;
            }
        }
    },
    data() {
        return {
            noHeroImg: false
        }
    },
    props: {
        hero: Object
    }
}
</script>

<style>
    .hero {
        width: 100%;
        min-height: 700px;
        background-position: center top !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
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
        background: rgba(0, 0, 0, .2);
        z-index: 2;
    }
    .heroNoImage .hero__overlay {
        display: none;
    }
    .hero__inner {
        width: 100%;
        height: 100%;
        z-index: 3;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: flex-start;
        flex: 1;
    }
    .heroNoImage .hero__inner {
        max-width: 1400px;
        margin: 0 auto;
        justify-content: space-around;
    }
    .hero__text__container {
        margin: 0 10%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
    }
    .heroNoImage .hero__text__container {
        margin: 0;
        flex: 1 1 auto;
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
