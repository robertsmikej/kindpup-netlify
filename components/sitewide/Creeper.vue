<template>
    <div class="creeper__bar">
        <nuxt-link :to="creeper.link" class="creeper__bar__inner">
            <h2>{{ creeper.text }}</h2>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    computed: {
        creeper: function () {
            return this.$store.state.sitewide.creeper_bar;
        }
    }
}
</script>

<style>
.creeper__bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: #03AEEF;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
}
.creeper__bar__inner {
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: #FFF;
    text-decoration: none;
}
.creeper__bar h2 {
    font-size: 15px;
    line-height: 15px;
    margin: 0;
    padding: 0;
    font-weight: 500;
    text-transform: uppercase;
}
</style>
