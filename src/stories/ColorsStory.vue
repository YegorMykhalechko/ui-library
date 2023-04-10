<script setup lang="ts">
import { UiContainer, UiGrid, UiGridCol } from "../components/UiLoyout";
import ColorPreview from "./ColorPreview.vue";
import VariativeColors from "./VariativeColors.vue";

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
    title: "Whiskey",
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
  { colorVariable: "tint-navy-20", value: "#3D7EAB" },
  { colorVariable: "tint-move-blue-40", value: "#85A0B0" },
  { colorVariable: "tint-navy-40", value: "#6D9EC0" },
  { colorVariable: "tint-move-blue-60", value: "#AEC0CB" },
  { colorVariable: "tint-navy-60", value: "#9EBFD5" },
];
const greenTints: Color[] = [
  { colorVariable: "tint-surf-green-20", value: "#41A991" },
  { colorVariable: "tint-green-haze-20", value: "#33C157" },
  { colorVariable: "tint-surf-green-40", value: "#708FAD" },
  { colorVariable: "tint-green-haze-40", value: "#66D181" },
  { colorVariable: "tint-surf-green-60", value: "#A0D4CB" },
  { colorVariable: "tint-green-haze-60", value: "#99E0AB" },
];
const yellowTints: Color[] = [
  { colorVariable: "tint-whiskey-20", value: "#DBB181" },
  { colorVariable: "tint-mustard-20", value: "#FFDE79" },
  { colorVariable: "tint-whiskey-40", value: "#E4C5A0" },
  { colorVariable: "tint-mustard-40", value: "#FFE69A" },
  { colorVariable: "tint-whiskey-60", value: "#EDD8C0" },
  { colorVariable: "tint-mustard-60", value: "#FFEFBC" },
];
const redTints: Color[] = [
  { colorVariable: "tint-salmon-20", value: "#E16161" },
  { colorVariable: "tint-valencia-20", value: "#FF9A8F" },
  { colorVariable: "tint-salmon-40", value: "#E88988" },
  { colorVariable: "tint-valencia-40", value: "#FFB3AB" },
  { colorVariable: "tint-salmon-60", value: "#F0B0B0" },
  { colorVariable: "tint-valencia-60", value: "#FFCDC7" },
];

const blueShades: Color[] = [
  { colorVariable: "shade-move-blue-20", value: "#152732", inverted: true },
  { colorVariable: "shade-navy-20", value: "#05263C", inverted: true },
  { colorVariable: "shade-move-blue-40", value: "#1F3A4A", inverted: true },
  { colorVariable: "shade-navy-40", value: "#07385A", inverted: true },
  { colorVariable: "shade-move-blue-60", value: "#2A4E63", inverted: true },
  { colorVariable: "shade-navy-60", value: "#0A4B78", inverted: true },
];
const greenShades: Color[] = [
  { colorVariable: "shade-surf-green-20", value: "#073B2F", inverted: true },
  { colorVariable: "shade-green-haze-20", value: "#004712", inverted: true },
  { colorVariable: "shade-surf-green-40", value: "#0A5947", inverted: true },
  { colorVariable: "shade-green-haze-40", value: "#006B1B", inverted: true },
  { colorVariable: "shade-surf-green-60", value: "#0E765E", inverted: true },
  { colorVariable: "shade-green-haze-60", value: "#008E24", inverted: true },
];
const yellowShades: Color[] = [
  { colorVariable: "shade-whiskey-20", value: "#543F27", inverted: true },
  { colorVariable: "shade-mustard-20", value: "#665623", inverted: true },
  { colorVariable: "shade-whiskey-40", value: "#7E5F3A", inverted: true },
  { colorVariable: "shade-mustard-40", value: "#998034", inverted: true },
  { colorVariable: "shade-whiskey-60", value: "#A87E4E", inverted: true },
  { colorVariable: "shade-mustard-60", value: "#CCAB46", inverted: true },
];
const redShades: Color[] = [
  { colorVariable: "shade-salmon-20", value: "#66342E", inverted: true },
  { colorVariable: "shade-valencia-20", value: "#571717", inverted: true },
  { colorVariable: "shade-salmon-40", value: "#994D45", inverted: true },
  { colorVariable: "shade-valencia-40", value: "#822322", inverted: true },
  { colorVariable: "shade-salmon-60", value: "#CC675C", inverted: true },
  { colorVariable: "shade-valencia-60", value: "#AE2E2E", inverted: true },
];

