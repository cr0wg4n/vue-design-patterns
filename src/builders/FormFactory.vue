<template>
  <form action="" @submit.prevent="submit">
    <div v-for="(field, index) in fields" :key="field.name">
      <label :for="field.name" class="label">
        {{ field.label }}
      </label>
      <component
        :id="field.name"
        :is="field.component"
        :type="field.type"
        v-bind="{ ...field.props, ...field.attrs }"
        :model-value="field.props?.value"
        @update:modelValue="onChangeHandler($event, field.name, index)"
      />
      <div class="error" v-if="errors[field.name]">
        {{ errors[field.name] }}
      </div>
    </div>
    <br />
    <button type="submit" :disabled="!submitable">Submit</button>
    <br />
    <br />
    <pre>{{ values }}</pre>
  </form>
</template>

<script lang="ts" setup>
import { ZodError } from "zod";
import { reactive, onMounted, computed } from "vue";
import type { Field, ObjectGeneric } from "./FormBuilder";

export interface ValidationResult {
  valid: boolean;
  message?: string;
}

interface FormFactoryProps {
  id: string | number;
  fields: Field[];
}

const props = defineProps<FormFactoryProps>();

const values = reactive<ObjectGeneric>({});
const errors = reactive<ObjectGeneric>({});

const submitable = computed(() => {
  const _errors: number = [...Object.keys(errors)].filter(
    (i) => errors[i] != undefined
  ).length;
  return _errors === 0;
});

onMounted(() => {
  props.fields.forEach(({ name, props }) => {
    if (props?.value != undefined) {
      values[name] = props.value;
    }
  });
});

const validate = (value: string, validator: any): ValidationResult => {
  try {
    validator.parse(value);
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        valid: false,
        message: error.issues[0].message,
      };
    }
  }
  return {
    valid: true,
  };
};

const submit = async () => {
  for (const { name, validation } of props.fields) {
    const { valid, message } = validate(values[name], validation);
    throwErrors(name, valid, message);
  }
  if (submitable.value) {
    alert("Submitted!");
  }
};

const throwErrors = (
  fieldName: string,
  valid: boolean,
  message: string | undefined
) => {
  if (!valid) {
    Object.assign(errors, {
      ...errors,
      [fieldName]: message,
    });
  } else {
    Object.assign(errors, {
      ...errors,
      [fieldName]: undefined,
    });
  }
};

const onChangeHandler = (
  payload: any,
  fieldName: string,
  fieldNumber: number
) => {
  const validator = props.fields[fieldNumber].validation;
  const { valid, message } = validate(payload, validator);
  throwErrors(fieldName, valid, message);
  values[fieldName] = payload;
};
</script>

<style scoped>
.error {
  color: rgb(242, 96, 96);
}
.label {
  color: gray;
  padding-right: 10px;
}
</style>
