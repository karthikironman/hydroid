<template>
  <div class="top-menu">
    <div class="menu" @click="toggle(index)" :class="{active:item.active}" v-for="(item,index) in menu" :key="index">{{item.name}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          active: true,
          name: "Organisation"
        },
        {
          active: false,
          name: "Apartment complex"
        },
        {
          active: false,
          name: "Building"
        },
        {
          active: false,
          name: "Floor"
        },
        {
          active: false,
          name: "Unit"
        },
        {
          active: false,
          name: "Unit Device Mapping"
        }
      ]
    };
  },
  methods:{
      toggle(index){
      for(let a=0;a<this.menu.length;a++){
          this.menu[a].active = false;
      }
      this.menu[index].active = true;
      this.$emit('toggle',index)
      }
  }
};
</script>
<style scoped>
.top-menu {
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 1.5rem;
  font-size:17px;
}
.menu {
  padding: 1rem 2.3rem;
  border-radius: 8px;
  cursor: pointer;
}
.active {
  background: transparent linear-gradient(286deg, #f5515f 0%, #a1051d 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 6px 15px #00000038;
  color: white;
}
</style>