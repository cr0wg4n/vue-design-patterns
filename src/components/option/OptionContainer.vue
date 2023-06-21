<template>
  <fieldset>
    <legend>Visualization Preferences</legend>
    <h4>Borders?</h4>
    <div>
      <input
        type="radio"
        id="square"
        name="borders"
        value="square"
        v-model="preferences.borders"
      />
      <label for="square">square</label>
    </div>

    <div>
      <input
        type="radio"
        id="rounded"
        name="borders"
        value="rounded"
        v-model="preferences.borders"
      />
      <label for="rounded">rounded</label>
    </div>
    <h4>Dark Mode?</h4>
    <div>
      <input
        type="checkbox"
        id="darkmode"
        name="darkmode"
        v-model="preferences.darkMode"
      />
      <label for="darkmode">Dark Mode</label>
    </div>
  </fieldset>
  <br />
  <OptionList :data="data" />
</template>

<script lang="ts" setup>
import { computed, provide, reactive } from "vue";
import type { OptionItemProps } from "./OptionItem.vue";
import OptionList from "./OptionList.vue";
import {
  VISUALIZATION_PREFERENCES,
  type VisualizationPreferences,
} from "./OptionSymbols";

const preferences = reactive<VisualizationPreferences>({
  borders: "square",
  darkMode: false,
});

const data = reactive<OptionItemProps[]>([
  {
    title: "Nunc massa ex, vulputate id tincidunt",
    image: "https://random.imagecdn.app/500/200#1",
  },
  {
    title: "Donec facilisis, mauris a vulputate",
    image: "https://random.imagecdn.app/500/200#12",
  },
  {
    title: " Curabitur luctus mollis aliquam",
    image: "https://random.imagecdn.app/500/200#33",
  },
]);

provide(VISUALIZATION_PREFERENCES, {
  darkMode: computed(() => preferences.darkMode),
  borders: computed(() => preferences.borders),
});
</script>
