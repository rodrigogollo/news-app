import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact()
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    },
  },
})
