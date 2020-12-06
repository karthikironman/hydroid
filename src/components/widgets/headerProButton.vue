<template>
    <div class="pro_button" tab-index="1" @focusout="show=false">
        <img  @click="show=!show" class="person" src="@/assets/person.svg"/>
        <p @click="show=!show" class="username">Username</p>
        <div v-show="show" class="expansion">
            <p>Profile detail 1</p>
            <p @click="logout()">Logout</p>
        </div>
         

    </div>
</template>
<script>

export default {
    data(){
        return{
           show:false
        }
    },
    methods:{
        logout(){
            this.$router.push({
                name:'loginPage'
            })
        }
    }
}
</script>
<style scoped>
.expansion{
    background-color:white;
    /* border:1px solid grey; */
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    width:100%;
    height: auto;
    position:absolute;
    top:2.2rem;
    left:0;
    box-shadow: 0px 3px 3px #00000029;
    padding-top:1rem;
    color:#9873c9 ;

}
.pro_button{
    font-family: Arial, Helvetica, sans-serif;
    cursor:pointer;
    padding:0rem 1rem;
    border-radius:5px;
    display:flex;   
    align-items:center;
    height:2.6rem;
    box-shadow: 0px 3px 3px #00000024;
border-radius: 12px;
position:relative;
text-align:center;  
}
.person{
    width:1.8rem;
    border-radius:50%;
    box-shadow: 0px 3px 3px #00000029;
}
.username{
    display:inline-block;
    margin-left:1rem;
    color:#9873c9 ;

}
.expand_row{
    position:absolute;
    right:10rem;
    top:1rem;
}
</style>