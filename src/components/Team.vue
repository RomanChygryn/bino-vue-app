<template>
    <section class="team" id="team">

        <div class="team__header" v-scroll-reveal>
            <h2 class="title-primary">
                OUR TEAM
            </h2>

            <h3 class="subtitle-primary">
                Meet the craziest team. Share your thoughts with them.
            </h3>

            <app-separator-primary/>
        </div>

        <div class="team__content" >
            <div class="container team__items" v-scroll-reveal="{delay: 250}">
                <div id="tooltip1" variant="outline-success" class="item item-first">
                    <img src="../assets/section-img/man1.jpg" alt="">
                    <b-tooltip target="tooltip1" placement="top">
                        <span><strong>Andrew Smith</strong><br>CEO</span>
                    </b-tooltip>
                </div>
                <div id="tooltip2" variant="outline-success" class="item item-second">
                    <img src="../assets/section-img/man-2.jpg" alt="">
                    <b-tooltip target="tooltip2" placement="top">
                        <span><strong>Matt Bonn</strong><br>Financial director</span>
                    </b-tooltip>
                </div>
                <div id="tooltip3" variant="outline-success" class="item item-third">
                    <img src="../assets/section-img/woman-3.jpg" alt="">
                    <b-tooltip target="tooltip3" placement="top">
                        <span><strong>Ann Loo</strong><br>HR Specialist</span>
                    </b-tooltip>
                </div>
                <div id="tooltip4" variant="outline-success" class="item item-fourth">
                    <img src="../assets/section-img/woman-4.jpg" alt="">
                    <b-tooltip target="tooltip4" placement="top">
                        <span><strong>Paggie Maggy</strong><br>Graphic designer</span>
                    </b-tooltip>
                </div>
                <div id="tooltip5" variant="outline-success" class="item item-fifth">
                    <img src="../assets/section-img/woman-5.jpg" alt="">
                    <b-tooltip target="tooltip5" placement="top">
                        <span><strong>Samantha Joel</strong><br>UX specialist</span>
                    </b-tooltip>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    import SeparatorPrimary from '../components/SeparatorPrimary'

    export default {
        name: "Team",
        components: {
            appSeparatorPrimary: SeparatorPrimary,
        },
    }
</script>

<style scoped>

</style>
