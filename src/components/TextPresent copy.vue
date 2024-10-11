<!--
 * @Descripttion: 
 * @Date: 2021-12-31 09:20:49
-->
<template>
  <div ref="textContainer" class="text-present" @resize="checkOverflow">{{ props.text }}</div>
</template>
<script lang="ts" setup>
import { reactive, ref, defineProps, onMounted } from "vue";
const props = defineProps({
  text: String,
});

const textContainer = ref(null);

const checkOverflow = () => {
  if (textContainer.value.scrollWidth > textContainer.value.clientWidth) {
    console.log("文本溢出了");
  } else {
    console.log("文本没有溢出");
  }
};

onMounted(() => {
  checkOverflow();

  window.addEventListener("resize", checkOverflow);
});
</script>
<style lang="less" scoped>
.text-present {
  width: 300px;
  // height: 22px;
  border: 1px solid #000;
  white-space: nowrap;
  overflow: hidden;
  // text-overflow: ellipsis;
  animation: scroll-left-right 10s linear infinite;
}

@keyframes scroll-left-right {
  0%,
  100% {
    transform: translateX(0); /* 初始和结束时文本在原位 */
  }
  50% {
    transform: translateX(-100%); /* 中间时文本完全滚出到左侧 */
  }
}
</style>
