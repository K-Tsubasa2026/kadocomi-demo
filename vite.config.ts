import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pagesでは https://k-tsubasa2026.github.io/kadocomi-demo/ に公開するため
  base: '/kadocomi-demo/',
})
