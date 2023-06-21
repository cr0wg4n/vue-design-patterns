<template>
  <TodoList :data="data" />
  <button @click="addTodo">Add Todo</button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import TodoList from "./VList.vue";

const todoStore = useStore();
todoStore.dispatch("todo/getList");

const addTodo = () => {
  todoStore.dispatch("todo/addTodo", {
    title:
      "This is a random todo number " + Math.random().toFixed(2).toString(),
    completed: Math.random() > 0.5 ? false : true,
  });
};

const data = computed(() => todoStore.state.todo.list);
</script>
