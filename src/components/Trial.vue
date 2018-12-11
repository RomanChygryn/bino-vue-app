<template>
    <section class="trial" id="trial">
        <div class="container d-flex justify-content-center flex-wrap">
            <h3 class="trial__title" v-scroll-reveal>
                Let's Get Started Now. <span class="trial__title--bolder">It's FREE!</span>
            </h3>
            <p class="trial__desc" v-scroll-reveal="{delay: 250}">
                30 day free trial. Free plan allows up to 2 projects. Pay if you need more. Cancel anytime. No catches.
            </p>

            <div class="trial__button" v-scroll-reveal="{delay: 500}">
                <a href="https://www.google.com/" target="_blank" class="btn btn-primary"> start free trial</a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Trial"
    }
</script>

<style scoped>

</style>
