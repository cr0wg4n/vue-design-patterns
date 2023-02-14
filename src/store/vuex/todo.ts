import type { StoreOptions } from "vuex";

export interface Todo {
  title: string;
  completed: boolean;
}

export interface TodoStoreProps {
  list: Todo[];
}

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
  },
  actions: {
    async getList({ commit }) {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      commit("UPDATE_LIST", await data.json());
    },
  },
};

export default store;
