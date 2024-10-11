/*
 * @Descripttion: 
 * @Date: 2021-12-31 09:06:01
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "@/store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/common.css'
import locale from "element-plus/lib/locale/lang/zh-cn"

const app = createApp(App)



app.use(router).use(store).use(ElementPlus, { locale }).mount('#app')
