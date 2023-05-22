import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite" //自动引入api
import Components from "unplugin-vue-components/vite" //自动引入第三方组件
import Markdown from "vite-plugin-md" //MD
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers" //组件库解析器
import Icons from "unplugin-icons/vite" //图表库icones.netlify.app/
import IconsResolver from "unplugin-icons/resolver"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons" ///svg
import { VueUseComponentsResolver } from "unplugin-vue-components/resolvers"
import { viteMockServe } from "vite-plugin-mock"
import { ConfigEnv, loadEnv } from "vite"
import { resolve } from "path"
import { createHtmlPlugin } from "vite-plugin-html"
//这个配置 为了在html中使用 环境变量
const getViteEnv = (mode, target) => {
  return loadEnv(mode, process.cwd())[target]
}
export default function vitePlugins(context: ConfigEnv) {
  return [
    vue({
      include: [/\.md$/, /\.vue$/]
    }),
    createHtmlPlugin({
      inject: {
        data: {
          //将环境变量 VITE_APP_TITLE 赋值给 title 方便 html页面使用 title 获取系统标题
          title: getViteEnv(context.mode, "VITE_APP_TITLE")
        }
      }
    }),
    AutoImport({
      dts: "./src/auto-imports.d.ts",
      imports: [
        "vue",
        "pinia",
        "vue-router",
        "@vueuse/core",
        {
          "naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"]
        }
      ],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [AntDesignVueResolver()]
    }),
    Components({
      dts: "./src/components.d.ts",
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ["src/components/"],
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ["vue", "md"],
      // 解析的 UI 组件库，这里以 Element Plus 和 Ant Design Vue 为例
      resolvers: [
        AntDesignVueResolver({ importStyle: false, resolveIcons: true }),
        IconsResolver(),
        VueUseComponentsResolver()
      ]
    }),
    Markdown(),
    Icons({
      compiler: "vue3",
      autoInstall: true
    }),
    createSvgIconsPlugin({
      ///svg
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), "src/assets/svg")],

      // 指定symbolId格式
      symbolId: "[name]"
    }),
    viteMockServe({
      mockPath: "src/mock", //设置mock文件存储目录
      localEnabled: true, //设置是否启用本地mock文件
      prodEnabled: true, //设置打包是否启用 mock 功能
      watchFiles: true, //设置是否监视mockPath对应的文件夹内文件中的更改
      injectCode: `
        import { setupProdMockServer } from '../config/mockProdServer';
        setupProdMockServer();
      `, //如果生产环境开启了 mock 功能,即prodEnabled=true.则该代码会被注入到injectFile对应的文件的底部。默认为main.{ts,js}
      logger: true //是否在控制台显示请求日志
    })
    // WindiCSS()
  ]
}
