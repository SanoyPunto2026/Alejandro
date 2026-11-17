import { defineConfig } from 'vite'

// La tesis se sirve en alejo.sanoypunto.app/tesis
export default defineConfig({
  base: '/tesis/',
  build: {
    outDir: 'dist/tesis',
    emptyOutDir: true,
  },
})
