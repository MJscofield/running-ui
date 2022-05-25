import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";
import mUi from "src/components/index";
import { toLine } from "./utils";
import "./mock";

const app = createApp(App);
for (let i in Icons) {
  app.component(`el-icon${toLine(i)}`, (Icons as any)[i]);
}
app.use(router).use(ElementPlus).use(mUi);

app.mount("#app");
