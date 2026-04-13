<script lang="ts" setup>
import { sections } from '@/stores/sections.ts'
import { ref } from 'vue'
import MenuButton from '@/components/menu/MenuButton.vue'
import Publications from '@/components/Sections/Publications.vue'

const menuOpened = ref(false)
</script>

<template>
  <nav class="menu" :class="{open: menuOpened}">
    <MenuButton class="menu-button" :class="{ open: menuOpened}" @click="menuOpened = !menuOpened" />

    <div class="close-button">
    <button @click="menuOpened=false">X</button>
    </div>



    <div class="content">
      <a href="#about-me" @click="menuOpened = false">
        <h2> About Me</h2>
      </a>
      <a href="#publication" @click="menuOpened = false">
        <h2> Publications</h2>
      </a>
      <a href="#projects" @click="menuOpened = false">
        <h2> Projects</h2>
      </a>
      <a href="#academic" @click="menuOpened = false">
        <h2> Academic</h2>
      </a>
      <a href="#teaching" @click="menuOpened = false">
        <h2>Teaching</h2>
      </a>
      <a v-for="section in sections" :key="section.id" :href="`#${section.id}`" @click="menuOpened = false">
        <h2> {{ section.title }}</h2>
      </a>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '@/style/colors' as *;
@use '@/style/breakpoints' as *;

.menu {
  color: theme(on-secondary);
  position: fixed;
  right: 8px;
  z-index: 10;

  .content {
    display: flex;
    flex-direction: column;
  }

  .menu-button{
    margin: 8px;
  }

  .close-button {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  // Big screens
  @include respond-min(sm) {
    font-size: large;
    color: black;


    position: fixed;
    left: 48px;
    top: 50%;
    transform: translateY(-50%);

    //background-color: theme(secondary);
    width: fit-content;

    border-radius: 8px;
    padding: 12px;


    .menu-button, .close-button {
      display: none;
    }
  }

  // Small screens
  @include respond-max(sm) {
    .menu-button {
      display: inherit;
    }

    &:not(.open) {
      .content, .close-button {
        display: none !important;
      }
    }

    &.open {
      background-color: theme(secondary, 0.8);
      backdrop-filter: blur(2px);

      width: 100% !important;
      height: 100%;

      .content {
        align-items: center;
        justify-content: center;

        height: 100%;

        a {
          font-size: 2rem;
        }
      }
    }
  }
}
</style>
