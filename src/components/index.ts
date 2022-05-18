import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import trend from "./trend";
import { App } from "vue";

const components = [chooseArea, chooseIcon, trend];
export default {
  install(app: App) {
    components.map((item: any) => {
      app.use(item);
    });
  },
};
