<template>
    <section class="contact" id="contact">
        <div class="contact__header">
            <h2 class="title-primary">
                KEEP IN TOUCH
            </h2>

            <h3 class="subtitle-primary">
                Nullam sit amet odio eu est aliquet euismod a a urna. Proin eu urna suscipit, dictum quam nec.
            </h3>

            <app-separator-primary/>
        </div>

        <div class="container mt-5">
            <div class="contact__content">
                <div class="row">
                    <div class="col-12 col-xl-5 mb-5 mb-xl-0">
                        <div class="contact__info contact__column">
                            <h4 class="contact__info-title">
                                OUR ADDRESS
                            </h4>
                            <p class="contact__info-description">
                                <a class="contact__info-link" href="https://goo.gl/maps/ippaZZCCq1A2" target="_blank">
                                    House #13, Streat road, <br>Sydney
                                    2310 Australia</a>
                            </p>

                            <h4 class="contact__info-title">
                                CALL US
                            </h4>
                            <p class="contact__info-description">
                                <a class="contact__info-link" href="tel:8801681091425" target="_blank">+ 880 168 109
                                    1425</a>
                                <a class="contact__info-link" href="tel:0216809142" target="_blank">+ 02 168 09 142</a>
                            </p>

                            <h4 class="contact__info-title">
                                EMAIL US
                            </h4>
                            <p class="contact__info-description">
                                <a class="contact__info-link" href="mailto:contactus@email.com" target="_blank">contactus@email.com</a>
                            </p>
                        </div>
                    </div>

                    <div class="col-12 col-xl-7">
                        <div class="contact__form contact__column" :class="{formSent: messageWasSent}">

                            <h4 v-if="messageWasSent" class="contact__form-done">
                                Thank you for message. We will process your question within 24 hours. <a
                                    @click="newMessage" class="contact__form-done-link">Write again</a>
                            </h4>


                            <form v-if="!messageWasSent" @submit.prevent="onSubmit">
                                <div class="input" :class="{invalid: $v.name.$error}">
                                    <label for="name">Name</label>
                                    <input
                                            @blur="$v.name.$touch()"
                                            type="text"
                                            id="name"
                                            v-model="name">
                                    <p class="contact__disclaimer" v-if="!$v.name.required">*This field can't be
                                        empty</p>
                                    <p class="contact__disclaimer" v-if="!$v.name.minLength">*Please provide at least {{
                                        $v.name.$params.minLength.min }} characters </p>
                                </div>

                                <div class="input" :class="{invalid: $v.email.$error}">
                                    <label for="email">Email</label>
                                    <input
                                            @blur="$v.email.$touch()"
                                            type="email"
                                            id="email"
                                            v-model="email">
                                    <p class="contact__disclaimer" v-if="!$v.email.email">*Please provide a valid
                                        email</p>
                                    <p class="contact__disclaimer" v-if="!$v.email.required">*This field can't be
                                        empty</p>
                                </div>

                                <div class="input" :class="{invalid: $v.subject.$error}">
                                    <label for="subject">Subject</label>
                                    <input
                                            @blur="$v.subject.$touch()"
                                            type="text"
                                            id="subject"
                                            v-model="subject">
                                    <p class="contact__disclaimer" v-if="!$v.subject.minLength">*Please provide at least
                                        {{ $v.subject.$params.minLength.min }} characters</p>
                                </div>

                                <div class="input" :class="{invalid: $v.message.$error}">
                                    <label for="message">Message</label>
                                    <textarea
                                            @blur="$v.message.$touch()"
                                            type="text"
                                            id="message"
                                            v-model="message"
                                            rows="4">
                                        </textarea>
                                    <p class="contact__disclaimer" v-if="!$v.message.required">*This field can't be
                                        empty</p>
                                    <p class="contact__disclaimer" v-if="!$v.message.minLength">*Please provide at least
                                        {{ $v.message.$params.minLength.min }} characters</p>
                                </div>

                                <div class="submit">
                                    <button class="btn btn-primary" type="submit" :disabled="$v.$invalid">Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import SeparatorPrimary from '../components/SeparatorPrimary'
    import {required, email, minValue, minLength} from 'vuelidate/lib/validators'


    export default {
        name: "Contact",
        components: {
            appSeparatorPrimary: SeparatorPrimary
        },
        data() {
            return {
                email: '',
                name: '',
                subject: '',
                message: '',

            }
        },
        validations: {
            email: {
                required,
                email
            },
            name: {
                required,
                minLength: minLength(2)
            },
            subject: {
                required,
                minLength: minLength(5)
            },
            message: {
                required,
                minLength: minLength(100)
            },

        },
        methods: {
            onSubmit() {
                const formData = {
                    email: this.email,
                    name: this.name,
                    subject: this.subject,
                    message: this.message,
                }

                this.$store.dispatch('submit', formData)
            },
            newMessage() {
                    this.email = '',
                    this.name = '',
                    this.subject = '',
                    this.message = '',

                    this.$store.dispatch('resetMessage')
            }
        },
        computed: {
            messageWasSent() {
                return this.$store.state.messageWasSent
            }
        }

    }
</script>

<style scoped>

</style>
