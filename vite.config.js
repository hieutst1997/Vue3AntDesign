import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      apply: 'build',
      enforce: 'pre',
      resolveId(id) {
        if (id.includes('vite/preload-helper')) return 'vite/preload-helper';
      },
    },
  ],
  base: "./",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  
})
