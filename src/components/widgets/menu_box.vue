<template>
  <div class="menu_box" @click="emitEvent()" :class=getClass(data.unique,data.active)>
    <img class="logo_menu" :src="data.image"/>
    <p>{{data.title}}</p>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {};
  },
  methods:{
    getClass(unique,active){
      let result = ""
      if(unique === true)
      result+= 'unique';
      if(active === true)
      result+=' active'

      return result;
    },
    emitEvent(){
      console.log('from emit event')
      this.$emit('click')
    }
  }
};
</script>
<style scoped>
.menu_box{
  display:flex;
  align-items: center;
    max-width:100%;
    background-color:transparent ;
    font-family: Arial, Helvetica, sans-serif;
    padding:2px 2px 2px 25px;
    margin:0 0 10px 0;
    cursor:pointer;
     text-align:center;
     text-transform:capitalize;
     color:white;
     margin-left:10px;
}
.menu_box:hover{
 opacity:0.8;
}
.active:hover{
  opacity: 1;
}
.unique{
  background:#5953B5 !important;
  color:white !important;
  padding:10px;
   border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    padding-left:20px;
    margin-left:0;

}
.unique:hover{
  /* background:yellow; */
  /* color:white */
}

.logo_menu{
  width:20px;
  height:20px;
  margin-right:10px;
}
.active{
  background:#F6F6F6;
    color:#5953B5 ;
     border-top-left-radius: 25px;
    border-bottom-left-radius: 25px; 
     
}

.active .logo_menu{
  filter: invert(91%) sepia(32%) saturate(3184%) hue-rotate(328deg) brightness(100%) contrast(95%);

}
.logo_menu{
  filter: invert(95%) sepia(0%) saturate(0%) hue-rotate(247deg) brightness(106%) contrast(107%);
}
.unique .logo_menu{
  background-color:orange;
  padding:.5rem;
  border-radius:50%;
}
</style>