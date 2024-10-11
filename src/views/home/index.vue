<!--
 * @Descripttion: 
 * @Date: 2021-12-31 09:57:19
-->
<template>
  <div>
    {{name}}
    <button @click="changeName">click</button>
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const name = computed(() => store.state.common.name);

const changeName = () => {
  console.log(store);
  
  store.dispatch("common/setName", "zhangyi");
};
</script>
<style lang='less' scoped>
</style>