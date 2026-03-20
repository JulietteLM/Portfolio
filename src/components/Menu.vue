<script lang="ts" setup>
import { sections } from '@/stores/sections/section.ts'
</script>

<template>
  <div>
    <a v-for="section in sections" :key="section.id" :href="`#${section.id}`">
      {{ section.title }}
    </a>
  </div>
</template>

<style scoped></style>
