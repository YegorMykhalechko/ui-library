<script setup lang="ts"></script>

<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
}

@media only screen and (min-width: 769px) {
  .grid {
    grid-template-columns: repeat(12, 1fr);
  }
}

@media only screen and (min-width: 1025px) {
  .grid {
    column-gap: 22px;
  }
}
</style>
