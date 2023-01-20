<template>
   <div class="box-card">
        <div class="img-card">
            <img :src="item.artworkUrl60 || ''" alt="img">
        </div>
        <div class="desc-card">
            <div class="inner-desc">
                <p>{{ item.artistName || '' }}</p>
                <span>{{ item.collectionName || '' }}</span>
            </div>
            <div class="badge-sec">
                <div class="badge">
                    <span>{{ item.primaryGenreName }}</span>
                </div>
                <div class="coin">
                    <img src="@/assets/currency-dollar.svg" alt="coindollar">
                    <span>{{  item.collectionPrice || '' }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            item : {
                type: Object,
                default () {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>

</style>