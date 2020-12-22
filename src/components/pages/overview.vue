<template>
  <div class="overview">
    <div class="row-one">
      <blacktop class="consumption" :title="'Current consumption of meters'" />
      <blacktop class="calendar" :title="'Calendar'">
        <calendar />
      </blacktop>
    </div>
    <div class="row-two">
      <blacktop :title="'Current consumption of meters'">
        <barchart />
      </blacktop>
    </div>
  </div>
</template>
<script>
import barchart from "@/components/charts/bar";
import calendar from "@/components/widgets/calendar";
import blacktop from "@/components/widgets/blacktop";
// import notificationCol from "@/components/widgets/notificationcol.vue";
export default {
  data() {
    return {};
  },
  components: {
    barchart,
    calendar,
    blacktop
    // notificationCol
  }
};
</script>
<style scoped>
.overview {
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

  background: #f2f2f2;
}
.row-two {
  padding: 2rem 0rem;
  margin-right:1rem;
}
.label-patch {
  background-color: #fff2d1;
  width: fit-content;
  padding: 1rem 3rem;
  border-radius: 13px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>