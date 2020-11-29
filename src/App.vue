<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import no_sidebar_layout from "@/components/layouts/no_sidebar"
import sidebar_layout from "@/components/layouts/sidebar"
const default_layout = "no_sidebar";
export default {
  name: "App",
  components: {  no_sidebar_layout, sidebar_layout},
   computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "_layout";
    }
  }
};
</script>

<style>
</style>
