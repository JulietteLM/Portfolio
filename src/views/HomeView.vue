<script lang="ts" setup>
import About from '@/components/About.vue'
import Name from '@/components/Name.vue'
import Menu from '@/components/Menu.vue'
import Photo from '@/components/Photo.vue'
import Section from '@/components/Section.vue'
import { sections } from '@/stores/sections/section.ts'
</script>

<template>
  <main>
    <About></About>
    <Name></Name>
    <Menu></Menu>
    <Photo></Photo>

    <Section v-for="section in sections" :key="section.title" :section="section">
      {{ section.title }}
    </Section>
  </main>
</template>
