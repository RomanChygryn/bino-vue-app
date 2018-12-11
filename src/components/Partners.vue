<template>
    <section class="partners">
        <div class="partners__header">
            <h2 class="title-primary">
               our Partners
            </h2>

            <h3 class="subtitle-primary">
                It has survived not only five centuries, but also the leap scrambled it to make a type.
            </h3>

            <app-separator-primary/>
        </div>

        <div class="container">
            <div class="row partners__items justify-content-md-center">
                <div class="col-6 col-md-3 mb-5" v-for="partner in partners">
                    <a :href="partner.url" class="partners__item">
                        <img :src="partner.image" alt="">
                    </a>
                </div>
            </div>
        </div>
        <app-section-separator />
    </section>
</template>

<script>
    import SeparatorPrimary from '../components/SeparatorPrimary'
    import SectionSeparator from '../components/SectionSeparator'

    export default {
        name: "Partners",
        components: {
            appSeparatorPrimary: SeparatorPrimary,
            appSectionSeparator: SectionSeparator,
        },
        computed: {
            partners() {
                return this.$store.getters.partners
            }
        }
    }
</script>

<style scoped>

</style>
