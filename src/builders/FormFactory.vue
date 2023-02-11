<template>
  <form action="" @submit.prevent="submit">
    {{ fields?.length }}
    <div v-for="(field, index) in fields" :key="field.name">
      <component
        :id="field.name"
        :is="field.component"
        :type="field.type"
        v-bind="{ ...field.props, ...field.attrs }"
        @update:modelValue="onChangeHandler($event, field.name, index)"
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { ZodError } from "zod";
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
  data() {
    return { errors: {} };
  },
  // inject: ["get", "post"],
  methods: {
    validate(value: string, validator: any) {
      try {
        validator.parse(value);
        return {
          message: undefined,
          valid: true,
        };
      } catch (error) {
        if (error instanceof ZodError) {
          return {
            message: error.issues[0].code,
            valid: false,
          };
        }
      }
    },
    submit: async () => {},
    onChangeHandler(payload: any, fieldName: string, fieldNumber: number) {
      const validator = this.fields[fieldNumber].validation;
      const { valid, message } = this.validate(payload, validator);
      console.log(valid, message);
    },
  },
});
</script>