const blueTones: Color[] = [
  { colorVariable: "tone-move-blue-20", value: "#43677C", inverted: true },
  { colorVariable: "tone-navy-20", value: "#236491", inverted: true },
  { colorVariable: "tone-move-blue-40", value: "#526D7D", inverted: true },
  { colorVariable: "tone-navy-40", value: "#3A6B8D", inverted: true },
  { colorVariable: "tone-move-blue-60", value: "#61737E", inverted: true },
  { colorVariable: "tone-navy-60", value: "#517288", inverted: true },
];
const greenTones: Color[] = [
  { colorVariable: "tone-surf-green-20", value: "#278F77", inverted: true },
  { colorVariable: "tone-green-haze-20", value: "#19A73D", inverted: true },
  { colorVariable: "tone-surf-green-40", value: "#3D8C7A", inverted: true },
  { colorVariable: "tone-green-haze-40", value: "#339E4E", inverted: true },
  { colorVariable: "tone-surf-green-60", value: "#53877B", inverted: true },
  { colorVariable: "tone-green-haze-60", value: "#4C935E", inverted: true },
];
const yellowTones: Color[] = [
  { colorVariable: "tone-whiskey-20", value: "#C19767", inverted: true },
  { colorVariable: "tone-mustard-20", value: "#E5C45F", inverted: true },
  { colorVariable: "tone-whiskey-40", value: "#B1926D", inverted: true },
  { colorVariable: "tone-mustard-40", value: "#E5C45F", inverted: true },
  { colorVariable: "tone-whiskey-60", value: "#A08B73", inverted: true },
  { colorVariable: "tone-mustard-60", value: "#B2A26F", inverted: true },
];
const redTones: Color[] = [
  { colorVariable: "tone-salmon-20", value: "#E58075", inverted: true },
  { colorVariable: "tone-valencia-20", value: "#C74747", inverted: true },
  { colorVariable: "tone-salmon-40", value: "#CC8078", inverted: true },
  { colorVariable: "tone-valencia-40", value: "#B55655", inverted: true },
  { colorVariable: "tone-salmon-60", value: "#B2807A", inverted: true },
  { colorVariable: "tone-valencia-60", value: "#A36363", inverted: true },
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
        <VariativeColors :list="blueTints" />
      </UiGridCol>
      <UiGridCol span="3">
        <VariativeColors :list="greenTints" />
      </UiGridCol>
      <UiGridCol span="3">
        <VariativeColors :list="yellowTints" />
      </UiGridCol>
      <UiGridCol span="3">
        <VariativeColors :list="redTints" />
      </UiGridCol>
    </UiGrid>
    <h2>Shades / 20%, 40%, 60% Black</h2>
    <UiGrid>
      <UiGridCol span="3">
        <VariativeColors :list="blueShades" />
      </UiGridCol>
      <UiGridCol span="3">
        <VariativeColors :list="greenShades" />
      </UiGridCol>
      <UiGridCol span="3">
        <VariativeColors :list="yellowShades" />
      </UiGridCol>
      <UiGridCol span="3">
        <VariativeColors :list="redShades" />
      </UiGridCol>
    </UiGrid>
    <h2>Tones / 20%, 40%, 60% Grey</h2>
    <UiGrid>
      <UiGridCol span="3">
        <VariativeColors :list="blueTones" />
      </UiGridCol>
      <UiGridCol span="3">
        <VariativeColors :list="greenTones" />
      </UiGridCol>
      <UiGridCol span="3">
        <VariativeColors :list="yellowTones" />
      </UiGridCol>
      <UiGridCol span="3">
        <VariativeColors :list="redTones" />
      </UiGridCol>
    </UiGrid>
  </UiContainer>
</template>

<style scoped></style>
