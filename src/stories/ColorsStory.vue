<script setup lang="ts">
import { UiContainer, UiGrid, UiGridCol } from "../components/UiLoyout";
import ColorPreview from "./ColorPreview.vue";

type Color = {
  title?: string;
  value: string;
  colorVariable: string;
  inverted?: boolean;
  bordered?: boolean;
};

const monochromaticWhite: Color = {
  title: "White",
  value: "#FFFFFF",
  colorVariable: "monochromatic-white",
};
const monochromaticBlack: Color = {
  title: "Black",
  value: "#000000",
  inverted: true,
  colorVariable: "monochromatic-black",
};

const monochromatic: Record<string, Color> = {
  Alabaster: {
    title: "Alabaster",
    value: "#F7F7F7",
    colorVariable: "monochromatic-alabaster",
    bordered: true,
  },
  BlackHaze: {
    title: "BlackHaze",
    value: "#EFF0F0",
    colorVariable: "monochromatic-black-haze",
  },
  Concrete: {
    title: "Concrete",
    value: "#F2F2F2",
    colorVariable: "monochromatic-concrete",
  },
  Gallery: {
    title: "Gallery",
    value: "#EEEEEE",
    colorVariable: "monochromatic-gallery",
  },
  Mercury: {
    title: "Mercury",
    value: "#E8E8E8",
    colorVariable: "monochromatic-mercury",
  },
  Atto: {
    title: "Atto",
    value: "#DDDDDD",
    colorVariable: "monochromatic-alto",
  },
  Nobel: {
    title: "Nobel",
    value: "#C4C4C4",
    colorVariable: "monochromatic-nobel",
  },
  Silver: {
    title: "Silver",
    value: "#BBBBBB",
    colorVariable: "monochromatic-silver",
  },
  Delta: {
    title: "Delta",
    value: "#A6A6A6",
    inverted: true,
    colorVariable: "monochromatic-delta",
  },
  Dull: {
    title: "Dull",
    value: "#888888",
    inverted: true,
    colorVariable: "monochromatic-dull",
  },
  DoveGrey: {
    title: "DoveGrey",
    value: "#737373",
    inverted: true,
    colorVariable: "monochromatic-dove-grey",
  },
  MineShaft: {
    title: "MineShaft",
    value: "#333333",
    inverted: true,
    colorVariable: "monochromatic-mine-shaft",
  },
};

const primary1: Record<string, Color> = {
  MoveBlue: {
    title: "MoveBlue",
    value: "#34617C",
    colorVariable: "primary-move-blue",
    inverted: true,
  },
  SurfGreen: {
    title: "SurfGreen",
    value: "#119476",
    colorVariable: "primary-surf-green",
    inverted: true,
  },
  Whiskey: {
    title: "SurfGreen",
    value: "#D29E61",
    colorVariable: "primary-whiskey",
    inverted: true,
  },
  Salmon: {
    title: "Salmon",
    value: "#FF8173",
    colorVariable: "primary-salmon",
    inverted: true,
  },
};

const primary2: Record<string, Color> = {
  Navy: {
    title: "Navy",
    value: "#0C5E96",
    colorVariable: "primary-navy",
    inverted: true,
  },
  GreenHaze: {
    title: "GreenHaze",
    value: "#00B22D",
    colorVariable: "primary-green-haze",
    inverted: true,
  },
  Mustard: {
    title: "Mustard",
    value: "#FFD657",
    colorVariable: "primary-mustard",
    inverted: true,
  },
  Valencia: {
    title: "Valencia",
    value: "#D93A39",
    colorVariable: "primary-valencia",
    inverted: true,
  },
};

const blueTints: Color[] = [
  { colorVariable: "tint-move-blue-20", value: "#5D8196" },
  { colorVariable: "tint-move-blue-40", value: "#85A0B0" },
  { colorVariable: "tint-move-blue-60", value: "#AEC0CB" },
  { colorVariable: "tint-navy-20", value: "#3D7EAB" },
  { colorVariable: "tint-navy-40", value: "#6D9EC0" },
  { colorVariable: "tint-navy-60", value: "#9EBFD5" },
];
</script>

<template>
  <UiContainer>
    <h2>Monochromatic</h2>
    <UiGrid>
      <UiGridCol span="2" mdSpan="6">
        <ColorPreview v-bind="monochromaticWhite" />
      </UiGridCol>
      <UiGridCol span="2" mdSpan="6">
        <ColorPreview v-bind="monochromaticBlack" />
      </UiGridCol>
      <UiGridCol
        class="mt-24"
        span="2"
        mdSpan="1"
        v-for="(item, index) in monochromatic"
        :key="index"
      >
        <ColorPreview v-bind="item" />
      </UiGridCol>
    </UiGrid>
    <h2>Primary</h2>
    <UiGrid>
      <UiGridCol
        class="mt-24"
        span="2"
        mdSpan="3"
        v-for="(item, index) in primary1"
        :key="index"
      >
        <ColorPreview v-bind="item" />
      </UiGridCol>
      <UiGridCol
        class="mt-24"
        span="2"
        mdSpan="3"
        v-for="(item, index) in primary2"
        :key="index"
      >
        <ColorPreview v-bind="item" />
      </UiGridCol>
    </UiGrid>
    <h2>Tints / 20%, 40%, 60% White</h2>
    <UiGrid>
      <UiGridCol span="3">
        <UiGrid>
          <UiGridCol
            v-for="(color, index) in blueTints"
            span="4"
            mdSpan="6"
            :class="{ 'mt-1': index > 1 }"
          >
            <ColorPreview v-bind="color" />
          </UiGridCol>
        </UiGrid>
      </UiGridCol>
    </UiGrid>
  </UiContainer>
</template>

<style scoped></style>
