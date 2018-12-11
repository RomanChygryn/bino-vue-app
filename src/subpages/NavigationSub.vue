<template>
    <div>
        <nav class="navbar navbar-sub navbar-expand-lg" id="top">
            <div class="container px-0">
                <router-link to="/" class="navbar-brand" tag="a">
                    <div class="navbar__logo logo">
                        <div class="logo__left">
                            <span class="logo__left-text">B</span>
                        </div>
                        <div class="logo__right">
                            <span class="logo__right-text">ino</span>
                        </div>
                    </div>
                </router-link>


                <button @click="isActive = !isActive" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span  :class="{active: isActive}" id="nav-toggle" class="nav__mobile--toggle"><span></span></span>
                </button>

                <div :class="{show: isActive}" class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <router-link @click="isActive = !isActive" to="/" class="nav-item" tag="li">
                            <a class="nav-link" v-scroll-to="'#top'" href="#">Home</a>
                        </router-link>

                        <router-link @click="isActive = !isActive" to="/about-us" class="nav-item" tag="li">
                            <a class="nav-link">About us</a>
                        </router-link>

                        <router-link @click="isActive = !isActive" to="/portfolio" class="nav-item" tag="li">
                            <a class="nav-link">Portfolio</a>
                        </router-link>

                        <router-link @click="isActive = !isActive" to="/price" class="nav-item" tag="li">
                            <a class="nav-link">Pricing</a>
                        </router-link>

                        <router-link @click="isActive = !isActive" to="/team" class="nav-item" tag="li">
                            <a class="nav-link">Team</a>
                        </router-link>

                        <router-link @click="isActive = !isActive" to="/blog" class="nav-item" tag="li">
                            <a class="nav-link">Blog</a>
                        </router-link>

                        <router-link @click="isActive = !isActive" to="/Contact" class="nav-item" tag="li">
                            <a class="nav-link">Contact</a>
                        </router-link>

                    </ul>

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NavigationSub",
        data() {
            return {
                isActive: false
            }
        }
    }
</script>

<style lang="scss">

</style>
