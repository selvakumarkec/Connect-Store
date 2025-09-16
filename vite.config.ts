import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  server: {
    port: 3000, 
  },
  base: "/Connect-Store/",
});

