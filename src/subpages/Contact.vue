<template>
    <div class="contact__subpage">
        <app-navigation-sub />
        <app-contact />
    </div>
</template>

<script>

    import Contact from '../components/Contact'
    import NavigationSub from '@/subpages/NavigationSub'

    export default {
        name: "Contact",
        components: {
            appContact: Contact,
            'appNavigationSub': NavigationSub
        },
    }
</script>

<style scoped>

</style>
