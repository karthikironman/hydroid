<template>
    <div class="inputfield">
        <div class="icon_bg"> <img src="@/assets/account_input.svg"/></div>
       
   <input class="inputele"/>
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
.inputfield{
    display:flex;
    justify-content: center;
}
.icon_bg{
    background:white;
    padding:3px 13px;
    border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;

    
}
.icon_bg > img{
    width:12px;
    
}
.inputele{
    background: #141E4A 0% 0% no-repeat padding-box;
    border:none;
    outline:none;
    padding:0 4px;
    color:#a8a8a8;
    border-top-right-radius: 4px;
     border-bottom-right-radius: 4px;
     width:15rem;
}
</style>