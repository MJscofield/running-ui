import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import { App } from "vue";

const components = [chooseArea, chooseIcon];
export default {
  install(app: App) {
    components.map((item: any) => {
      app.use(item);
    });
  },
};
