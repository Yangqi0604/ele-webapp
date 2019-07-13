<template>
    <div class="search-body">
        <search-header></search-header>
        <search-form></search-form>
<!--        <search-hot></search-hot>-->
    </div>
</template>

<script>
    import SearchHeader from '@/components/Search/search-header.vue'
    import SearchForm from '@/components/Search/search-form.vue'
    // import SearchHot from '@/components/Search/search-hot.vue'
    export default {
        name: "Search" ,
        components:{
            "search-header":SearchHeader,
            "search-form":SearchForm,
            // "search-hot":SearchHot
        },
        data(){
            return {
                
            }
        
      }
    }
</script>

<style scoped>
    /*.search-body {*/
    /*    background-color: #f0efed;*/
    /*}*/

</style>
