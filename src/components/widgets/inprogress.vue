<template>
  <div class="wrapper">
    <div class="inner_wrapper">
      <img class="img" src="@/assets/inprogress.jpg" />
      <p class="para1">Work is in progress</p>
      <p class="para2">Please check this page after some time</p>
      <p class="para3">
        Completed page(s) is/are
        <span class="pages" @click="goTo(page.routeName)" v-for="(page,index) in comp_pages" :key="index">
          <span v-if="index!==0">,</span>
          {{page.name}}
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comp_pages: [
        { name: "Dashboard", routeName: "dashboard" },
        { name: "Login", routeName: "loginPage" }
      ]
    };
  },
  methods: {
    goTo(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>
<style scoped>
.wrapper {
  position: relative;
}
.inner_wrapper {
  width: 20rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);
}
.img {
  width: 15rem;
  margin: 0 auto;
  display: block;
}
.para1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  background: yellow;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid red;
  color: red;
  font-weight: 900;
}
.para2 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color:brown;
  font-style: italic;
}
.para3 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
.pages {
  font-weight: 900;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
</style>