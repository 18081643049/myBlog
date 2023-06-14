import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import 'element-plus/dist/index.css'
import 'nprogress/nprogress.css'
import { showFullLoading, hideFullLoading } from "@/utils/secret";

router.beforeEach((to, from, next) => {
  showFullLoading()
  next()
})

router.afterEach((to, from) => {
  hideFullLoading()
})

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router).mount("#app")
