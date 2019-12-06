<template>
    <div class="sign__up__container">
        <div class="sign__up__text__container" v-html="$md.render(signup.text)"></div>
        <div class="sign__up__input__container">
            <form id="contact__form" data-netlify="true" name="Email-Signup" class="sign__up__form" action="/thanks" method="post">
                <input type="hidden" name="Email-Signup" value="Sign Up Box Submission" />
                <input aria-label="Email Address" name="email" placeholder="Eg. kindpup@gmail.com" type="email" v-model="signUpFormData.email" required class="sign__up__input"/>
                <button data-submit="Sending" class="sign__up__button">{{ signup.button_text }}</button>
            </form>
        </div>
    </div>
</template>

<script>
const axios = require('axios');

export default {
    computed: {
        signup: function () {
            return this.$store.state.sitewide.sign_up;
        }
    },
    data() {
        return {
            signUpFormData: {
                email: "",
                list_type: "email_sign_up" 
            }
        }
    },
    methods: {
        handleSubmit: function () {
            let emaildata = JSON.stringify({
                email_address: this.signUpFormData.email,
                list_type: this.signUpFormData.list_type
            });
            this.$axios.post('/', emaildata).then(function(Response) {
                console.log(Response);
            });
        }
    },
    head () {
        return {
            title: "Kind Pup | Natural CBD Oil for dogs",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "Kind Pup CBD Oil is radical!",
                    hid: 'robots', name: 'robots', content: 'index, follow'
                }
            ]
        }
    }
}
</script>

<style>
    .sign__up__container {
        width: 100%;
        padding: 0 14px 10px;
        min-height: 226px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        text-align: center;
        background-color: #FDC22E;
    }
    .sign__up__container h3 {
        margin: 0 auto 30px;
        font-size: 1.4em;
        line-height: 1.2em;
    }
    .sign__up__input__container, .sign__up__form {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 540px;
        border: none;
    }
    .sign__up__input {
        padding: 8px 10px;
        font-size: 18px;
        height: 54px;
        flex: 1;
        font-family: var(--default-font);
        border: none;
        box-shadow: none;
    }
    .sign__up__button {
        padding: 0 24px;
        margin: 0;
        height: 54px;
        font-size: 16px;
        background-color: #718C6B;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: center;
        color: #FFF;
        font-weight: 600;
        text-transform: uppercase;
        cursor: pointer;
        border: none;
    }
</style>
