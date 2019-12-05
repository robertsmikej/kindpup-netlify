<template>
    <div class="grid__container">
        <div class="grid__container__inner">
            <div class="grid__cells">
                <div class="grid__cell" v-for="(item, index) in items" :key="index">
                    <div class="grid__cell__image__container">
                        <img class="grid__cell__image" :src="item.grid_image.data.full_url"/>
                    </div>
                    <h4 v-if="item.headline">{{ item.headline }}</h4>
                    <p v-if="item.main_text">{{ item.main_text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: Array
    },
    computed: {
        
    }
}
</script>

<style>
.grid__container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
}
.grid__container__inner {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
}
.grid__cells {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
}
.grid__cell {
    flex: 1 1 50%;
    padding: 14px 10px;
    text-align: center;
    max-width: 50%;
}
.grid__cell__image__container {
    width: 100%;
    padding: 10px;
}
.grid__cell__image {
    max-height: 100px;
    margin: 0 auto;
    display: block;
}
.grid__cell h4 {
    margin: 16px 0;
    font-size: 2em;
    line-height: 1em;
    color: #FCA24D;
}
.grid__cell p {
    margin: 10px 0;
    font-size: 1em;
    line-height: 1.3em;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 600px) {
    .grid__cell {
        padding: 14px 8px;
    }
}
</style>
