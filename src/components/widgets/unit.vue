<template>
  <div>
    <div class="row-element" v-for="(row,index) in formElements" :key="index">
      <inputelement v-for="(item,index2) in row" :data="item" :key="index2" />
    </div>
    <submitbtn />
    <br />
  </div>
</template>
<script>
import inputelement from "@/components/widgets/inputelement.vue";
import submitbtn from "@/components/widgets/formsubmitbtn.vue";
export default {
  data() {
    return {
      formElements: [
        [{ name: "Select Unit", placeholder: "Add new apartment" }],
        [{ name: "ID", placeholder: "Enter unit ID" }],
        [{ name: "Name", placeholder: "Enter unit name" }],
        [{ name: "Select Floor", placeholder: "" }]
      ]
    };
  },
  components: {
    inputelement,
    submitbtn
  }
};
</script>
<style scoped>
.row-element {
  display: flex;
  width: 100%;
}
</style>