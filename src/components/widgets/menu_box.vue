<template>
  <div class="menu_box">
    <p>{{data.title}}</p>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {};
  }
};
</script>
<style scoped>
.menu_box{
    max-width:100%;
    background-color:transparent !important;
    font-family: Arial, Helvetica, sans-serif;
    padding:2px;
    margin:0 0 10px 0;
    cursor:pointer;
     text-align:center;
     text-transform:capitalize;
     color:white;
}
.menu_box:hover{
    background-color:white !important;
    color:#490daa;
}
</style>