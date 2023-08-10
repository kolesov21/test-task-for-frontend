import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, 'src')
    }
  },
  server:{
    proxy:{
      '/api': 'https://test-node-server-be1d.onrender.com/'
    }
  }
})