<template>
  <div
    class="option"
    :class="[`option--${boders}`, darkMode && 'option--dark']"
  >
    <div :class="['option__title', darkMode && 'option__title--dark']">
      {{ title }}
    </div>
    <div class="option__image">
      <img :src="image" :alt="title" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { VISUALIZATION_PREFERENCES } from "./OptionSymbols";

export interface OptionProps {
  title: string;
  image: string;
}

export default defineComponent({
  props: {
    title: {
      type: String,
      default: undefined,
    },
    image: {
      type: String,
      default: undefined,
    },
  },
  setup() {
    const injection = inject(VISUALIZATION_PREFERENCES);
    return {
      darkMode: injection?.darkMode,
      boders: injection?.borders,
    };
  },
});
</script>

<style scoped>
.option--dark {
  background-color: rgb(37, 37, 37) !important;
}

.option {
  background-color: rgb(216, 216, 216);
  width: 320px;
  padding: 10px;
  margin: 10px;
}

.option--rounded {
  border-radius: 12px;
}

.option__title--dark {
  color: white !important;
}

.option__title {
  color: rgb(83, 83, 83);
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.option__image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.option__image > img {
  max-width: 300px;
}
</style>
