<script lang="ts" setup>
import About from '@/components/About.vue'
import Name from '@/components/Name.vue'
import Menu from '@/components/menu/Menu.vue'
import Photo from '@/components/Photo.vue'
import Sections from '@/components/Sections/Sections.vue'
</script>

<template>
  <Menu></Menu>

  <div class="full-app">
    <header>
      <Photo></Photo>
      <Name></Name>
    </header>


  <main>
    <Sections class="sections" />
  </main>
</div>



</template>

<style scoped lang="scss">
@use '@/style/breakpoints' as *;

.full-app{
  display: flex;
  align-items: center;
  flex-direction: column;
}

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
  height: calc(100vh - 216px);
  max-width: 1000px;
  margin-top: 200px;
}

//.main-container {
//  //margin-top: 64px ;
//  display: flex;
//  justify-content: center;
//
//
//}

header{

  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
  //margin-top: -64px;

  position: fixed;
  z-index: 1000;
  background: #FFF8F6;

}


</style>
