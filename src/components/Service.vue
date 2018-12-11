<template>
    <section class="service">
        <Slick ref="carousel"
               :options="slickOptions"
               class="service__slider slider"
               >
            <div class="service__item" v-for="slide in slides">
                <div class="wrapper">
                    <div class="service__content" >
                        <h3 class="title-secondary title-revert">
                            {{slide.title}}
                        </h3>
                        <div class="service__content-item" v-for="item in slide.content">
                            <div class="service__content-text">
                                <h4 class="service__headline">
                                    {{item.title}}
                                </h4>
                                <p class="description-primary">
                                    {{item.description}}
                                </p>
                            </div>
                            <div class="icon-wrapper">
                                <div class="service__content-icon">
                                    <img :src="item.image" alt="" class="img-src">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="service__image" >
                        <img :src="slide.image" alt="" class="img-src">
                    </div>
                </div>
            </div>
        </Slick>

    </section>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: "Service",
        components: {
            Slick
        },
        data() {
            return {
                slickOptions: {
                    vertical: true,
                    arrows: false,
                    autoplay: false,
                    speed: 600,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    pauseOnHover: false,
                    dots: true,
                    pauseOnDotsHover: false,
                    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                vertical: false,
                            }
                        }
                    ]
                }

            }

        },
        computed: {
            slides() {
               return this.$store.getters.serviceslides
            },
        }
    }
</script>

<style scoped>

</style>
