<template>
    <div class="portfolio__subpage">
        <app-navigation-sub />
        <app-works />
    </div>
</template>

<script>
    import NavigationSub from '@/subpages/NavigationSub'
    import Works from '../components/Works'
    export default {
        name: "Portfolio",
        components: {
            appWorks: Works,
            'appNavigationSub': NavigationSub
        },
    }
</script>

<style scoped>

</style>
