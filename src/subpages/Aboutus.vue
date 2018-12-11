<template>
    <div class="about__subpage">
        <app-navigation-sub />
        <app-features />
        <app-history />
        <app-service />

    </div>
</template>

<script>

    import NavigationSub from '@/subpages/NavigationSub'
    import Features from '../components/Features'
    import SectionSeparator from '../components/SectionSeparator'
    import History from '../components/History'
    import Service from '../components/Service'
    export default {
        name: "Aboutus",
        components: {

            appFeatures: Features,
            appSectionSeparator: SectionSeparator,
            appHistory: History,
            appService: Service,
            'appNavigationSub': NavigationSub
        },
    }
</script>

<style scoped>

</style>
