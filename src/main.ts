import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router"
import "./assets/styles/nprogress.scss"
import "virtual:svg-icons-register"
import "@/assets/styles/style.css"
import { setupStore } from "./store"
import directive from "./directive"
import { setupProdMockServer } from "@config/mockProdServer"
if (process.env.NODE_ENV === "production") {
  setupProdMockServer()
}

const app = createApp(App)
setupStore(app)
directive(app)
app.use(router).mount("#app")
