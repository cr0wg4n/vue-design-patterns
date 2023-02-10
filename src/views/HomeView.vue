<template>
  <main>
    <DemoForm />
  </main>
</template>

<script lang="ts">
import FormBuilder from "@/builders/FormBuilder";
import VInput from "@/components/form/VInput.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    DemoForm: new FormBuilder()
      .addField({
        component: VInput,
        name: "demo",
        type: "text",
        label: "demo",
        validation: () => {},
      })
      .addField({
        component: VInput,
        name: "demo",
        type: "text",
        label: "demo",
        props: {
          value: "demp",
          modelValue: "demo",
        },
        validation: () => {},
      })
      .build(),
  },
});
</script>
