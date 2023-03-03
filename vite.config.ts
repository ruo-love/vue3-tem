import { defineConfig } from "vite"

import { serverConfig, resolveConfig, buildConfig, pluginsConfig, cssConfig } from "./config/index"
// https://vitejs.dev/config/
export default defineConfig({
  server:serverConfig,
  resolve:resolveConfig,
  plugins: pluginsConfig,
  css: cssConfig,
  build: buildConfig,

})
