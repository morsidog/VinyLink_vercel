import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
//le movi pa que jalara en vercel
export default defineConfig({
  output: 'server',
  integrations: [react()],
  adapter: vercel()
});
