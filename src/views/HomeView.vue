<template>
  <main>
    <DemoForm />
  </main>
</template>

<script lang="ts">
import FormBuilder from "@/builders/FormBuilder";
import VInput from "@/components/form/VInput.vue";
import { defineComponent } from "vue";
import { z } from "zod";

export default defineComponent({
  components: {
    DemoForm: new FormBuilder()
      .addField({
        component: VInput,
        name: "demo",
        type: "text",
        label: "demo",
        validation: z.string().min(10).max(20),
      })
      .addField({
        component: VInput,
        name: "password",
        type: "password",
        label: "demo",
        props: {
          value: "demp",
          modelValue: "demo",
        },
        validation: z.string().optional(),
      })
      .build(),
  },
});
</script>
