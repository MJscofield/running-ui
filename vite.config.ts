import { defineConfig } from "vite";
const path = require("path");
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"), //起别名
    },
  },
});
