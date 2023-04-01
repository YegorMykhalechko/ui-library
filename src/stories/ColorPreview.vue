<script setup lang="ts">
defineProps<{ title: string; value: string; inverted?: boolean }>();
</script>

<template>
  <section
    :class="['color', { 'color--inverted': inverted }]"
    :style="{ backgroundColor: value }"
  >
    <div>{{ title }}</div>
    <div>{{ value }}</div>
  </section>
</template>

<style scoped>
.color {
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 2px;
}

.color--inverted {
  color: #ffffff;
}

.color__value {
  font-weight: bold;
}
</style>
