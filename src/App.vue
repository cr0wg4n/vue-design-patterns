<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Builder Pattern</RouterLink>
        <RouterLink to="/container-pattern">Container Pattern</RouterLink>
        <RouterLink to="/provide-inject-pattern"
          >Provide Inject Pattern</RouterLink
        >
        <RouterLink to="/composable-pattern">Composable Pattern</RouterLink>
        <RouterLink to="/store-management-pattern"
          >Store Management Pattern</RouterLink
        >
      </nav>
    </div>
  </header>
  <br />
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  color: gray;
}

nav a.router-link-exact-active {
  color: rgb(88, 146, 1);
}

nav a.router-link-exact-active:hover {
  color: rgb(77, 128, 2);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  color: gray;
}

nav a:first-of-type {
  border: 0;
}
</style>
