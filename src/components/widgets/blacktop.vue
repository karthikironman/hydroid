<template>
    <div class="blacktop" v-bind:style="{ background: color }">
        <div class="head"><p>{{title}}</p></div>
        <div class="inside_black">  <slot></slot></div>
      
    </div>
</template>
<script>
export default {
    props:["title","color"],
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.head{
    width:100%;
    background:#4E4E4E;
    color:#FFFFFF;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    
   
    top:0;
    position:absolute;
    
     
}
.head > p{
   
    font-family: Arial, Helvetica, sans-serif;
    padding-left:1.2rem;
}
.blacktop{
box-shadow: 0px 6px 9px #00000026;
border-radius: 12px;
 transform: translate(0, 0);
}
.inside_black{
    padding:1rem;
   padding-top:4rem;
    
}
</style>