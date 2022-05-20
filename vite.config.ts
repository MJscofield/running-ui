import { defineConfig } from "vite";
const path = require("path");
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"), //起别名
    },
  },
});
