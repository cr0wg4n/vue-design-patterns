<template>
  <div>
    <OptionContainer />
  </div>
</template>

<script lang="ts">
import OptionContainer from "@/components/option/OptionContainer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { OptionContainer },
});
</script>
