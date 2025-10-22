import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Default, change if needed (e.g., 3001)
    open: true, // Opens browser automatically
  },
});