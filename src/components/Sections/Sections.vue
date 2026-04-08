<script setup lang="ts">

import Section from '@/components/Section.vue'
import Projects from '@/components/Sections/projects/Projects.vue'
import Academics from '@/components/Sections/Academics.vue'
import { sections } from '@/stores/sections.ts'
import Teachings from '@/components/Sections/Teachings.vue'
import About from '@/components/About.vue'
import Publications from '@/components/Sections/Publications.vue'
</script>

<template>
<div>
  <About/>
  <Publications/>
  <Projects />
  <Academics />
<Teachings />
  <Section v-for="section in sections" :key="section.title" :section="section">
    {{ section.title }}
  </Section>

</div>
</template>

<style scoped lang="scss">

</style>
