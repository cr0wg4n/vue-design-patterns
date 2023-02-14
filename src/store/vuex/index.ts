import { createStore } from "vuex";
import todoStore from "./todo";

const store = createStore({
  modules: {
    todo: {
      namespaced: true,
      ...todoStore,
    },
  },
});

export default store;
