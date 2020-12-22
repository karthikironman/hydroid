<template>
  <div class="addDetails">
    <div>
      <topmenu @toggle="toggle($event)" />
    </div>
    <div class="add-details-body">
      <component :is="componentName" />
    </div>
  </div>
</template>
<script>
import topmenu from "@/components/widgets/top-menu.vue";
import organisation from "@/components/widgets/organisation.vue";
import apartmentComplex from "@/components/widgets/apartmentComplex.vue";
import building from "@/components/widgets/building.vue";
import floor from "@/components/widgets/floor.vue";
import unit from "@/components/widgets/unit.vue";
import unitDeviceMapping from "@/components/widgets/unitDeviceMapping.vue";
export default {
  data() {
    return {
      selected: 0,
      componentName: "organisation"
    };
  },
  methods: {
    toggle(event) {
      switch (event) {
        case 0:
          this.componentName = "organisation";
          break;
        case 1:
          this.componentName = "apartmentComplex";
          break;
        case 2:
          this.componentName = "building";
          break;
        case 3:
          this.componentName = "floor";
          break;
        case 4:
          this.componentName = "unit";
          break;
        case 5:
          this.componentName = "unitDeviceMapping";
          break;
      }
    }
  },
  components: {
    topmenu,
    organisation,
    apartmentComplex,
    building,
    floor,
    unit,
    unitDeviceMapping
  }
};
</script>
<style scoped>
.addDetails {
  height: calc(100vh - 4.4rem);
  padding-top: 1rem;
  overflow-y: scroll;
}
.add-details-body{
    padding:1rem 1rem;
}
</style>