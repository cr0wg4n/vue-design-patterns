<template>
  ⚠️ Only shows 10 todos (actual length: {{ data.length }})
  <div class="todo" v-for="(item, index) in data.slice(0, 10)" :key="index">
    <span :class="['todo__title', item.completed && 'todo__title--completed']">
      {{ item.title }}
    </span>
    <span class="todo__completed">
      {{ item.completed ? "👍" : "👎" }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { Todo } from "@/store/types/todo";

interface VListProps {
  data: Todo[];
}

defineProps<VListProps>();
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
  scale: 1.005;
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
