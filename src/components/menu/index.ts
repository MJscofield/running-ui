import menu from "./src/index.vue";
import infiniteMenu from "./src/menu";
import { App } from "vue";

export default {
  install(app: App) {
    app.component("m-menu", menu);
    app.component("m-infinite-menu", infiniteMenu);
  },
};
