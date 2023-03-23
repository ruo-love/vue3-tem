import { resolve } from "path"

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
