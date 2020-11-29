<template>
    <div>
     <div>
         <p>HYDROID SMART WATER METER</p>
         <p>Sign in to your account</p>
         <input><br>
         <input><br>
         <button @click="login()">Login</button>


     </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
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