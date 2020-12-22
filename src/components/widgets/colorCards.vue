<template>
  <div :class="colorChoose(color)" class="color-cards">
    <p class="color_heading">Heading</p>
  </div>
</template>
<script>
export default {
  props: ["color"],
  data() {
    return {};
  },
  methods: {
    colorChoose(key) {
      switch (key) {
        case 1:
          return "orange";
        case 2:
          return "blue";
        case 3:
          return "green";
        default:
          return "brown";
      }
    }
  }
};
</script>
<style scoped>
.orange {
  background: transparent linear-gradient(300deg, #f83600 0%, #fe8700 100%) 0%
    0% no-repeat padding-box;
}
.blue {
  background: transparent linear-gradient(119deg, #009efd 0%, #2af597 100%) 0%
    0% no-repeat padding-box;
}
.green {
  background: transparent linear-gradient(119deg, #56ab2f 0%, #a8e063 100%) 0%
    0% no-repeat padding-box;
}
.brown {
  background: transparent linear-gradient(300deg, #f5515f 0%, #a1051d 100%) 0%
    0% no-repeat padding-box;
}
.color-cards {
  box-sizing: border-box;
  border-radius: 8px;
  max-width: 24%;
  min-width: 24%;
  padding: 1rem;
  height: 12rem;
  box-shadow: 0px 5px 9px #0000002b;
  font-weight: 500;
}
.color_heading {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-size: 18px;
  margin: 0;
}
</style>