import type { StoreOptions } from "vuex";
import type { Todo, TodoStoreProps } from "../types/todo";

const store: StoreOptions<TodoStoreProps> = {
  state(): TodoStoreProps {
    return {
      list: [],
    };
  },
  mutations: {
    UPDATE_LIST(state, list: Todo[]) {
      state.list = list;
    },
    ADD_ITEM(state, todo: Todo) {
      state.list = [todo, ...state.list];
    },
  },
  actions: {
    async getList({ commit }) {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      commit("UPDATE_LIST", await data.json());
    },
    addTodo({ commit }, todo: Todo) {
      commit("ADD_ITEM", todo);
    },
  },
};

export default store;
