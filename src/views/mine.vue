<template>
    <div>
        <div>
            <elm-nav></elm-nav>
            <elm-header></elm-header>
            <elm-main></elm-main>
        </div>
        <div v-if="false">
            <mt-nav></mt-nav>
        </div>
    </div>
</template>

<script>
    //elm
    import elmNav from '../components/mine-lem/elmNav'
    import elmHeader from '../components/mine-lem/elmHeader'
    import elmMain from '../components/mine-lem/elmMain'
    //mt
    import mtNav from '../components/mine-mt/mtNav'
    export default {
        name: "mine",
        components: {
            elmNav,
            elmHeader,
            elmMain,
            mtNav
        }
    }
</script>

<style scoped>

</style>