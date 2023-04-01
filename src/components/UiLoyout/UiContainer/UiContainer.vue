<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  margin-left: 16px;
  margin-right: 16px;
}

@media only screen and (min-width: 769px) {
  .container {
    margin-left: 80px;
    margin-right: 80px;
  }
}

@media only screen and (min-width: 1025px) {
  .container {
    margin-left: 100px;
    margin-right: 100px;
  }
}
</style>
