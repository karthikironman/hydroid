<template>
  <div class="sidemenu">
    <box v-for="item in menu" :key="item"  :data="item"></box>
  </div>
</template>
<script>
import menu_box from '@/components/widgets/menu_box.vue'
export default {
  data() {
    return {
      menu: [
        {
          style: "box-menu",
          title: "username"
        },
        {
          style: "simple-menu",
          title: "Dash board"
        },
        {
          style: "simple-menu",
          title: "meter reading"
        }
      ]
    };
  },
  components:{
      'box':menu_box
  }
};
</script>
<style scoped>
.sidemenu {
  width: 12rem;
  height: calc(100vh - 3.4rem);
  background: #9873c9;
  position: absolute;
  color: black;
}
</style>