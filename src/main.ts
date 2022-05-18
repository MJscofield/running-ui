import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";
import { toLine } from "./utils";

const app = createApp(App);
app.use(router).use(ElementPlus);
for (let i in Icons) {
  app.component(`el-icon${toLine(i)}`, (Icons as any)[i]);
}
app.mount("#app");
