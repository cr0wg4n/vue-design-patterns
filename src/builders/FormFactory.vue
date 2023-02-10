<template>
  <form action="" @submit.prevent="submit">
    {{ fields?.length }}
    <div v-for="field in fields" :key="field.name">
      <component
        :id="field.name"
        :is="field.component"
        v-bind="{ ...field.props, ...field.attrs }"
        @update:modelValue="onChangeHandler($event, field.name)"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Field } from "./FormBuilder";

export default defineComponent({
  props: {
    id: {
      type: [String, Number],
      default: null,
    },
    fields: {
      type: Array as PropType<Field[]>,
      default: () => [],
    },
  },
  // inject: ["get", "post"],
  methods: {
    submit: async () => {},
    onChangeHandler: (payload: any, fieldName: string) => {
      console.log(payload, fieldName);
    },
  },
});
</script>
