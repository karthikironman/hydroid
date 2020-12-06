<template>
  <div class="login-card">
    <div class="wallpaper"></div>
    <div class="head-login-card">HYDROID SMART WATER METER</div>
    <p class="head_text">Sign in to your account</p>
    <INPUT />
    <br />
    <INPUT />
    <br />
    <button class="login_btn" @click="login()">Login</button>
    <button class="signup_btn">Signup</button>
    <button class="forgot_btn">Forgot Password?</button>
  </div>
</template>
<script>
import INPUT from "@/components/widgets/inputfield.vue";
export default {
  data() {
    return {};
  },
  components: {
    INPUT
  },
  methods: {
    login() {
      this.$router.push({ name: "dashboard" });
    }
  }
};
</script>
<style scoped>
.wallpaper{
  width:100%;
  height:100%;
  background-color:white;
  opacity:0.3;
  z-index:-1;
  position:absolute;
  top:0;
  left:0;
}
.head-login-card {
  background-color: white;
  
  color: #01425b;
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  font-weight: 900;
}
.login-card {
  position: relative;
  width: 400px;
  background-color: transparent linear-gradient(127deg, #66d55a 0%, #ffffff 52%, #00f6ff 100%) 0% 0% no-repeat padding-box !important;
  padding: 3rem 1rem 1rem 1rem;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  opacity: 1;
  text-align: center;
  border-radius: 5px;
  -webkit-box-shadow: -1px 12px 19px 0px rgba(189, 189, 189, 1);
  -moz-box-shadow: -1px 12px 19px 0px rgba(189, 189, 189, 1);
  box-shadow: -1px 12px 19px 0px rgba(189, 189, 189, 1);
  font-family: Arial, Helvetica, sans-serif

}
.login_btn {
  display: block;
  margin: 0 auto;
  background: transparent
    linear-gradient(97deg, #18007e 0%, #0d328d 46%, #006c9e 100%) 0% 0%
    no-repeat padding-box;
  border: none;
  color: white;
  padding: 0.4rem 3rem;
  border-radius: 4px;
}
.signup_btn {
  display: block;
  margin: 1rem auto;
  border: none;
  background: transparent;
  color: #141e4a;

    font-weight:600 !important;
   font-size:14px;
}
.forgot_btn {
  display: block;
  margin: 0 auto;
  border: none;
  background: transparent;
  color: #141e4a;
    font-weight:200 !important;
   font-size:14px;
}
.head_text {
  margin-bottom:20px;
  color: #181f4d;
  opacity: 1;
   font-weight:600 !important;
   font-size:14px;
}
</style>