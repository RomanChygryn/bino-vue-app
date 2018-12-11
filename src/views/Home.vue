<template>
    <div>

        <app-header />
        <app-features />

        <app-history />
        <app-service />
        <app-works />
        <app-section-separator />
        <app-study />
        <app-stats />
        <app-price />
        <app-team />
        <app-partners />
        <app-blog />
        <app-contact />
        <app-trial />
        <app-scrolltop/>

    </div>
</template>
<style>

</style>
<script>
    import Header from '../components/Header'

    import Features from '../components/Features'
    import SectionSeparator from '../components/SectionSeparator'
    import History from '../components/History'
    import Service from '../components/Service'
    import Works from '../components/Works'
    import Study from '../components/Study'
    import Stats from '../components/Stats'
    import Price from '../components/Price'
    import Team from '../components/Team'
    import Partners from '../components/Partners'
    import Blog from '../components/Blog'
    import Contact from '../components/Contact'
    import Trial from '../components/Trial'
    import Scrolltop from '../components/Scrolltop'


    export default {
        components: {
            appHeader: Header,

            appFeatures: Features,
            appSectionSeparator: SectionSeparator,
            appHistory: History,
            appService: Service,
            appWorks: Works,
            appStudy: Study,
            appStats: Stats,
            appPrice: Price,
            appTeam: Team,
            appPartners: Partners,
            appBlog: Blog,
            appContact: Contact,
            appTrial: Trial,
            appScrolltop: Scrolltop,

        },

        data() {
            return {
                fullWidth: document.documentElement.clientWidth,
                mobile: false
            }
        },

        methods: {
            handleResize (event) {
                this.fullWidth = document.documentElement.clientWidth;
                this.mobile = (this.fullWidth <= 768);

                this.$store.state.app.clientWidth = this.fullWidth;
                this.$store.state.app.mobile = this.mobile;
            }
        },

        created() {
            this.handleResize();
            window.addEventListener('resize', this.handleResize)
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.handleResize)
        },
    }
</script>
