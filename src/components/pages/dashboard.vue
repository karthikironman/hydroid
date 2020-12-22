<template>
  <div class="dashboard">
    <div class="first_row">
      <blacktop class="graph_bt" :title="'Usage'">
        <barchart />
      </blacktop>
      <blacktop class="notification_bt" :title="'Notification'" ><notificationCol/></blacktop>
    </div>
    <p class="other_data_heading">Other Data Readings</p>
    <div class="row_elements">
       <colorCards v-for="i in 4" :color="i" :key="i"/>
    </div>
  </div>
</template>
<script>
import barchart from "@/components/charts/bar";
import blacktop from "@/components/widgets/blacktop.vue";
import notificationCol from "@/components/widgets/notificationcol.vue";
import colorCards from "@/components/widgets/colorCards.vue";
export default {
  data() {
    return {};
  },
  components: {
    barchart,
    blacktop,
    notificationCol,
    colorCards
  }
};
</script>
<style scoped>
.dashboard {
  height:calc(100vh - 5rem);
  overflow-y:scroll;
}
.graph_bt {
  width: 80%;
  height: 30rem;
  margin-right: 1rem;
}
.other_data_heading{
  font-family: Arial, Helvetica, sans-serif;
color: #5953B5;
font-weight:600;
font-size:19px;
}
.notification_bt {
  width: 25%;
  height: 30rem;
  margin-right: 1rem;
  background: transparent linear-gradient(146deg, #33CCFF 0%, #3366FF 100%) 0% 0% no-repeat padding-box;
}
.first_row {
  display: flex;
}
.row_elements{
  display:flex;
  justify-content: space-between;
  padding-right:15px;
  /* background:red; */
}
</style>