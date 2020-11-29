<template>
    <div>
      <head_bar />
      <sidemenu/>
        <slot></slot>
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