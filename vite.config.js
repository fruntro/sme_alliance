import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/home/user/sme_alliance/src/main.jsx',
    },
  },
})
