<template>
    <section class="history">

        <div class="section-separator"></div>

        <div class="container">
            <div class="halftext">
                <div class="halftext__image">
                    <img class="image-src" src="../assets/section-img/Monitor.png" alt="Monitor">
                </div>

                <div class="halftext__content">
                    <h3 class="title-secondary">
                        OUR HISTORY
                    </h3>
                    <p class="description-primary">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ip sum has been
                        the industry's standard dummy text ever since the 1500s, when an unk- nown printer took a galley
                        of type and scrambled it to make a type specimen book.
                        <br>
                        <br>
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <a v-scroll-to="'#trial'" href="#" class="btn btn-primary mb-2">
                        get started now
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        name: "History"
    }
</script>

<style scoped>

</style>
