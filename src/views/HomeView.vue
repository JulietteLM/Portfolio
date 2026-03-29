<script lang="ts" setup>
import About from '@/components/About.vue'
import Name from '@/components/Name.vue'
import Menu from '@/components/menu/Menu.vue'
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

    <Sections class="sections" />
  </main>

</template>

<style scoped lang="scss">
@use '@/style/breakpoints' as *;

main {
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow: auto;

  padding: 8px;
  @include respond-min(sm) {
    margin-left: 200px;
  }

  max-width: 800px;

}

.sections {
}
</style>
