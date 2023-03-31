<script setup lang="ts">
</script>

<template>
    <div class="grid">
        <slot></slot>
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
    margin: 0 16px;
}

@media only screen and (min-width: 769px) {
    .grid {
        grid-template-columns: repeat(12, 1fr);
        margin: 0 80px;
    }
}

@media only screen and (min-width: 1025px) {
    .grid {
        grid-gap: 22px;
        margin: 0 100px;
    }
}
</style>
