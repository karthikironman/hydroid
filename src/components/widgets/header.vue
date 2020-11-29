<template>
  <div class="header_hydroid">
    <img class="logo" src="@/assets/Hydroid.jpg" />
    <button @click="logout()" class="logout">Logout</button>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        logout(){
            this.$router.push({
                name:'loginPage'
            })
        }
    }
}
</script>
<style scoped>
.header_hydroid {
  width: 100%;
  overflow-x: hidden;
  background-color: white;
  min-height: 1rem;
  margin: 0;
  height: 3.4rem;
    -webkit-box-shadow: 2px -4px 17px 0px rgba(199, 197, 199, 1);
  -moz-box-shadow: 2px -4px 17px 0px rgba(199, 197, 199, 1);
  box-shadow: 2px -4px 17px 0px rgba(199, 197, 199, 1);
}
.logo {
  width: 6rem;
  height: 2.3rem;
  border-radius: 5px;
  position: absolute;
  top:7px;
  left:2.5rem;
  -webkit-box-shadow: 2px -4px 17px 0px rgba(199, 197, 199, 1);
  -moz-box-shadow: 2px -4px 17px 0px rgba(199, 197, 199, 1);
  box-shadow: 2px -4px 17px 0px rgba(199, 197, 199, 1);
}
.logout{
    position:absolute;
    right:1rem;
    top:1rem;
    outline:none;
    background:white;
    border:1px solid black;
    cursor:pointer;
}
</style>