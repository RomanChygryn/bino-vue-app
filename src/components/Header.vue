<template>
    <div>
        <header class="header" >

            <Slick ref="carousel"
                   :options="slickOptions"
                   class="header__slider slider">

                <div class="slider__item">
                    <div class="slider__image">
                        <img src="../assets/section-img/slider1.jpg" alt="">
                        <div class="slider__text">
                            <div class="ie-hack">
                                <div class="slider__text-wrapper">
                                    <h5 class="slider__subtitle">Our Clients <br class="display-xl-none"> Are Our First
                                        Priority
                                    </h5>
                                    <h3 class="slider__title">WELCOME TO DINO</h3>
                                    <div class="separator-primary"></div>
                                    <p class="slider__description">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <span
                                            class="display-sm-none">Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.</span></p>
                                </div>

                                <div class="slider__buttons">
                                    <a v-scroll-to="'#trial'" href="#" class="btn btn-primary mb-2">
                                        get started now
                                    </a>
                                    <a v-scroll-to="'#about-us'" href="#" class="btn btn-secondary d-none d-sm-inline-block mb-2">
                                        learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="slider__item">
                    <div class="slider__image">
                        <img src="../assets/section-img/slider2.jpg" alt="">

                        <div class="slider__text">
                            <div class="ie-hack">
                                <div class="slider__text-wrapper">
                                    <h5 class="slider__subtitle">Our Clients <br class="display-xl-none">Are Our First
                                        Priority
                                    </h5>
                                    <h3 class="slider__title">WELCOME TO BINO</h3>
                                    <div class="slider__separator"></div>
                                    <p class="slider__description">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <span
                                            class="display-sm-none">Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.</span>
                                    </p>


                                </div>
                                <div class="slider__buttons">
                                    <a href="#" class="btn btn-primary mb-2">
                                        get started now
                                    </a>
                                    <a href="#" class="btn btn-secondary d-none d-sm-inline-block mb-2">
                                        learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="slider__item">
                    <div class="slider__image">
                        <img src="../assets/section-img/slider3.jpg" alt="">
                        <div class="slider__text">
                            <div class="ie-hack">
                                <div class="slider__text-wrapper">
                                    <h5 class="slider__subtitle">Our Clients <br class="display-xl-none">Are Our First
                                        Priority
                                    </h5>
                                    <h3 class="slider__title">WELCOME TO CINO</h3>
                                    <div class="slider__separator"></div>
                                    <p class="slider__description">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <span
                                            class="display-sm-none">Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.</span>
                                    </p>
                                </div>

                                <div class="slider__buttons">
                                    <a href="#" class="btn btn-primary mb-2">
                                        get started now
                                    </a>
                                    <a href="#" class="btn btn-secondary d-none d-sm-inline-block mb-2">
                                        learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slick>

            <div class="header__icon">
                <div class="header__shape header__shape--left"></div>
                <div class="ie-hack-icon">
                    <div class="header__icon-wrapper">
                        <img src="../assets/icons/anchor.png" alt="">
                    </div>
                </div>
                <div class="header__shape header__shape--right"></div>
            </div>

        </header>
    </div>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: "Header",
        components: {
            Slick
        },
        data() {
            return {
                slickOptions: {
                    autoplay: false,
                    speed: 600,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    pauseOnHover: false,
                    dots: true,
                    pauseOnDotsHover: false,
                    cssEase: "linear",
                    draggable: false,
                    prevArrow: '<button class="slider__arrow slider__arrow--left"><i class="fas fa-angle-left"></i></button>',
                    nextArrow: '<button class="slider__arrow slider__arrow--right"><i class="fas fa-angle-right"></i></button>',
                    responsive: [
                            {
                                breakpoint: 576,
                                settings: {
                                    infinite: false,
                                    dots: true,
                                    arrows: false
                                }
                            }
                        ]
                }

            }

        },
    }
</script>

<style lang="scss">

</style>
