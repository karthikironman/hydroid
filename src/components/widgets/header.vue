<template>
  <div class="header_hydroid">
    <img class="logo" src="@/assets/menu_logo_shadow.png" />
    <profile_button @click="logout()" class="profile_btn"/>
    <img class="notifications" src="@/assets/bell.svg"/>
     <search_bar class="search_bar"/> 
   
    <!-- <button @click="logout()" class="logout">Logout</button> -->
  </div>
</template>
<script>
import search_bar from "@/components/widgets/search_bar.vue";
import profile_button from "@/components/widgets/headerProButton.vue";
export default {
    data(){
        return{

        }
    },
    components:{
      search_bar,
      profile_button
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
.search_bar{
  /* position:absolute;
  right:12rem; */
  float:right;
  margin-top:.4rem;
}
.header_hydroid {
  width: 100%;
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
  height: 2.8rem;
  float:right;
  border-radius: 5px;
  position: absolute;
  top:7px;
  left:2.5rem;
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
.notifications{
  width:1.6rem;
  float:right;
  margin:.9rem 2rem 0 1rem;
  /* position:absolute;
  top:.7rem;  
  right:14rem; */
}
.profile_btn{
  /* position:absolute;
  right:3rem; */
  float:right;
  margin-right:1rem;
  margin-top:3  px;
}
</style>