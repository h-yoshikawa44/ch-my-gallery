import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ch-my-gallery/' : './',
  server: {
    open: true,
  },
});
