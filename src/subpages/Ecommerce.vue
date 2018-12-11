<template>
    <article class="article">
        <div class="article__header">
            <div class="article__header-bg">
                <img :src="article.articleImage" :alt="article.articleImageAlt">
            </div>
            <div class="article__header-container">
                <h4 class="article__header-title">
                    {{article.title}}
                </h4>
            </div>
        </div>

        <div class="container article__content">
            <div class="article__body">
                <p class="article__text">
                    {{article.text}}
                </p>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "Ecommerce",
        computed: {
            article() {
                return this.$store.getters.articles[3]
            }
        }
    }
</script>

<style scoped>

</style>
