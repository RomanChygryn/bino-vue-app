<template>
<div>
    <nav class="navbar navbar-expand-lg" id="top">
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
                    <li @click="isActive = !isActive" class="nav-item">
                        <a class="nav-link" v-scroll-to="'#top'" href="#">Home</a>
                    </li>
                    <li @click="isActive = !isActive" class="nav-item">
                        <a class="nav-link" v-scroll-to="'#about-us'"  href="#">About us</a>
                    </li>

                    <li @click="isActive = !isActive" class="nav-item">
                        <a class="nav-link" v-scroll-to="'#portfolio'" href="#">Portfolio</a>
                    </li>

                    <li @click="isActive = !isActive" class="nav-item">
                        <a class="nav-link" v-scroll-to="'#pricing'" href="#">Pricing</a>
                    </li>

                    <li @click="isActive = !isActive" class="nav-item">
                        <a class="nav-link" v-scroll-to="'#team'" href="#">Team</a>
                    </li>

                    <li @click="isActive = !isActive" class="nav-item">
                        <a class="nav-link" v-scroll-to="'#blog'" href="#">Blog</a>
                    </li>

                    <li @click="isActive = !isActive" class="nav-item">
                        <a class="nav-link" v-scroll-to="'#contact'" href="#">Contact</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</div>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                isActive: false
            }
        }
    }
</script>

<style lang="scss">

</style>
