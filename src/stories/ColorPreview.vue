<script setup lang="ts">
defineProps<{
  title: string;
  colorVariable: string;
  value: string;
  inverted?: boolean;
  bordered?: boolean;
}>();
</script>

<template>
  <section
    class="color"
    :class="{ 'color--inverted': inverted, 'color--bordered': bordered }"
    :style="{ backgroundColor: `var(--${colorVariable})` }"
  >
    <div>{{ title }}</div>
    <div class="color__value">{{ value }}</div>
  </section>
</template>

<style scoped>
.color {
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 2px;
}

.color--bordered {
  border: 1px solid var(--monochromatic-nobel);
}

.color--inverted {
  color: #ffffff;
}

.color__value {
  font-weight: bold;
}
</style>
