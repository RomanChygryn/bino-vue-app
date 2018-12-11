<template>
    <section class="works" id="portfolio">
        <div class="works__header" v-scroll-reveal>
            <h2 class="title-primary">
                RECENT WORKS
            </h2>

            <h3 class="subtitle-primary">
                It has survived not only five centuries, but also the leap scrambled it to make a type.
            </h3>

            <app-separator-primary/>
        </div>

        <div class="row justify-content-center works__categories category" v-scroll-reveal>
            <div class="category__item-reset">
                <button @click="resetCat" class="category__item-name" :class="{noCategorySelected: noCategorySelected}">All</button>
            </div>
            <div class="category__item"
                 v-for="cat in categories">
                <label class="category__item-label">
                    <input type="radio"
                           class="category__item-checkbox"
                           name="category"
                           :value="cat.value"
                           v-model="category"
                           :checked="category"
                    >

                    <div class="category__checkbox-custom">
                        <h3 class="category__item-name"><span>/</span>{{cat.label}}</h3>
                    </div>
                </label>
            </div>


        </div>

        <div class="works__items" v-scroll-reveal>
            <div class="row justify-content-center">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3 works__item" v-for="item in works">
                    <a v-b-modal="item.id" class="works__item-link">
                        <img class="works__project-image" :src="item.image" alt="">
                        <div class="works__item-overlay">
                            <app-separator-secondary/>

                            <h4 class="works__item-title">{{item.title}}</h4>
                            <ul class="works__item-tags">
                                <li v-for="tag in item.tags">{{tag}} /</li>
                            </ul>
                        </div>
                    </a>
                </div>

               <div v-show="category === ''" class="works__items-buttons">
                   <button class="btn btn-primary" v-show="!maxReached" @click="showMore">Show more</button>
                   <button class="btn btn-secondary" v-show="maxReached" @click="limitWorks">Hide</button>
               </div>
            </div>
        </div>

        <template v-for="item in works" v-scroll-reveal>
            <b-modal :id="item.id" centered no-fade hide-footer size="lg" hide-header lazy
                     class="works__modal">

                <!--<button class="btn-close" @click="show = !show">X</button>-->



                <Slick ref="slick"
                       :options="slickOptions"
                       class="works__gallery slider">

                    <div class="works__gallery-item" v-for="image in item.gallery">
                        <img class="works__gallery-image" :src="image.image" alt="">
                    </div>
                </Slick>

            </b-modal>
        </template>

    </section>
</template>

<script>
    import {mapGetters} from 'vuex';
    import Slick from 'vue-slick';
    import SeparatorPrimary from '../components/SeparatorPrimary'
    import SeparatorSecondary from '../components/SeparatorSecondary'


    export default {
        name: "Works",
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
                },
                category: this.$store.state.selected.category,
                itemsOnPage: this.$store.state.itemsOnPage

            }
        },
        computed: {
            ...mapGetters([
                'categories',
                'works',
            ]),
            noCategorySelected() {
                if(this.category === '') {
                    return true
                }
            },
            maxReached() {
                let allItems = this.$store.state.works
                let limitedItems = this.works

                if(limitedItems >= allItems) {
                    return true
                } else {
                    return false
                }
            },



        },
        methods: {
            resetCat() {
                this.category = ''
                this.$store.dispatch('resetCategory');
            },
            showMore() {
                this.$store.dispatch('showMore', 2);
            },
            limitWorks() {
                this.$store.dispatch('limitWorks');
            }
        },
        watch: {
            category(newCategory) {
                this.$store.dispatch('setCategory', newCategory);
            },
        }

    }
</script>

<style scoped>

</style>
