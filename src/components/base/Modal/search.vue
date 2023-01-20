<template>
<transition name="opacity" appear>
    <div class="wrap-modal" v-if="open">
        <div class="close">
            <div @click="$emit('close')">
                <img src="@/assets/x.svg" alt="x">
            </div>
        </div>
        <div class="inner-modal">
            <span>Search</span>
            <form @submit.prevent="search" class="form-search">
                <div class="wrap-input">
                    <input type="text" v-model="s" placeholder="Artist / Album / Title">
                </div>
                <div class="wrap-input">
                    <input type="submit" value="Search">
                </div>
            </form>
        </div>
    </div>
</transition>
</template>

<script>
    export default {
        name: 'ModalSearch',
        props: {
            open: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return { 
                s: ''
            }
        },
        methods: {
            search () {
                this.$router.push({name: 'search', query : { s: this.s }})
                this.$emit('close')
                this.s = ''
            }
        }
    }
</script>

<style scoped>

</style>