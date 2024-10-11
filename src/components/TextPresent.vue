<!--
 * @Descripttion: 
 * @Date: 2021-12-31 09:20:49
-->
<template>
  <div class="wrap">
    <div :class="['inner', isOverflow ? 'slideAnimation' : '']">
      <span
        ref="slideContainer"
        :class="['textPresent', !isOverflow ? 'showEllipsis' : '']"
        @mouseenter="isOverflow = true"
        @mouseleave="isOverflow = false"
        >{{ props.text }}</span
      >
      <span class="reTextPresent">{{ props.text }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, defineProps, watch } from "vue";
const props = defineProps({
  text: String,
});

const slideContainer = ref(null);

const isOverflow = ref(false);

const slideSpeed = ref("15s");

const speed = ref(10);

watch(
  () => props.text,
  (newVal) => {
    // let scrollWidth = slideContainer.value.scrollWidth;
    // let clientWidth = document.querySelector(".textPresent").clientWidth;
    console.log(slideContainer.value);
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>
<style lang="less" scoped>
.wrap {
  border: 1px solid red;
  overflow: hidden;
  position: relative;
  width: 200px;
  height: 24px;
  white-space: nowrap;
}
.inner {
  position: absolute;
}

.slideAnimation {
  animation: slide v-bind("slideSpeed") linear infinite;
}

.textPresent {
  width: 200px;
}

.showEllipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}

.reTextPresent {
  display: inline-block;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
