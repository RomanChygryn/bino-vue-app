<template>
    <div class="pricing__subpage">
        <app-navigation-sub />
        <app-price />
    </div>
</template>

<script>
    import NavigationSub from '@/subpages/NavigationSub'
    import Price from '../components/Price'

    export default {
        name: "Pricing",
        components: {
            appPrice: Price,
            'appNavigationSub': NavigationSub
        },
    }
</script>

<style scoped>

</style>
