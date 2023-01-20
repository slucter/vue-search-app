<template>
    <div class="wrap-search-page">
        <modal-search 
            @close="openModal = false"
            :open="openModal"
        />
        <nav>
            <div class="inner-nav">
                <button class="burger-btn"></button>
                <img src="@/assets/ngmusic.svg" alt="ngm">
                <div @click="openModal = true">
                    <img src="@/assets/search.svg" alt="src">
                </div>
            </div>
        </nav>
        <section class="text-search">
            <p>Search result for : <span>Json Mraz</span></p>
        </section>
        <section class="wrap-list-search">
            <card />
            <div class="load-more-btn">
                <button>Load More</button>
            </div>
        </section>
    </div>
</template>

<script>
    import Card from '@/components/common/Card'
    import ModalSearch from '@/components/base/Modal/search'

    export default {
        name: 'SearchPageResult',
        components: {
            Card,
            ModalSearch
        },
        data () {
            return {
                openModal: false
            }
        }
    }
</script>

<style scoped>

</style>