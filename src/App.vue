<template>
    <div id="app">

        <app-navigation v-if="!routePath" />
        <app-navigation-sub v-if="routePath"/>

        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>



        <app-footer/>

    </div>
</template>

<style lang="scss">

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        max-width: 100%;
        margin: 0 auto;
        overflow: hidden;
    }

</style>
<script>
    // @ is an alias to /src
    import Navigation from '@/components/Navigation'
    import Home from '@/views/Home.vue'
    import Footer from '@/components/Footer'

    import NavigationSub from '@/subpages/NavigationSub'

    export default {
        name: 'home',
        components: {
            'appNavigation': Navigation,
            'app-home': Home,
            'appFooter': Footer,

            'appNavigationSub': NavigationSub
        },
        computed : {
            routePath() {
                return this.$route.path !== '/';
            }
        },
    }
</script>

<style lang="scss">
    @import '@/scss/main.scss';
    .fade-enter-active {
        animation: fade-in 500ms ease-out forwards;
    }
    .fade-leave-active {
        animation: fade-out 500ms ease-out forwards;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>
