<template>
    <div class="side__by__side">
        <div class="sbs__img__container">
            <div class="sbs__img__container__inner" :style="{backgroundImage: 'url(https://kindpup.sawtooth.dev/directus/public/uploads/_/originals/pugikins-window.jpg)' }">
                <!-- <img src="https://kindpup.sawtooth.dev/directus/public/uploads/_/originals/pugikins-window.jpg" alt="" class="sbs__img"> -->
            </div>
        </div>
        <div class="sbs__text__container">
            <div class="sbs__text__inner">
                <h2>Potential Benefits of Doggy CBD</h2>
                <h3>There may be more than you think!</h3>
                <ul>
                    <li>Improving general wellness and health</li>
                    <li>Reducing inflammation</li>
                    <li>Increasing muscle repair after strenuous exercise</li>
                    <li>Improving circulation</li>
                    <li>Promoting bone growth</li>
                    <li>Reducing pain</li>
                    <li>Reducing stress and anxiety (including separation anxiety)</li>
                    <li>Reducing nausea</li>
                    <li>Stimulating appetite</li>
                    <li>Lowering blood sugar levels</li>
                    <li>Minimizing aggression disorders and noise phobias</li>
                    <li>Combating degenerative diseases and aging</li>
                    <li>Increasing cognitive function</li>
                    <li>Reducing or helping to control seizures</li>
                    <li>Inhibiting cancer cell growth</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        
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
        background-size: cover;
        background-position: right center;
        background-repeat: no-repeat;
    }
    .sbs__text__container {
        order: 2;
        padding: 100px 40px 40px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: flex-start;
        text-align: center;
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
            padding: 8vh 10px 8vh;
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
</style>
