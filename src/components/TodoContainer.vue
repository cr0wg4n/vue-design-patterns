<template>
  <TodoList :data="data" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import TodoList from "./VList.vue";

const todoStore = useStore();
todoStore.dispatch("todo/getList");

const data = computed(() => todoStore.state.todo.list);
</script>
