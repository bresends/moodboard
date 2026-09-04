import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative assets work at both a custom domain and /<repository>/ on Pages.
  base: './',
  plugins: [react()],
})
