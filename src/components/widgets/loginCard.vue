<template>
  <div class="login-card">
    <div class="head-login-card">HYDROID SMART WATER METER</div>
    <p>Sign in to your account</p>
    <INPUT />
    <br />
    <INPUT />
    <br />
    <button @click="login()">Login</button>
  </div>
</template>
<script>
import INPUT from '@/components/widgets/inputfield.vue'
export default {
  data() {
    return {};
  },
  components:{
   INPUT
  },
  methods:{
      login(){
          this.$router.push({name:'dashboard'})
      }
  }
};
</script>
<style scoped>
.head-login-card{
    background-color:white;
    color:#01425B;
    font-family: Arial, Helvetica, sans-serif;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    padding:.5rem 0;
}
.login-card{
    position:relative;
    width:400px;
    background-color:#dfd5d5;
    padding:2rem 1rem 1rem 1rem;
    text-align: center;
    border-radius: 5px;
    -webkit-box-shadow: -1px 12px 19px 0px rgba(189,189,189,1);
-moz-box-shadow: -1px 12px 19px 0px rgba(189,189,189,1);
box-shadow: -1px 12px 19px 0px rgba(189,189,189,1);
}
</style>