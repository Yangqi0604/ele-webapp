<template>
    <div class="search-body">
        <Quality/>
        <QualityMain/>
    </div>
</template>

<script>
    import Quality from '../components/quality/quality1'
    import QualityMain from '../components/quality/quality-main'
    export default {
        name: "quality" ,
        components:{
            Quality,
            QualityMain,
        },
        data(){
            return {
                
            }
        
        }
    }
</script>

<style scoped>

</style>
