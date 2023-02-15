<template>
  <h2>SFC Approach</h2>
  <TodoList />
  <h2>Container Pattern Approach</h2>
  <TodoContainer />
</template>

<script setup lang="ts">
import TodoContainer from "@/components/TodoContainer.vue";
import TodoList from "../components/TodoList.vue";
</script>
