import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, {VantResolve} from 'vite-plugin-style-import';

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [vue(), styleImport({
        resolves: [VantResolve()],
        // 坑，按照vant官网配置引入方式会报错，需要在此继续添加libs代码
        libs: [
            {
                libraryName: 'vant',
                esModule: true,
                resolveStyle: name => `../es/${name}/style`
            }
        ]
    }),
    ],


})