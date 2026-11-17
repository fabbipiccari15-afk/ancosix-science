import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tanstackStart({
      server: {
        preset: 'vercel',
      },
      tsr: {
        appDirectory: './src',
      },
    }),
    viteReact(),
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
  ],
})