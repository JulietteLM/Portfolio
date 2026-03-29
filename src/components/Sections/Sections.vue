<script setup lang="ts">

import Section from '@/components/Section.vue'
import Projects from '@/components/Sections/projects/Projects.vue'
import { sections } from '@/stores/sections.ts'
</script>

<template>
<div>
  <Section v-for="section in sections" :key="section.title" :section="section">
    {{ section.title }}
  </Section>

  <Projects />
</div>
</template>

<style scoped lang="scss">

</style>
