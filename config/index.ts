import { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite" //自动引入api
import Components from "unplugin-vue-components/vite" //自动引入第三方组件
import Markdown from "vite-plugin-md" //MD
import { ElementPlusResolver, AntDesignVueResolver, NaiveUiResolver } from "unplugin-vue-components/resolvers" //组件库解析器
import svgLoader from "vite-svg-loader" //svg解析
import Icons from "unplugin-icons/vite" //图表库icones.netlify.app/
import IconsResolver from "unplugin-icons/resolver"
// import WindiCSS from 'vite-plugin-windicss'
import { VueUseComponentsResolver } from "unplugin-vue-components/resolvers"
export const serverConfig = {
  host: true, // host设置为true才可以使用network的形式，以ip访问项目
  port: 1314, // 端口号
  open: true, // 自动打开浏览器
  cors: true, // 跨域设置允许
  strictPort: true, // 如果端口已占用直接退出
  // 接口代理
  proxy: {
    "/api": {
      // 本地 8000 前端代码的接口 代理到 8888 的服务端口
      target: "http://localhost:8888/",
      changeOrigin: true, // 允许跨域
      rewrite: (path: any) => path.replace("/api/", "/")
    }
  }
}

export const resolveConfig = {
  alias: {
    "@": resolve(__dirname, "../src"), // 把 @ 指向到 src 目录去
    "@config": resolve(__dirname, "../config"),
    "@svg": resolve(__dirname, "../src/assets/svg")
  }
}

export const buildConfig = {
  brotliSize: false,
  // 消除打包大小超过500kb警告
  chunkSizeWarningLimit: 2000,
  // 在生产环境移除console.log
  terserOptions: {
    compress: {
      drop_console: false,
      pure_funcs: ["console.log", "console.info"],
      drop_debugger: true
    }
  },
  assetsDir: "static/assets",
  // 静态资源打包到dist下的不同目录
  rollupOptions: {
    output: {
      chunkFileNames: "js/[name]-[hash].js",
      entryFileNames: "entry/[name]-[hash].js",
      assetFileNames: "[ext]/[name]-[hash].[ext]",
      manualChunks(id) {
        // if (id.includes("home/")) {
        //   return "home"
        // }
        // if (id.includes("about/")) {
        //   return "about"
        // }
      }
    }
  }
}

export const pluginsConfig = [
  vue({
    include: [/\.md$/, /\.vue$/]
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
    resolvers: [ElementPlusResolver(), AntDesignVueResolver(), NaiveUiResolver()]
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
      ElementPlusResolver(),
      AntDesignVueResolver({ importStyle: true, resolveIcons: true }),
      NaiveUiResolver(),
      IconsResolver(),
      VueUseComponentsResolver()
    ]
  }),
  svgLoader(),
  Markdown(),
  Icons({
    compiler: "vue3",
    autoInstall: true
  })
  // WindiCSS()
]

export const cssConfig = {
  preprocessorOptions: {
    scss: {
      additionalData: `
      @import "@/assets/styles/variables.scss";
    `,
      javascriptEnabled: true
    }
  }
}
