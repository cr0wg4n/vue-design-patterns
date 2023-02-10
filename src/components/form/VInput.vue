<template>
  <input
    :name="props.name"
    :type="props.type"
    :value="props.modelValue"
    @input="onChangeHandler"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    default: null,
    type: String,
  },
  modelValue: {
    default: null,
    type: String,
  },
  data: {
    default: null,
  },
  name: {
    default: null,
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

function onChangeHandler(event: any) {
  emit("update:modelValue", event.target.value);
}
</script>

<style scoped></style>
