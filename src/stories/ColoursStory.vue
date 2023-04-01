<script setup lang="ts">
import UiGrid from "../components/UiLoyout/UiGrid/UiGrid.vue";
import UiGridCol from "../components/UiLoyout/UiGridCol/UiGridCol.vue";
import ColorPreview from "./ColorPreview.vue";

const monochromatic = {
  White: { title: "White", value: "#FFFFFF" },
  Black: { title: "Black", value: "#000000", inverted: true },
  Alabaster: { title: "Alabaster", value: "#F7F7F7" },
  BlackHaze: { title: "BlackHaze", value: "#EFF0F0" },
  Concrete: { title: "Concrete", value: "#F2F2F2" },
  Gallery: { title: "Gallery", value: "#EEEEEE" },
  Mercury: { title: "Mercury", value: "#E8E8E8" },
  Atto: { title: "Atto", value: "#DDDDDD" },
  Nobel: { title: "Nobel", value: "#C4C4C4" },
  Silver: { title: "Silver", value: "#BBBBBB" },
  Delta: { title: "Delta", value: "#A6A6A6", inverted: true },
  Dull: { title: "Dull", value: "#888888", invertede: true },
  DoveGrey: { title: "DoveGrey", value: "#737373", invertede: true },
  MineShaft: { title: "MineShaft", value: "#333333", invertede: true },
};
</script>

<template>
  <UiGrid>
    <UiGridCol span="1/13">
      <h1>Colours</h1>
    </UiGridCol>
    <UiGridCol span="1/13">
      <h2>Monochromatic</h2>
    </UiGridCol>

    <UiGridCol span="1/7">
      <ColorPreview v-bind="monochromatic.White" />
    </UiGridCol>

    <UiGridCol span="7/13">
      <ColorPreview v-bind="monochromatic.Black" />
    </UiGridCol>

    <UiGridCol>
      <ColorPreview v-bind="monochromatic.Alabaster" />
    </UiGridCol>
    <UiGridCol>
      <ColorPreview v-bind="monochromatic.BlackHaze" />
    </UiGridCol>
    <UiGridCol>
      <ColorPreview v-bind="monochromatic.Concrete" />
    </UiGridCol>
    <UiGridCol>
      <ColorPreview v-bind="monochromatic.Concrete" />
    </UiGridCol>
    <UiGridCol>
      <ColorPreview v-bind="monochromatic.Gallery" />
    </UiGridCol>
    <UiGridCol>
      <ColorPreview v-bind="monochromatic.Mercury" />
    </UiGridCol>
    <UiGridCol>
      <ColorPreview v-bind="monochromatic.Atto" />
    </UiGridCol>
    <UiGridCol>
      <ColorPreview v-bind="monochromatic.Silver" />
    </UiGridCol>
    <UiGridCol>
      <ColorPreview v-bind="monochromatic.Delta" />
    </UiGridCol>
    <UiGridCol>
      <ColorPreview v-bind="monochromatic.Dull" />
    </UiGridCol>
    <UiGridCol>
      <ColorPreview v-bind="monochromatic.DoveGrey" />
    </UiGridCol>
    <UiGridCol>
      <ColorPreview v-bind="monochromatic.MineShaft" />
    </UiGridCol>
  </UiGrid>
</template>

<style scoped></style>
