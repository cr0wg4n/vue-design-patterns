<template>
  <h4>SFC Approach</h4>
  <TodoList />
  <h4>Container Pattern Approach</h4>
  <TodoContainer />
</template>

<script setup lang="ts">
import TodoContainer from "@/components/TodoContainer.vue";
import TodoList from "../components/TodoList.vue";
</script>
