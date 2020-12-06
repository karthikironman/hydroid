<template>
  <div class="sidemenu">
    <box v-for="(item,index) in menu" :key="index" :data="item" @click="makeActive(index)"></box>
  </div>
</template>
<script>
import menu_box from "@/components/widgets/menu_box.vue";
import dashboard_logo from "@/assets/list_dashboard.png";
import meterReading_logo from "@/assets/meter_reading.png";
// import facility_logo from "@/assets/fast_check.svg";
// import admin_logo from "@/assets/admin_panel.svg";
import account_logo from "@/assets/account_input.svg";
export default {
  data() {
    return {
      menu: [
        {
          style: "box-menu",
          title: "username",
          image: null,
          unique: true,
          active: false,
          routeName: "user"
        },
        {
          style: "simple-menu",
          title: "Dash board",
          image: null,
          unique: false,
          active: true,
          routeName: "dashboard"
        },
        {
          style: "simple-menu",
          title: "meter reading",
          image: null,
          unique: false,
          active: false,
          routeName: "meterreading"
        }
      ]
    };
  },
  watch:{
  "$route.path":function(){
     this.routeActiveMatch();
    }
  },
  methods: {
    makeActive(index) {
        console.log("from make active", index);
        for (let a = 0; a < this.menu.length; a++) {
          this.menu[a].active = false;
        }
        this.menu[index].active = true;
        this.$router.push({
          name: this.menu[index].routeName
        });
      },
      routeActiveMatch(){
         let currentPage = this.$route.name;

         for(let a=0;a<this.menu.length;a++){
           if(currentPage === this.menu[a].routeName){
             this.makeActive(a);
           }
         }
      }
  },
  mounted() {
    this.menu[0].image = account_logo;
    this.menu[1].image = dashboard_logo;
    this.menu[2].image = meterReading_logo;
    this.routeActiveMatch();
  },
  components: {
    box: menu_box
  }
};
</script>
<style scoped>
.sidemenu {
  width: 12rem;
  height: calc(100vh - 3.4rem);
  background: #7c6bda;
  position: absolute;
  color: black;
  padding-top: 0rem;
}
</style>