<template>
  <div class="wrapper">
    <div class="inner_wrapper">
      <img class="img" src="@/assets/404.png" />
      <p class="para1">There is no such page</p>
      <p class="para3">
        Go to 
        <span class="pages" @click="goTo(page.routeName)" v-for="(page,index) in comp_pages" :key="index">
          <span v-if="index!==0">,</span>
          {{page.name}}
        </span>
      </p>
      <hr/>
      <p class="footer">(c) HYDROID PRIVATE LIMITED</p>
      <p class="footer_year">2020</p>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      comp_pages: [
        { name: "Dashboard", routeName: "dashboard" } 
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
  width: auto;
  position: absolute;
 
  left: 50%;
  transform: translate(-50%, 0%);
}
.img {
  width: 30rem;
  margin: 0 auto;
  display: block;
}
.para1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  background: #dadad5;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid rgb(22, 22, 22);
  color: black;
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
.footer{
    text-align: center;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color:grey;
    opacity:0.5;
}
.footer_year{
     text-align: center;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color:grey;
    opacity:0.5;
    position:relative;
    top:-1rem;
}
</style>