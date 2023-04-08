<template>
  <UiContainer>
    <UiGrid class="grid-story">
      <UiGridCol span="2" lgSpan="4">span 2/ lg4</UiGridCol>
      <UiGridCol span="1" mdSpan="4" lgSpan="2">span 1/ md4/ lg2</UiGridCol>
      <UiGridCol span="1" mdSpan="6">span 1/ md6</UiGridCol>
      <UiGridCol span="4" lgSpan="4">span 2/ lg4</UiGridCol>
      <UiGridCol mdStart="6" span="1" mdSpan="4" lgSpan="2">span 1/ md4/ lg2</UiGridCol>
    </UiGrid>
  </UiContainer>
</template>

<script setup lang="ts">
import { UiGrid, UiGridCol, UiContainer } from "../../components/UiLoyout";
</script>

<style lang="scss" scoped></style>
