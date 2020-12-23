<template>
  <div class="inputfield">
    <div v-if="type === 'username'" class="icon_bg">
      <img src="@/assets/account_input.svg" />
    </div>
    <div v-if="type === 'password'" class="icon_bg">
      <img src="@/assets/key.svg" />
    </div>

    <input
      v-if="type === 'username'"
      @input="emitParent()"
      v-model="value"
      class="inputele"
      :placeholder="placeholder"
    />
    <input
      v-if="type === 'password'"
      type="password"
      @input="emitParent()"
      v-model="value"
      class="inputele"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
export default {
  props: ["type", "placeholder","reset"],
  watch:{
   reset:function(){
       this.value=""
   }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    emitParent() {
      this.$emit("updated", this.value);
    }
  }
};
</script>
<style scoped>
.inputfield {
  display: flex;
  justify-content: center;
}
.icon_bg {
  background: white;
  padding: 3px 13px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.icon_bg > img {
  width: 12px;
}
.inputele {
  background: #141e4a 0% 0% no-repeat padding-box;
  border: none;
  outline: none;
  padding: 0 10px;
  color: white;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 15rem;
}
</style>