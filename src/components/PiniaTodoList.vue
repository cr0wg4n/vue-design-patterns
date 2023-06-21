<template>
  <TodoList :data="todoList" />
  <button @click="addTodo">Add Todo</button>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useTodoStore } from "@/store/pinia/todo";
import TodoList from "@/components/VList.vue";

const store = useTodoStore();
const { fetchTodos, addTodo: newTodo } = store;
const todoList = computed(() => store.getList);

const addTodo = () => {
  newTodo({
    title:
      "This is a random todo number " + Math.random().toFixed(2).toString(),
    completed: Math.random() > 0.5 ? false : true,
  });
};

onMounted(fetchTodos);
</script>
