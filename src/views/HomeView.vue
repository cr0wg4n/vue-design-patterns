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
        name: "username",
        type: "text",
        label: "username",
        props: {
          value: "",
        },
        validation: z.string().min(10).max(20),
      })
      .addField({
        component: VInput,
        name: "password",
        type: "password",
        label: "password",
        props: {
          value: "a valid password",
        },
        validation: z.string().min(8),
      })
      .addField({
        component: VInput,
        name: "checkbox",
        type: "checkbox",
        label: "checkbox",
        props: {
          value: true,
        },
        validation: z.boolean(),
      })
      .build(),
  },
});
</script>
