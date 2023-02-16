<template>
  <h4>Add Cookies</h4>
  <input type="text" name="key" v-model="key" placeholder="Introduce a key" />
  <input
    type="text"
    name="value"
    v-model="value"
    placeholder="Introduce a value"
  />
  <button @click="set(key, value)">Add/Update Cookie</button>
  <br />

  <h4>Remove Cookies</h4>
  <select name="cookies" v-model="selectedKey">
    <option v-for="cookieKey in keys" :key="cookieKey" :value="cookieKey">
      {{ cookieKey }}
    </option>
  </select>
  <button @click="remove(selectedKey)">Remove Cookie</button>
  <br />
  <br />

  <pre>{{ cookies }}</pre>
</template>

<script lang="ts">
import useCookies from "@/utils/useCookies";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const { get, set, remove, cookies } = useCookies();
    const selectedKey = ref(Object.keys(cookies.value)[0] || "");
    const key = ref("");
    const value = ref("");
    const keys = computed(() => Object.keys(cookies.value));

    return {
      key,
      value,
      keys,
      selectedKey,
      // useCookies
      get,
      set,
      remove,
      cookies,
    };
  },
});
</script>

<style scoped>
input,
button {
  margin: 5px;
}
</style>
