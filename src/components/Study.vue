<template>
    <section class="study">
        <div class="study__header">
            <h2 class="title-primary">
                CASE STUDY
            </h2>

            <h3 class="subtitle-primary">
                A brief story about how this process works, keep an eye till the end.
            </h3>

            <app-separator-primary/>
        </div>

        <div class="container">
            <div class="study__content">
                <div class="study__slider">
                    <div class="study__slider-content">
                        <Slick ref="slick"
                               :options="slickOptions"
                               class="study__slick slider">

                            <div class="study__slick-item">
                                <div class="study__content-image">
                                    <img src="../assets/icons/heart.png" alt="clean code" class="study__content-icon">
                                </div>
                                <h4 class="study__content-title">
                                    ACCUMULATE CREATIVE IDEAS
                                </h4>
                                <app-separator-secondary></app-separator-secondary>
                                <div class="description-primary">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum
                                    has been the industry. Lorem Ipsum is simply dummy text of the printing and
                                    typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has
                                    been the setting let.
                                </div>
                                <div class="study__content-btn">
                                    <router-link tag="a" to="about-us" class="btn btn-primary">read more</router-link>
                                </div>
                            </div>

                            <div class="study__slick-item">
                                <div class="study__content-image">
                                    <img src="../assets/icons/glasses.png" alt="clean code" class="study__content-icon">
                                </div>
                                <h4 class="study__content-title">
                                    CLEAN CODE
                                </h4>
                                <app-separator-secondary></app-separator-secondary>
                                <div class="description-primary">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum
                                    has been the
                                    industry.
                                </div>
                                <div class="study__content-btn">
                                    <router-link tag="a" to="about-us" class="btn btn-primary">read more</router-link>
                                </div>
                            </div>

                            <div class="study__slick-item">
                                <div class="study__content-image">
                                    <img src="../assets/icons/heart.png" alt="clean code" class="study__content-icon">
                                </div>
                                <h4 class="study__content-title">
                                    Software innovation
                                </h4>
                                <app-separator-secondary></app-separator-secondary>
                                <div class="description-primary">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum
                                    has been the industry. Lorem Ipsum is simply dummy text of the printing and
                                    typesetting let. Lorem Ipsum has been the industry Printing and typelorem Ipsum has
                                    been the setting let.
                                </div>
                                <div class="study__content-btn">
                                    <router-link tag="a" to="about-us" class="btn btn-primary">read more</router-link>
                                </div>
                            </div>
                        </Slick>
                    </div>
                </div>
                <div class="study__image">
                    <img class="img-src" src="../assets/section-img/man-sitting.jpg" alt="Man sitting">
                </div>
            </div>

        </div>

    </section>
</template>

<script>
    import Slick from 'vue-slick';
    import SeparatorPrimary from '../components/SeparatorPrimary'
    import SeparatorSecondary from '../components/SeparatorSecondary'

    export default {
        name: "Study",
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    pauseOnHover: false,
                    dots: true,
                    arrows: false,
                    pauseOnDotsHover: false,
                    cssEase: "linear",
                    draggable: false,
                },
            }
        },
    }
</script>

<style scoped>

</style>
