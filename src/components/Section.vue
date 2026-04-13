<script lang="ts" setup>

import type { Section } from '@/stores/sections.ts'

defineProps<{ section: Section }>()
</script>

<template>
  <section v-html="section.html" :id="section.id" :section="section.id"/>
</template>

<style scoped></style>
