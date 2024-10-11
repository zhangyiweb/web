/*
 * @Descripttion: 
 * @Date: 2021-12-31 09:06:01
 */
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [vue()],
  base: "./",
  server: {
    port: 8008,
    open: true,
    cors: true, // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        target: 'http://192.168.68.71:7502/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ""
        }
      }
    }
  }
})
