<template>
  <div class="inputelement">
    <p class="label">{{data.name}}</p>
    <input class="fit-width" :placeholder="data.placeholder" />
  </div>
</template>
<script>

export default {
    props:["data"],
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.label {
    margin-left:2px;
  color: #393939;
  font-weight: 500;
  text-transform: capitalize;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 5px;
  font-size: 17px;
}
.inputelement {
  width: 100%;
  margin-right:3rem;
}
.fit-width {
  width: 100% !important;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000004a;
  border: none;
  border-radius: 2px;
  font-size: 18px;
  padding: 0.5rem 1rem;
  outline: none;
}
</style>