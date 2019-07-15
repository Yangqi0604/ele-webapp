<template>
    <div class="search-body">
        <Quality/>
        <QualityMain/>
    </div>
</template>

<script>
    import Quality from '../components/engorge/engorge-one'
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
