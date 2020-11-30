<template>
    <div class="login">
         <img class="side_logo" src="@/assets/logo_shadow.png"/>
         <loginCard />
         

    
    </div>
</template>

<script>
import loginCard from "@/components/widgets/loginCard.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        loginCard
    },
    methods:{
        login(){
            this.$router.push({
                name:"dashboard"
            })
        }
    }
}
</script>
<style scoped>
.login{
    position:relative;
    display:flex;
    align-items:center;
    height:100vh;
    width:100vw;
    justify-content: space-evenly;
}
.side_logo{
    margin-top:2rem;
    width:19rem;
}
</style>