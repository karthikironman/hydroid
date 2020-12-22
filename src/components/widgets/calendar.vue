<template>
 <Datepicker class="date-picker" :inline="true"/>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
export default {
  data(){
    return{

    }
  },
  components:{
 Datepicker
  }
}
</script>
<style scoped>
.date-picker{
  width:100%;
  font-family: Arial, Helvetica, sans-serif;
  background-color:red !important;
}
</style>
<style>
.vdp-datepicker__calendar {
 
    background: #F2F2F2 !important;
 
}
.vdp-datepicker__calendar {

    border:none !important;
}
.vdp-datepicker__calendar {
    width: auto !important; 
    /* height:max-content !important; */
   
}
.vdp-datepicker__calendar .cell {
 
    height: 3.25rem !important;
    
}
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year {
 
    border: 1px solid #f1eeee;
    background-color:#F8C138;
    color:white;
    font-weight:900;
}
</style>