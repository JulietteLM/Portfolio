<script lang="ts" setup>
import About from '@/components/About.vue'
import Name from '@/components/Name.vue'
import Menu from '@/components/menu/Menu.vue'
import Photo from '@/components/Photo.vue'
import Sections from '@/components/Sections/Sections.vue'
</script>

<template>
  <Menu></Menu>
<div class="main-container">

  <main>
    <header>
      <Name></Name>
      <Photo></Photo>
      <About></About>
    </header>

    <Sections class="sections" />
  </main>
</div>


</template>

<style scoped lang="scss">
@use '@/style/breakpoints' as *;

main {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  overflow: auto;
  padding: 8px;
  @include respond-min(sm) {
    margin-left: 200px;
    margin-right: 200px;
  }

  max-width: 1000px;
}

.main-container {
  display: flex;
  justify-content: center;

}

.sections {
}
</style>
