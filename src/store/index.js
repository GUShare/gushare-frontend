import { createStore, createLogger } from "vuex";
import auth from "@/store/modules/auth";
const debug = true;

export default createStore({
  modules: {
    auth
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
