<template>
    <section class="app main-layout">
        <app-header />
        <router-view />
    </section>
</template>
<script>
import appHeader from './cmps/app-header.vue'

export default {
    name: 'app-vue',
    created() {
        // this.$store.dispatch({ type: 'getLoggedinUser' })
    },
    components: {
        appHeader,
    },
}
</script>
