<template>
  <div class="todo" v-for="(todo, index) in todos.slice(0, 10)" :key="index">
    <span :class="['todo__title', todo.completed && 'todo__title--completed']">
      {{ todo.title }}
    </span>
    <span class="todo__completed">
      {{ todo.completed ? "👍" : "👎" }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type Ref } from "vue";

export interface Todo {
  title: string;
  completed: boolean;
}

export default defineComponent({
  setup() {
    const todos: Ref<Todo[]> = ref([]);
    const getData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      todos.value = await data.json();
    };

    getData();
    return {
      todos,
    };
  },
});
</script>

<style scoped>
.todo {
  margin: 0.5rem;
  border-radius: 0.5rem;
  background-color: rgb(224, 224, 224);
  color: black;
  padding: 0.5rem;
}

.todo:hover {
  scale: 1.1;
}

.todo__title {
  color: rgb(216, 55, 55);
}
.todo__title--completed {
  text-decoration: line-through;
  color: rgb(106, 163, 21);
}

.todo__completed {
  float: right;
}
</style>
