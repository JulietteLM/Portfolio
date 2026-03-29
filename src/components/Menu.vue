<script lang="ts" setup>
import { sections } from '@/stores/sections.ts'
</script>

<template>
  <nav>
    <a v-for="section in sections" :key="section.id" :href="`#${section.id}`">
      {{ section.title }}
    </a>
  </nav>
</template>

<style scoped>
nav{
  display: flex;
  flex-direction: column;
  align-self: center;
}
</style>
