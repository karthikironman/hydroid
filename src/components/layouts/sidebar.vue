<template>
    <div>
      <head_bar />
      <sidemenu/>
      <div  class="innercontent"> <slot></slot></div>
       
        </div>
</template>
<script>
import head_bar from "@/components/widgets/header.vue"
import sidemenu from "@/components/widgets/sidemenu.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        head_bar,
        sidemenu
    }
}
</script>
<style scoped>
.innercontent{
    margin-left: 12rem;
    padding-left:1rem;
    margin-top: 0rem;
    background: #F5F5F5;
}
</style>