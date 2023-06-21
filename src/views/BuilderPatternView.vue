<template>
  <LoginForm />
</template>

<script lang="ts" setup>
import FormBuilder from "@/builders/FormBuilder";
import FormDirector from "@/builders/FormDirector";

const LoginForm = new FormDirector(new FormBuilder()).makeLoginForm();
</script>
