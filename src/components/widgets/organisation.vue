<template>
  <div>
    <div class="row-element" v-for="(row,index) in formElements" :key="index">
      <inputelement v-for="(item,index2) in row" :data="item" :key="index2" />
    </div>
    <submitbtn/>
    <br/>
  </div>
</template>
<script>
import inputelement from "@/components/widgets/inputelement.vue";
import submitbtn from "@/components/widgets/formsubmitbtn.vue"
export default {
  data() {
    return {
      formElements: [
        [{ name: "Select", placeholder: "" }],
        [{ name: "ID", placeholder: "Organisation ID" }],
        [
          { name: "Name", placeholder: "Organisation name" },
          { name: "Tyoe", placeholder: "Select type" }
        ],
        [{ name: "ID", placeholder: "Organisation ID" }],
        [
          { name: "City", placeholder: "Enter city" },
          { name: "Post", placeholder: "Enter Post" },
          { name: "Country", placeholder: "Enter Country" }
        ],
        [
          { name: "Contact number", placeholder: "+91 __" },
          { name: "Website", placeholder: "Enter Website" }
        ]
      ]
    };
  },
  components: {
    inputelement,submitbtn
  }
};
</script>
<style scoped>
.row-element {
  display: flex;
  width: 100%;
}
</style>