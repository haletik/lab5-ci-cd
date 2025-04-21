import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  base: '/lab5-ci-cd/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/SetupTest.tsx',
    exclude: [...configDefaults.exclude],
  },
})