<template>
    <div class="wrap-page">
        <div class="row-1">
            <img src="@/assets/logo.svg" alt="logo">
        </div>
        <form @submit.prevent="$router.push({ name: 'search', query: { s }})" class="row-2">
            <div class="wrap-input">
                <input type="text" v-model="s" placeholder="Artist / Album / Title">
            </div>
            <div class="wrap-input">
                <input type="submit" value="Search">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'SearchPageHome',
        data () {
            return {
                s: ''
            }
        },
    }
</script>

<style scoped>

</style>