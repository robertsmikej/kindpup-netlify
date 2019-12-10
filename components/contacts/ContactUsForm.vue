<template>
    <div class="contact__form__container">
        <client-only>
            <form id="contact__form" data-netlify="true" name="Contact-Us-Page" class="contact__us__form" action="/thanks" method="post" @submit.prevent="handleSubmit">
                <input type="hidden" name="Contact-Us-Page" value="Contact Us Page Submission" />
                <div v-for="(input, index) in formDetails.items" :key="index">
                    <FormInput :input="input"/>
                </div>
                
                <!-- <fieldset>
                    <p>Full Name</p>
                    <input aria-label="Full Name" name="name" placeholder="Eg. Jogn Manchild" type="text" v-model="formData.name" required autofocus>
                </fieldset>
                <fieldset>
                    <p>Company Name</p>
                    <input aria-label="Company" name="company" placeholder="Eg. Pet Inc." type="text" v-model="formData.company">
                </fieldset> -->
                <fieldset>
                    <p>Email</p>
                    <input aria-label="Email Address" name="email" placeholder="Eg. petlover@petinc.com" type="email" v-model="formData.email" required>
                </fieldset>
                <fieldset>
                    <p>Phone</p>
                    <input aria-label="Phone Number" name="phone" placeholder="Eg. 1(208)555-5309" type="phone" v-model="formData.phone">
                </fieldset>
                <fieldset>
                    <p>{{ messageText }}</p>
                    <textarea aria-label="Message To Us" name="message" rows="4" v-model="formData.message"></textarea>
                </fieldset> 
                <fieldset>
                    <button class="submit__button contact__us__submit js__contact__submit" data-submit="Sending">{{ formDetails.button_text }}</button>
                </fieldset>
            </form>
        </client-only>
    </div>
</template>

<script>
const axios = require('axios');
import FormInput from '~/components/contacts/ContactFormInput.vue'

export default {
    components: {
        FormInput
    },
    computed: {
        formDetails: function () {
            return this.$store.state.sitewide.contact_form;
        }
    },
    data() {
        return {
            formData: {
                name: "",
                email: "",
                phone: "",
                company: "",
                message: "",
                list_type: "investors"
            }
        }
    },
    props: {
        messageText: String,
        contactCompany: Boolean
    },
    methods: {
        handleSubmit: function () {
            let data = JSON.stringify({
                name: this.formData.name,
                email: this.formData.email,
                phone: this.formData.phone,
                company: this.formData.company,
                message: this.formData.message,
                list_type: this.formData.list_type
            });
            this.$axios.post('/', data).then(function(Response) {
                console.log(Response);
            });
        }
    }
}
</script>

<style>
.contact__us__form {
    width: 100%;
    border: none;
    margin: 0;
    padding: 0;
}
.contact__us__form fieldset {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    border: none;
    margin: 12px 0;
    padding: 0;
}
.contact__us__form p {
    font-weight: 600;
}
.contact__us__form input, .contact__us__form textarea {
    width: 100%;
    border: 1px solid grey;
    color: #232323;
    padding: 10px 12px;
    margin: 5px 0;
}
.contact__us__submit {
    margin: 10px auto;
    display: block;
    background: #0A74BB;
    color: #FFF;
    font-size: 1.2em;
    line-height: 1.2em;
    padding: 8px 24px 10px;
    text-transform: uppercase;
    border-radius: 15px;
}
</style>
