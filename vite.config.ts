import { ConfigEnv, UserConfigExport, defineConfig } from "vite"
import vitePlugins from "./config/vitePlugin"
import { serverConfig, resolveConfig, buildConfig, cssConfig } from "./config/index"
// https://vitejs.dev/config/
export default (context: ConfigEnv): UserConfigExport => {
  return {
    server: serverConfig,
    resolve: resolveConfig,
    plugins: vitePlugins(context),
    css: cssConfig,
    build: buildConfig
  }
}
