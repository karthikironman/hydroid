<template>
    <div class="dashboard">
        dashbaord pa playboy
        <barchart/>
        </div>
</template>
<script>
import barchart from "@/components/charts/bar"
export default {
    data(){
        return{
            
        }
    },
    components:{
        barchart
    }
}
</script>
<style scoped>
.dashboard{
    margin-left: 13rem;
    margin-top: 1rem;
}
</style>