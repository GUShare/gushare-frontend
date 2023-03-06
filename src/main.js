import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "@/router";
import store from "@/store";

import { ApiService } from "@/apiServices/api";

loadFonts();

const app = createApp(App);
export const API = new ApiService(
  process.env.VUE_APP_API_URL,
  process.env.VUE_APP_I18N_LOCALE
);

app.use(vuetify);
app.use(router);
app.use(store);

app.mount("#app");
