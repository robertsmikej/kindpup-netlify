<template>
    <div class="site__section side__by__side">
        <div class="sbs__img__container" v-if="section.section_images[0].image">
            <div class="sbs__img__container__inner" :style="{backgroundImage: 'url(' + section.section_images[0].image  + ')' }"></div>
        </div>
        <div class="sbs__text__container" v-if="section.section_text[0].text">
            <div class="sbs__text__inner" v-html="$md.render(section.section_text[0].text)"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        section: Object
    }
}
</script>

<style>
    .side__by__side {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: flex-start;
        justify-content: center;
    }
    .sbs__img__container {
        flex: 1 1 50%;
        order: 1;
    }
    .sbs__img__container__inner {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .sbs__text__container {
        order: 2;
        flex: 1 1 50%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: flex-start;
        text-align: center;
        position: relative;
    }
    .sbs__text__inner {
        padding: 140px 40px 80px;
        position: sticky;
        top: 0;
        left: 0;
    }
    .sbs__text__inner h2 {
        margin: 0 auto 40px;
        font-weight: 300;
        font-size: 3em;
        line-height: 1em;
        max-width: 400px;
    }
    .sbs__text__inner h3 {
        margin: 20px auto;
        font-weight: 300;
        font-size: 1.7em;
        line-height: 1.3em;
    }
    .sbs__text__inner ul {
        margin: 30px 0;
        text-align: left;
    }
    .sbs__text__inner li {
        font-size: 1.2em;
        line-height: 1.2em;
        font-weight: 200;
        margin: 6px 0 0;
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 1000px) {
        .side__by__side {
            display: flex;
            flex-direction: column;
            align-content: flex-start;
            justify-content: center;
        }
        .sbs__img__container {
            height: 40vh;
        }
        .sbs__text__container {
            padding: 4vh 10px;
        }
        .sbs__text__inner {
            padding: 0 40px;
        }
        .sbs__text__inner h2 {
            margin: 0 auto 14px;
            font-size: 2em;
        }
        .sbs__text__inner h3 {
            margin: 10px auto;
            font-size: 1.3em;
            line-height: 1.2em;
        }
        .sbs__text__inner ul {
            margin: 20px 0;
        }
        .sbs__text__inner li {
            font-size: 1.1em;
            line-height: 1.1em;
        }
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 450px) {
        .sbs__text__container {
            padding: 4vh 0;
        }
        .sbs__text__inner {
            padding: 0;
        }
        .sbs__text__inner h2 {
            font-size: 1.6em;
        }
    }
</style>
