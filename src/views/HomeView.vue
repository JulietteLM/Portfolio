<script lang="ts" setup>
import About from '@/components/About.vue'
import Name from '@/components/Name.vue'
import Menu from '@/components/Menu.vue'
import Photo from '@/components/Photo.vue'
import Section from '@/components/Section.vue'
import { sections } from '@/stores/sections/section.ts'
</script>

<template>
  <Menu></Menu>

  <main>
    <header>
      <Photo></Photo>
      <About></About>
      <Name></Name>
    </header>


    <div class="area-section">
      <Section v-for="section in sections" :key="section.title" :section="section">
        {{ section.title }}
      </Section>
    </div>
  </main>

</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow: auto;
}
</style>
