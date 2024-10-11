/*
 * @Descripttion: 
 * @Date: 2022-04-08 10:24:56
 */
import axios from 'axios'
import { ElMessage } from "element-plus";

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 15000
})

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    const res = response.data
    const contentType = response.headers['content-type']
    if (contentType !== 'application/xml') {
      if (!res.code) {
        return res
      }
      if (res.code !== 20000 && res.code !== 200) {
        if (res.message) {
          ElMessage.error(res.message);
        }
        if (res.msg) {
          ElMessage.error(res.msg);
        }
        return res
      } else {
        return res
      }
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)


export default request



