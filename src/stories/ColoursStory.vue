<script setup lang="ts">
import Grid from "../components/Grid/Grid.vue";
import GridCol from "../components/Grid/GridCol.vue";
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
  <Grid>
    <GridCol span="1/13">
      <h1>Colours</h1>
    </GridCol>
    <GridCol span="1/13">
      <h2>Monochromatic</h2>
    </GridCol>

    <GridCol span="1/7">
      <ColorPreview v-bind="monochromatic.White" />
    </GridCol>

    <GridCol span="7/13">
      <ColorPreview v-bind="monochromatic.Black" />
    </GridCol>

    <GridCol>
      <ColorPreview v-bind="monochromatic.Alabaster" />
    </GridCol>
    <GridCol>
      <ColorPreview v-bind="monochromatic.BlackHaze" />
    </GridCol>
    <GridCol>
      <ColorPreview v-bind="monochromatic.Concrete" />
    </GridCol>
    <GridCol>
      <ColorPreview v-bind="monochromatic.Concrete" />
    </GridCol>
    <GridCol>
      <ColorPreview v-bind="monochromatic.Gallery" />
    </GridCol>
    <GridCol>
      <ColorPreview v-bind="monochromatic.Mercury" />
    </GridCol>
    <GridCol>
      <ColorPreview v-bind="monochromatic.Atto" />
    </GridCol>
    <GridCol>
      <ColorPreview v-bind="monochromatic.Silver" />
    </GridCol>
    <GridCol>
      <ColorPreview v-bind="monochromatic.Delta" />
    </GridCol>
    <GridCol>
      <ColorPreview v-bind="monochromatic.Dull" />
    </GridCol>
    <GridCol>
      <ColorPreview v-bind="monochromatic.DoveGrey" />
    </GridCol>
    <GridCol>
      <ColorPreview v-bind="monochromatic.MineShaft" />
    </GridCol>
  </Grid>
</template>

<style scoped></style>
