import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 4500, strictPort: true },
  preview: { port: 4500, strictPort: true },
  build: { assetsInlineLimit: 2048 },
})
