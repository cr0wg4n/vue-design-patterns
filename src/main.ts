import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/vuex/index";
import { createPinia } from "pinia";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(store);
app.mount("#app");
