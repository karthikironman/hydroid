<template>
    <div class="pro_button">
        <img class="person" src="@/assets/person.svg"/>
        <p class="username">Username</p>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.pro_button{

    padding:0rem 1rem;
    border-radius:5px;
    display:flex;   
    align-items:center;
    height:2.6rem;
    box-shadow: 0px 3px 3px #00000024;
border-radius: 12px;
}
.person{
    width:1.8rem;
    border-radius:50%;
    box-shadow: 0px 3px 3px #00000029;
}
.username{
    display:inline-block;
    margin-left:1rem;
}
</style>