<template>
 
    <tr class="table_row">
      <td class="index_number">
        <div class="text_wrapper">{{index}}</div>
      </td>
      <td class="side_data">{{content}}<br><br></td>
    </tr>
    
</template>
<script>
export default {
  props: ["index", "content"],
  data() {
    return {};
  }
};
</script>
<style scoped>
.text_wrapper {
  background: white;
  border-radius: 50%;
  padding: 0.3rem;
  font-size:15px;
  font-weight: 900;
  width: 1rem;
  height: 1rem;
  text-align: center;
  color: #336cff;
  position: absolute;
  top:0;
}
.index_number {
    position: relative;
    font-weight:400;
    
}
.side_data {
  color: white;
  padding-left: 40px;
  font-family: Arial, Helvetica, sans-serif;

}
.table_row{
    
}
</style>