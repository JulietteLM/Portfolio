<script lang="ts" setup>
import About from '@/components/About.vue'
import Name from '@/components/Name.vue'
import Menu from '@/components/Menu.vue'
import Photo from '@/components/Photo.vue'
import Sections from '@/components/Sections/Sections.vue'
</script>

<template>
  <Menu></Menu>

  <main>
    <header>
      <Photo></Photo>
      <About></About>
      <Name></Name>
    </header>

    <Sections />
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
