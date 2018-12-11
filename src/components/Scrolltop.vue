<template>
<button v-if="isVisible" class="scroll-top" v-scroll-to="'#top'">
    <i class="fas fa-arrow-circle-up"></i>
</button>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "Scrolltop",
        data: function() {
            return {
                isVisible: false
            };
        },
        methods: {
            initToTopButton: function() {
                $(document).bind('scroll', function() {
                    var backToTopButton = $('.scroll-top');
                    var trigger = $('.study').offset().top;
                    var article = $('.blog__content').offset().top;

                    if ($(document).scrollTop() > trigger) {
                        backToTopButton.addClass('isVisible');
                        this.isVisible = true;
                    } else {
                        backToTopButton.removeClass('isVisible');
                        this.isVisible = false;
                    }

                }.bind(this));
            },
        },
        mounted: function() {
            this.$nextTick(function() {
                this.initToTopButton();
            });
        }

    }
</script>

<style scoped>

</style>
