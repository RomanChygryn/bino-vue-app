<template>
    <section class="price" id="pricing">
        <div class="container">
            <div class="price__header">
                <h2 class="title-primary">
                    pricing
                </h2>

                <h3 class="subtitle-primary">
                    A brief story about how this process works, keep an eye till the end.
                </h3>

                <app-separator-primary/>
            </div>

            <div class="price__content">
                <Slick ref="slick"
                       :options="slickOptions"
                       class="price__slick slider">
                    <div class="price__offer offer" v-for="plan in plans" :key="plan.id">
                        <div class="offer__header">
                            <h4 class="offer__header-title">
                                {{plan.label}}
                            </h4>
                            <div class="offer__header-badge">
                                <h3 class="offer__header-price">
                                    ${{plan.price}}<br>
                                </h3>
                                <span class="price-sub">per month</span>
                            </div>
                        </div>

                        <div class="offer__body">
                            <ul class="offer__desc">
                                <li v-for="desc in plan.description" class="offer__desc-item">{{desc}}</li>
                            </ul>
                            <router-link to="/price" tag="a" class="btn btn-primary">Choose plan</router-link>
                        </div>
                    </div>

                </Slick>
            </div>
        </div>
    </section>
</template>

<script>
    import Slick from 'vue-slick';
    import SeparatorPrimary from '../components/SeparatorPrimary'
    import SeparatorSecondary from '../components/SeparatorSecondary'

    export default {
        name: "Price",
        components: {
            appSeparatorPrimary: SeparatorPrimary,
            appSeparatorSecondary: SeparatorSecondary,
            Slick
        },
        data() {
            return {
                slickOptions: {
                    autoplay: false,
                    speed: 600,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    pauseOnHover: false,
                    dots: false,
                    arrows: false,
                    pauseOnDotsHover: false,
                    cssEase: "linear",
                    draggable: false,
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: true
                            }
                        }
                    ]
                },
            }
        },
        computed: {
            plans() {
                return this.$store.getters.plans
            }
        }
    }
</script>

<style scoped>

</style>
