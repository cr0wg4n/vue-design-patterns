<template>
  <div>
    <h4>With Pinia</h4>
    <PiniaTodoList />
  </div>
  <br />
  <div>
    <h4>With Vuex</h4>
    <VuexTodoList />
  </div>
</template>

<script lang="ts" setup>
import PiniaTodoList from "@/components/PiniaTodoList.vue";
import VuexTodoList from "@/components/VuexTodoList.vue";
</script>
