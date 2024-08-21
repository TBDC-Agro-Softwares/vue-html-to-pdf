/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, normalizePath } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ insertTypesEntry: true, copyDtsFiles: true }),

    viteStaticCopy({
      targets: [{ src: normalizePath(resolve(__dirname, './src/components.d.ts')), dest: './' }]
    })
  ],
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'VueHtmlToPdf',
      fileName: 'vue-html-to-pdf'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        sourcemap: false,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return 'vue-html-to-pdf.css';
          return assetInfo.name || '';
        },
        exports: 'named',
        globals: { vue: 'Vue' }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    dedupe: ['vue']
  }
});
