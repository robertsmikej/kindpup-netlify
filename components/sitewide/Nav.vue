<template>
    <nav>
        <div class="nav__inner">
            <nuxt-link to="/" class="nav__logo">
                <img :src="sitewide.logo" :alt="sitewide.name + '\'s Logo'" class="nav__logo__img">
            </nuxt-link>
            <div class="nav__links" :class="{showMobileNav: this.mobileNav}" @click="toggleMobileNav">
                <nuxt-link v-for="(navitem, index) in nav" :key="index" class="nav__link" :to="navitem.link">{{ navitem.title }}</nuxt-link>
                <div class="nav__close"></div>
            </div>
            <div class="nav__hamburger" :class="{changeCloseButton: this.mobileNav}" @click="toggleMobileNav">
                <div class="hamburger__line"></div>
                <div class="hamburger__line"></div>
                <div class="hamburger__line"></div>
            </div>
        </div>
    </nav>
</template>

<script>


export default {
    computed: {
        nav: function () {
            return this.$store.state.nav;
        },
        sitewide: function () {
            return this.$store.state.sitewide;
        }
    },
    data() {
        return {
            mobileNav: false
        }
    },
    methods: {
        toggleMobileNav: function () {
            this.mobileNav = !this.mobileNav;
        }
    }
}
</script>

<style>
    nav {
        width: 100%;
        height: 90px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: flex-start;
        justify-content: center;
        padding: 6px;
        position: fixed;
        top: 30px;
        left: 0;
        z-index: 6;
        background-color: #FFF;
        border-bottom: 1px solid #EFF2F3;
        overflow: hidden;
    }
    .nav__inner{
        max-width: 1200px;
        width: 100%;
        padding: 0 20px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
    }
    .nav__logo {
        height: 100%;
        max-width: 100px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
    }
    .nav__logo__img {
        max-height: 100%;
        object-fit: contain;
        margin: 0;
    }
    .nav__links {
        display: flex;
        flex-direction: row;
        align-content: flex-start;
        justify-content: space-around;
        flex: 0 1 auto;
        transition: all .5s;
    }
    .nav__link {
        flex: 1 1 auto;
        text-decoration: none;
        color: #232323;
        text-transform: uppercase;
        font-size: 14px;
        padding: 4px 20px;
        transition: all .4s;
        text-align: center;
    }
    .nav__link:hover {
        color: #0A74BB;
        font-weight: 900;
    }
    .nav__close, .nav__hamburger {
        display: none;
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 800px) {
        nav {
            width: 100%;
            height: 60px;
        }
        .nav__inner {
            position: relative;
            padding: 0;
        }
        .nav__logo {
            max-width: 100%;
            display: flex;
            flex-direction: row;
            align-content: center;
            align-items: center;
        }
        .nav__links{
            width: 100%;
            height: 100%;
            padding: 20px 0 120px;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 90px;
            left: 100%;
            background: #FFF;
        }
        .showMobileNav {
            left: 0px;
        }
        .nav__link {
            flex: 0 1 auto;
            font-size: 20px;
            padding: 5px 20px;
            margin: 10px 0;
        }
        .nav__hamburger {
            padding: 6px 2px;
            width: 36px;
            height: 30px;
            align-self: center;
            position: absolute;
            top: 50%;
            right: 12px;
            transform: translate(0, -50%);
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: center;
            justify-content: space-between;
            cursor: pointer;
            transition: all .5s;
        }
        .hamburger__line {
            width: 100%;
            height: 2px;
            background-color: #262262;
            transition: all .5s;
        }
        .changeCloseButton .hamburger__line{
            position: absolute;
            top: 50%;
            left: 0;
        }
        .changeCloseButton .hamburger__line:nth-of-type(1) {
            transform: rotate(45deg);
        }
        .changeCloseButton .hamburger__line:nth-of-type(2) {
            transform: rotate(135deg);
        }
        .changeCloseButton .hamburger__line:nth-of-type(3) {
            transform: rotate(135deg);
        }
    }
</style>
