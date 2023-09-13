import { createApp } from "vue";
import store from "./store"; // Importa tu store Vuex
import App from "./App"

createApp(App)
  .use(store) // Usa Vuex como middleware
  .mount("#app");
