<template>
    <div class="team__subpage">
        <app-navigation-sub />
        <app-team />
    </div>
</template>

<script>
    import NavigationSub from '@/subpages/NavigationSub'
    import Team from '../components/Team'

    export default {
        name: "Team",
        components: {
            appTeam: Team,
            'appNavigationSub': NavigationSub
        },
    }
</script>

<style scoped>

</style>
