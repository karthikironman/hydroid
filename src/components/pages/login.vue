<template>
  <div class="login">
      <img class="wave_back"  src="../../assets/group_bar.svg" />
    <div class="head_bar">

      <div class="image_wrapper" v-for="(image,index) in imageArray" :key="index">
        <img :src="image" />
      </div>
    </div>
    <img class="wallpaper" src="../../assets/welcome_bg.png" />
    <img class="side_logo" src="@/assets/logo_shadow.png" />
    <loginCard class="login_card" />
  </div>
</template>

<script>
import loginCard from "@/components/widgets/loginCard.vue";
import image1 from  "@/assets/welcome/group_1.svg";
import image2 from  "@/assets/welcome/group_2.svg";
import image3 from  "@/assets/welcome/group_3.svg";
import image4 from  "@/assets/welcome/group_4.svg";
import image5 from  "@/assets/welcome/group_5.svg";
export default {
  data() {
    return {
      imageArray: [

      ]
    };
  },
  mounted(){
   this.imageArray.push(image1)
    this.imageArray.push(image2)
     this.imageArray.push(image3)
      this.imageArray.push(image4)
       this.imageArray.push(image5)
  },
  components: {
    loginCard
  },
  methods: {
    login() {
      this.$router.push({
        name: "dashboard"
      });
    }
  }
};
</script>
<style scoped>
.head_bar {

    position: absolute;
    display: flex;
    justify-content: center;
    z-index: 1;
    display: flex;
    width: 100vw;
    top: 2rem;
    /* background-image: url(/img/group_bar.816c07cc.svg); */
    background-size: contain;
    height: fit-content;

}
.wave_back{
  position:absolute;
  width:100vw;
  z-index:1;
  top:0;
  /* height:12rem; */
}
.login {
  position: relative;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  justify-content: space-evenly;
}
.side_logo {
  margin-top: 8rem;
  width: 25rem;
  z-index: 1;
}
.wallpaper {
  height: 100vh;
  width: 100vw;
  position: absolute;
}
.image_wrapper{
    margin:0 2rem;
    position:relative;
    z-index:1;
}
.image_wrapper > img{
    width:8rem;
}
.login_card{
    margin-top:7rem;
}
</style>
<style >
.toasted-container.top-right {
    top: 10%;
    right: 7%;
    font-family: arial;
}
</style>