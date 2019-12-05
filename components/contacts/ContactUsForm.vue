<template>
    <div class="contact__form__container">
        <form id="contact__form" class="contact__form" action="" method="post" @submit.prevent="handleSubmit" v-if="this.sent === false">
            <fieldset>
                <p>Full Name</p>
                <input aria-label="Full Name" placeholder="Eg. Jogn Manchild" type="text" v-model="formData.name" required autofocus>
            </fieldset>
            <fieldset v-if="contactCompany">
                <p>Company Name</p>
                <input aria-label="Company" placeholder="Eg. Pet Inc." type="text" v-model="formData.company">
            </fieldset>
            <fieldset>
                <p>Email</p>
                <input aria-label="Email Address" placeholder="Eg. petlover@petinc.com" type="email" v-model="formData.email" required>
            </fieldset>
            <fieldset>
                <p>Phone</p>
                <input aria-label="Phone Number" placeholder="Eg. 1(208)555-5309" type="phone" v-model="formData.phone">
            </fieldset>
            <fieldset>
                <p>{{ messageText }}</p>
                <textarea aria-label="Message To Us" rows="4" v-model="formData.message"></textarea>
            </fieldset>
            <fieldset>
                <button class="submit__button contact__submit js__contact__submit" data-submit="Sending">Send Inquiry</button>
            </fieldset>
        </form>
        <div class="contact__sent" v-if="this.sent">
            <h2>Inquiry Sent</h2>
            <p>Thank You, we'll be in touch soon!</p>
        </div>
    </div>
</template>

<script>
const axios = require('axios');

export default {
    data() {
        return {
            formData: {
                name: "",
                email: "",
                phone: "",
                company: "",
                message: "",
                list_type: "investors"
            },
            sent: false
        }
    },
    props: {
        messageText: String,
        contactCompany: Boolean
    },
    methods: {
        handleSubmit: function () {
            let data = {
                "name": this.formData.name,
                "email": this.formData.email,
                "phone": this.formData.phone,
                "company": this.formData.company,
                "message": this.formData.message,
                "list_type": this.formData.list_type
            };
            let d = this;
            axios.post('https://kindpup.sawtooth.dev/directus/public/_/items/responses', data).then(function (response) {
                d.sent = true;
            });
        }
    }
}
</script>

<style>
.contact__form {
    width: 100%;
    border: none;
    margin: 0;
    padding: 0;
}
.contact__form fieldset {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    border: none;
    margin: 12px 0;
    padding: 0;
}
.contact__form p {
    font-weight: 600;
}
.contact__form input, .contact__form textarea {
    width: 100%;
    border: 1px solid grey;
    color: #232323;
    padding: 10px 12px;
    margin: 5px 0;
}
.contact__submit {
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
