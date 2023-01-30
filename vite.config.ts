import { defineConfig } from 'vite'


import { serverConfig, resolveConfig, buildConfig, pluginsConfig, cssConfig } from './config/index'
// https://vitejs.dev/config/
export default defineConfig({
  ...serverConfig,
  ...resolveConfig,
  ...buildConfig,
  plugins: pluginsConfig,
  css: cssConfig

})
