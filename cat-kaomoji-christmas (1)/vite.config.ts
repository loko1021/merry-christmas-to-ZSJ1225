import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path is important for GitHub Pages (usually /repo-name/)
  // Using './' makes it relative, which works for most static deployments
  base: './', 
})