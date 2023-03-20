import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { resolve } from 'path';
import Unocss from 'unocss/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    // 自动注册components目录下的组件
    Components({
      dirs: ['src/components', 'src/**/components'], // 用于搜索组件的目录的相对路径 默认只搜索src/components/ 下的组件
      // dts: resolve(pathSrc, 'components.d.ts'),
      resolvers: [ ],
      // valid file extensions for components.
      extensions: ['vue','tsx'],
    }),
    // 按需自动导入 API
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      // imports: ['vue'],
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
  
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        // custom
        // {
        //   '@vueuse/core': [
        //     // named imports
        //     'useMouse', // import { useMouse } from '@vueuse/core',
        //     // alias
        //     ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
        //   ],
        //   'axios': [
        //     // default imports
        //     ['default', 'axios'], // import { default as axios } from 'axios',
        //   ],
        //   '[package-name]': [
        //     '[import-names]',
        //     // alias
        //     ['[from]', '[alias]'],
        //   ],
        // },
      ],
      resolvers: []
      // dts: resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Unocss({
      // presets: [
      // 	presetAttributify({ /* preset options */ }),
      // 	presetUno(),
      // 	presetAttributify(),
      // 	// ...custom presets
      // ],
      // rules: [
      //   // [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
      //   // [/^p-(\d+)$/, match => ({ padding: `${match[1] / 4}rem` })],
      //   [/^fs-(\d+)$/, ([, d]) => ({ 'font-size': `${Number(d)}px` })], // fs-48 => font-size:48px;
      //   [/^fw-(\d+)$/, ([, d]) => ({ 'font-weight': `${Number(d)}` })], // fw-400 => font-weight:400;
      //   [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d)}px` })],
      //   [/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${Number(d)}px` })],
      //   [/^mr-(\d+)$/, ([, d]) => ({ 'margin-right': `${Number(d)}px` })],
      //   [/^mt-(\d+)$/, ([, d]) => ({ 'margin-top': `${Number(d)}px` })],
      //   [/^mb-(\d+)$/, ([, d]) => ({ 'margin-bottom': `${Number(d)}px` })],
      //   [
      //     /^mx-(\d+)$/,
      //     ([, d]) => ({
      //       'margin-left': `${Number(d)}px`,
      //       'margin-right': `${Number(d)}px`
      //     })
      //   ],
      //   [
      //     /^my-(\d+)$/,
      //     ([, d]) => ({
      //       'margin-top': `${Number(d)}px`,
      //       'margin-bottom': `${Number(d)}px`
      //     })
      //   ],
      //   [/^p-(\d+)$/, ([, d]) => ({ padding: `${Number(d)}px` })],
      //   [/^pl-(\d+)$/, ([, d]) => ({ 'padding-left': `${Number(d)}px` })],
      //   [/^pr-(\d+)$/, ([, d]) => ({ 'padding-right': `${Number(d)}px` })],
      //   [/^pt-(\d+)$/, ([, d]) => ({ 'padding-top': `${Number(d)}px` })],
      //   [/^pb-(\d+)$/, ([, d]) => ({ 'padding-bottom': `${Number(d)}px` })],
      //   [
      //     /^px-(\d+)$/,
      //     ([, d]) => ({
      //       'padding-left': `${Number(d)}px`,
      //       'padding-right': `${Number(d)}px`
      //     })
      //   ],
      //   [
      //     /^py-(\d+)$/,
      //     ([, d]) => ({
      //       'padding-top': `${Number(d)}px`,
      //       'padding-bottom': `${Number(d)}px`
      //     })
      //   ],
      //   ['flex', { display: 'flex' }],
      //   ['pink', { color: 'pink' }],
      //   ['text_color_main', { color: '#475768' }]
      // ],
      // 样式组合
      shortcuts: {
        // btn: "pink flex"
        // page_title: 'text_color_main fs-48 fw-bold',
        // section_title: 'text_color_main fs-24 fw-bold'
      }
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './src'),
      '#': resolve(__dirname, './src/types'),
      // 解决警告You are running the esm-bundler build of vue-i18n.
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/base.scss";`
      }
    }
  },
})
