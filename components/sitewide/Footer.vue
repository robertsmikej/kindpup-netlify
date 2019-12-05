<template>
    <footer>
        <div class="footer__section">
            <div class="footer__copyright">
                <p>©{{ year }} <span>Kind Pup</span></p>
            </div>
        </div>
    </footer>
</template>

<script>


export default {
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide;
        },
        year: function () {
            return new Date().getYear() + 1900;
        }
    }
}
</script>

<style>
    footer {
        width: 100%;
        padding: 50px 20px;
        background-color: #485458;
        z-index: 6;
        min-height: 100px;
        color: #FFF;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        justify-content: center;
    }
    .footer__copyright p {

    }
    .footer__copyright p span {
        color: #FFF;
        font-weight: 600;
    }
</style>
