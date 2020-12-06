<template>
  <div class="dashboard">
    <div class="first_row">
      <blacktop class="graph_bt" :title="'Usage'">
        <barchart />
      </blacktop>
      <blacktop class="notification_bt" :title="'Notification'" ><notificationCol/></blacktop>
    </div>
  </div>
</template>
<script>
import barchart from "@/components/charts/bar";
import blacktop from "@/components/widgets/blacktop.vue";
import notificationCol from "@/components/widgets/notificationcol.vue";

export default {
  data() {
    return {};
  },
  components: {
    barchart,
    blacktop,
    notificationCol
  }
};
</script>
<style scoped>
.dashboard {
}
.graph_bt {
  width: 80%;
  height: 30rem;
  margin-right: 1rem;
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
</style>