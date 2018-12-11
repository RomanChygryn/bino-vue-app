<template>
    <div class="blog__subpage">
        <app-navigation-sub />
        <app-blog />
    </div>
</template>

<script>
    import NavigationSub from '@/subpages/NavigationSub'
    import Blog from '../components/Blog'

    export default {
        name: "Blog",
        components: {
            appBlog: Blog,
            'appNavigationSub': NavigationSub
        },
    }
</script>

<style scoped>

</style>
