import type { Todo } from "./../types/todo";
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todos", {
  state: () => {
    return {
      list: [] as Todo[],
    };
  },
  getters: {
    getList: (store) => {
      return store.list;
    },
  },
  actions: {
    addTodo(todo: Todo) {
      this.list = [todo, ...this.list];
    },
    async fetchTodos() {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      this.list = await data.json();
    },
  },
});
