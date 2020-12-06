<template>
  <div>
      <pointdata v-for="(notification,index) in data" :key="index" :index="index" :content="notification"/>
  </div>
</template>
<script>
import pointdata from "@/components/widgets/point_data.vue";
export default {
  data() {
    return {
       data:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"]
    };
  },
  components: {
    pointdata
  }
};
</script>