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
            <div class="form-search">
                <div class="wrap-input">
                    <input type="text" placeholder="Artist / Album / Title">
                </div>
                <div class="wrap-input">
                    <input type="button" value="Search">
                </div>
            </div>
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
        }
    }
</script>

<style scoped>

</style>