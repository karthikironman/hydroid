<template>
  <div class="meterReading">
    <div class="row-one">
      <blacktop class="consumption" :title="'Current consumption of meters'" />
      <blacktop class="calendar" :title="'Calendar'">
       <calendar/>
      
      </blacktop>
     
     
    </div>
     <div class="row-two">
       <div class="label-patch">Daily meter reading report </div>
         <linechart/>
      </div>
  </div>
</template>
<script>
 import linechart from "@/components/charts/line";
import calendar from "@/components/widgets/calendar"
import blacktop from "@/components/widgets/blacktop"
// import notificationCol from "@/components/widgets/notificationcol.vue";
export default {
  data() {
    return {};
  },
  components: {
    linechart,
    calendar,
    blacktop
    // notificationCol
  }
};
</script>
<style scoped>
.meterReading {
  height: calc(100vh - 4.4rem);
  padding-top: 1rem;

  overflow-y: scroll;
}
.row-one {
  display: flex;
}
.consumption {
  width: 55%;
  height: 30rem;
  margin-right: 1rem;
}
.calendar {
  width: 45%;
  height: 30rem;
  margin-right: 1rem;
   
    background: #F2F2F2;
}
.row-two{
  padding:2rem 1rem;

}
.label-patch{
  background-color:#FFF2D1;
  width:fit-content;
  padding:1rem 3rem;
  border-radius:13px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>