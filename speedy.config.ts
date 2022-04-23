import { defineConfig } from '@speedy-js/speedy-core'
import windiPlugin from 'rollup-plugin-windicss'
import { unplugin } from '@speedy-js/unplugin'

export default defineConfig({
  input: {
    index: './src/frontend/index.tsx'
  },
  html: {
    template: './index.speedy.html'
  },
  plugins: [...windiPlugin().map(unplugin)]
})