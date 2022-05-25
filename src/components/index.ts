import chooseArea from "./chooseArea";
import chooseIcon from "./chooseIcon";
import trend from "./trend";
import notification from "./notification";
import list from "./list";
import menu from "./menu";
import progress from "./progress";
import chooseTime from "./chooseTime";
import chooseDate from "./chooseDate";
import form from "./form";
import modalForm from "./modalForm";
import table from "./table";
import calendar from "./calendar";
import { App } from "vue";

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  progress,
  chooseTime,
  chooseDate,
  form,
  modalForm,
  table,
  calendar
];
export default {
  install(app: App) {
    components.map((item: any) => {
      app.use(item);
    });
  },
};
