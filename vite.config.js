import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/shaik_rehaman_portfolio/',
  plugins: [react()],
  server: {
      port: 7777
    }
})
