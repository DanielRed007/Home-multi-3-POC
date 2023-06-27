import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import sass from 'sass';

export default defineConfig({
  plugins: [react(), reactRefresh()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  }
})