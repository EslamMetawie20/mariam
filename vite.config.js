import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Served from https://<user>.github.io/mariam/ — must match the repo name
  base: '/mariam/',
  plugins: [react()],
})
