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
        <section class="text-search" v-if="search">
            <p>Search result for : <span>{{ search }}</span></p>
        </section>
        <section class="wrap-list-search" v-if="results">
            <card v-for="(item, idx) in results" :key="idx" :item="item"/>
            <div class="load-more-btn">
                <button @click="loadMore">Load More</button>
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
                openModal: false,
                search: this.$route.query?.s ?? '',
                results: [],
                params: {
                    term: 'a',
                    limit: 5,
                    media: 'music'
                }
            }
        },
        watch: {
            '$route.query.s' : {
                handler : function (val) {
                    this.search = val
                    this.params = { ...this.params, term: val, limit: 5}
                    this.getList ()
                },
                deep: true,
                immediate: true
            }
        },
        mounted () {
            if (this.search) this.params.term = this.search
            this.getList ()
        },
        methods : {
            async getList () {
                try {
                    const datas = (await this.$http.get('/search', { params: this.params})).data
                    this.results = datas.results

                    console.log(datas)
                } catch (error) {
                    console.log(error)
                }
            },
            loadMore () {
                this.params.limit += 5
                this.getList ()
            }
        }
    }
</script>

<style scoped>

</style>