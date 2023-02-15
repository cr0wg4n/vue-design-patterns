<template>
  <div v-for="({ title, image }, index) in data" :key="index">
    <OptionItem :title="title" :image="image" />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import OptionItem, { type OptionProps } from "./OptionItem.vue";

export default defineComponent({
  components: { OptionItem },
  props: {
    data: {
      type: Array as PropType<OptionProps[]>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>
