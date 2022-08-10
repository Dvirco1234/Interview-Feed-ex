<template>
    <section class="app-header main-layout full">
        <header class="flex align-center space-between">
            <div class="logo flex align-center">
                <img class="icon" src="../assets/logo.svg" />
            </div>
            <input class="checkbox" type="checkbox" id="hamburger-checkbox" hidden/>
            <label class="hamburger-lines" for="hamburger-checkbox">
                <span v-for="(line, i) in 3" class="line" :class="'line' + (i+1)"></span>
            </label>
            <ul class="nav-links flex space-between clean-list full">
                <li class="nav-link" v-for="btn in navLinks" :key="btn">{{ btn }}</li>
            </ul>
        </header>
    </section>
</template>
<script>
export default {
    name: 'app-header',
    props: { type: Object },
    data() {
        return {
            navLinks: ['Features', 'Team', 'Sign in'],
        }
    },
    created() {},
    methods: {},
    computed: {},
    unmounted() {},
    components: {},
}
</script>
