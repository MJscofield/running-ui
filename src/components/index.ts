import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import trend from "./trend";
import notification from "./notification";
import { App } from "vue";

const components = [chooseArea, chooseIcon, trend, notification];
export default {
  install(app: App) {
    components.map((item: any) => {
      app.use(item);
    });
  },
};
