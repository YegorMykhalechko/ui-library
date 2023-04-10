<template>
  <UiGrid>
    <UiGridCol
      v-for="(color, index) in list"
      span="4"
      mdSpan="6"
      :class="{ 'mt-1': index > 1 }"
    >
      <ColorPreview
        :colorVariable="color.colorVariable"
        :value="color.value"
        :inverted="color.inverted"
      />
    </UiGridCol>
  </UiGrid>
</template>

<script setup lang="ts">
import { UiGrid, UiGridCol } from "../components/UiLoyout";
import ColorPreview from "./ColorPreview.vue";

type List = { value: string; colorVariable: string; inverted?: boolean }[];

defineProps<{ list: List }>();
</script>

<style scoped></style>
