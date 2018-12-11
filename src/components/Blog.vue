<template>
    <section class="blog" id="blog">
        <div class="blog__header">
            <h2 class="title-primary">
                OUR BLOG
            </h2>

            <h3 class="subtitle-primary">
                Suspendisse sed eros mollis, tincidunt felis eget, interdum eratullam sit amet odio.
            </h3>

            <app-separator-primary/>
        </div>

        <div class="blog__content">
            <div class="row">
                <div class="col-12 col-xl-6 blog__item" v-for="article in articles">
                    <div class="blog__article-prev article-prev">
                        <div class="article-prev__image" :class="article.order">
                            <img class="img-src" :src="article.articleImage" :alt="article.articleImage.alt">
                        </div>

                        <div class="article-prev__desc">
                            <ul class="article-prev__tags">
                                <li class="article-prev__tag" v-for="tags in article.tags">
                                    {{tags}} /
                                </li>
                            </ul>
                            <h4 class="article-prev__title">
                                {{article.title}}
                            </h4>
                            <app-separator-secondary/>

                            <p class="article-prev__text">
                                {{limitedText}}
                            </p>

                            <router-link class="btn btn-link" :to="article.link" tag="a">
                                Read More >
                            </router-link>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>

<script>
    import SeparatorPrimary from '../components/SeparatorPrimary'
    import SeparatorSecondary from '../components/SeparatorSecondary'

    export default {
        name: "Blog",
        components: {
            appSeparatorPrimary: SeparatorPrimary,
            appSeparatorSecondary: SeparatorSecondary,
        },
        computed: {
            articles() {
                return this.$store.getters.articles
            },
            limitedText() {
                let fulltext = this.$store.getters.articles[0].text,
                    length = 220,
                    trimmedString = fulltext.substring(0, length),
                    dots = '...',
                    res = trimmedString.concat(dots);

                return res
            },
        }
    }
</script>

<style scoped>

</style>
