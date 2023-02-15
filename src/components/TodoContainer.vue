<template>
  <TodoList :data="data" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import TodoList from "./VList.vue";

export default defineComponent({
  components: {
    TodoList,
  },
  setup() {
    const todoStore = useStore();
    todoStore.dispatch("todo/getList");

    return {
      data: computed(() => todoStore.state.todo.list),
    };
  },
});
</script>
