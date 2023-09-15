/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  base:"/",
  plugins: [
    react(),
    reactRefresh(),
  ],

  build: {
    jsx: 'react', 
  },
})
