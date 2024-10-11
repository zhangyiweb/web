<template>
  <div id="scrollableDiv" class="container">
    <div v-for="i in 30">111111111</div>
    <div class="box">
      {{ data.list }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, ref, watch } from "vue";
import axios from "axios";

const data = reactive({
  list: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
  isScroll: true,
});

const calc = ref<any>(null);

onMounted(() => {
  setInterval(() => {
    data.list += "在";
  }, 100);

  var scrollableDiv = document.getElementById("scrollableDiv") || document.body;
  scrollableDiv.addEventListener("scroll", scrollToBottom);

  req();
});

watch(
  () => data.isScroll,
  (newVal) => {
    if (newVal) {
      calc.value = setInterval(() => {
        var scrollableDiv = document.getElementById("scrollableDiv") || document.body;
        scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
      }, 100);
    } else {
      clearInterval(calc.value);
    }
  },
  { immediate: true }
);

const scrollToBottom = () => {
  var scrollableDiv = document.getElementById("scrollableDiv") || document.body;
  if (scrollableDiv.scrollTop + scrollableDiv.clientHeight >= scrollableDiv.scrollHeight - 10) {
    data.isScroll = true;
  } else {
    data.isScroll = false;
  }
};

const req = async () => {
  // const request = axios.create({
  //   baseURL: "", // 设置请求的基础URL
  //   // timeout: 5000, // 设置请求超时时间
  //   headers: {
  //     responseType: "stream",
  //     "Content-Type": "application/json",
  //     Authorization:
  //       "eyJ1c2VybmFtZSI6Inh5MTAyMTIzNjgwMiIsImlkIjoiNmE0YzVhMjQtNzY1OS0xMWVmLTg0NWUtZmVmY2ZlNDQyOTBkIiwiZW1haWwiOiIiLCJwaG9uZSI6IjE4MDU2MDY3NjI1IiwidHlwZSI6IlVTRVIifQ:1syLvP:IkGwzjuvcyDz3aIxfJy1vARvYN8IfXedW4_iz58C--s",
  //   }, // 设置请求头部信息
  // });

  // request.post("/api/application/chat_message/94dc9a22-7b06-11ef-8bc1-fefcfe44290d", { message: "aaa" }).then((res) => {
  //   console.log(JSON.parse(res.data));

  //   // res.data.on("data", (chunk) => {
  //   //   // 每当接收到数据块时触发
  //   //   console.log("Receiving chunk:", chunk);
  //   // });
  // });

  try {
    let response = await fetch("/api/application/chat_message/94dc9a22-7b06-11ef-8bc1-fefcfe44290d", {
      method: "POST",
      headers: {
        responseType: "stream",
        "Content-Type": "application/json",
        Authorization:
          "eyJ1c2VybmFtZSI6Inh5MTAyMTIzNjgwMiIsImlkIjoiNmE0YzVhMjQtNzY1OS0xMWVmLTg0NWUtZmVmY2ZlNDQyOTBkIiwiZW1haWwiOiIiLCJwaG9uZSI6IjE4MDU2MDY3NjI1IiwidHlwZSI6IlVTRVIifQ:1syLvP:IkGwzjuvcyDz3aIxfJy1vARvYN8IfXedW4_iz58C--s",
      },
      body: JSON.stringify({ message: "aaa" }),
    });
    // console.log(response);
    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }
    const reader = response.body.getReader();
    const textDecoder = new TextDecoder();
    let result = true;
    while (result) {
      const { done, value } = await reader.read();
      if (done) {
        console.log("Stream ended");
        result = false;
        break;
      }
      const chunkText = textDecoder.decode(value);
      console.log("Received chunk:", JSON.parse(chunkText));

      if (chunkText.startsWith("data: ")) {
        const jsonMessage = JSON.parse(chunkText.substring(5));
        console.log(jsonMessage);
      }
    }
  } catch (e) {
    console.log(e);
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 600px;
  height: 800px;
  background-color: #ddd;
  overflow-y: scroll;
  position: relative;
}
.box {
  position: absolute;
  right: 0;
  width: 300px;
  border: 1px solid #000;
}
</style>
