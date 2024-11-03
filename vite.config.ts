// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite' // 追加！

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(), // 追加！
  ],
  optimizeDeps: {
    force: true,
    exclude: ['node_modules/.cache/storybook']
  },
})