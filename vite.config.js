import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import babel from '@rollup/plugin-babel'

export default defineConfig({
  plugins: [
    vue(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
      include: ['src/**/*'],
    }),
  ],
})
