<template>
  <main>
    <LoginForm />
  </main>
</template>

<script lang="ts">
import FormBuilder from "@/builders/FormBuilder";
import FormDirector from "@/builders/FormDirector";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    LoginForm: new FormDirector(new FormBuilder()).makeLoginForm(),
  },
});
</script>
