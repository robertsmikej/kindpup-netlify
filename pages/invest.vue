<template>
    <main>
        <Hero :heroSlides="page.hero" :heroOptions="page.hero_options"/>
        <div class="investor__contact__outer">
            <div class="investor__information">
                <div class="investor__information__inner">
                    <div class="information__img__container">
                        <img :src="page.sections[0].section_images[0].image" :alt="page.sections[0].section_name" class="information__img">
                    </div>
                    <div class="information__text__container" v-html="$md.render(page.sections[0].section_text[0].text)"></div>
                </div>
            </div>
            <div class="investor__contact__inner">
                <div class="investor__contact__side">
                    <!-- <Grid :items="facts"/> -->
                </div>
                <div class="investor__contact__side investor__contact__form__container">
                    <h3 class="investor__form__header">Please Complete This Form For More Information</h3>
                    <ContactUs :contactCompany="true" :messageText="'How Would You Like To Be Involved?'"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
const axios = require('axios');

import Hero from '~/components/sitewide/Hero.vue'
import Grid from '~/components/content/Grid.vue'
import ContactUs from '~/components/contacts/ContactUsForm.vue'

export default {
    components: {
        Hero,
        Grid,
        ContactUs
    },
    computed: {
        page: function () {
            return this.$store.state.pages.invest
        }
    }
}
</script>

<style>
.investor__contact__outer {
    padding: 0 20px 80px;
    max-width: 1400px;
    margin: 0 auto;
}
.investor__information {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    flex: 1;
    margin: 20px auto 40px;
}
.investor__information__inner {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    max-width: 1000px;
    margin: 60px auto 0;
}
.information__text__container {
    flex: 1;
    order: 1;
}
.information__text__container h3 {
    text-align: center;
    margin: 24px auto 0;
}
.information__text__container p {
    text-align: center;
    margin: 10px auto;
}
.information__img__container {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    flex: 1;
    order: 2;
}
.information__img {
    max-width: 320px;
    min-height: 200px;
    max-height: 300px;
    display: block;
    object-fit: contain
}
.investor__contact__inner {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.investor__contact__side {
    flex: 1 1 50%;
    padding: 20px 3vw;
}
.investor__contact__form__container {
   padding-top: 60px;
}
.investor__form__header {
    color: #FCA24D;
    margin: 0 0 30px;
    font-size: 1.4em;
    line-height: 1.4em;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 600px) {
    .investor__information {
        margin: 0 auto 20px;
    }
    .information__img__container {
        display: none;
    }
    .information__text__container h3 {
        margin: 0 auto;
    }
    .investor__contact__side {
        flex: 1 1 100%;
        padding: 14px 0;
    }
    .investor__form__header {
        text-align: center;
        margin-bottom: 10px;
    }
    .investor__contact__outer {
        padding: 0 14px 60px;
    }
    .information__img {
        max-width: 260px;
        min-height: 0;
    }
}
</style>
