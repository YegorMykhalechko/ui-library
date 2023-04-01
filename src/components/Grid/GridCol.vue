<script setup lang="ts">
defineProps<{ span?: number | string }>()
</script>

<template>
    <div class="grid-col" :style="{gridColumn : span}">
        <slot></slot>
    </div>
</template>

<style scoped>
/* .grid-col {
    grid-column: 1 / 3;
} */
</style>
