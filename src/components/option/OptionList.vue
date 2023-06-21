<template>
  <div v-for="({ title, image }, index) in data" :key="index">
    <OptionItem :title="title" :image="image" />
  </div>
</template>

<script lang="ts" setup>
import OptionItem, { type OptionItemProps } from "./OptionItem.vue";

interface OptionListProps {
  data: OptionItemProps[];
}

defineProps<OptionListProps>();
</script>
