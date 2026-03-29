<script lang="ts" setup>
import { sections } from '@/stores/sections.ts'
import { ref } from 'vue'
import MenuButton from '@/components/menu/MenuButton.vue'

const menuOpened = ref(false)
</script>

<template>
  <nav class="menu" :class="{open: menuOpened}">
    <MenuButton class="menu-button" :class="{ open: menuOpened}" @click="menuOpened = !menuOpened" />

    <div class="close-button">
    <button @click="menuOpened=false">X</button>
    </div>

    <div class="content">
      <a v-for="section in sections" :key="section.id" :href="`#${section.id}`" @click="menuOpened = false">
        {{ section.title }}
      </a>

    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '@/style/colors' as *;
@use '@/style/breakpoints' as *;

.menu {
  color: theme(on-primary);
  position: fixed;

  .content {
    display: flex;
    flex-direction: column;
  }

  .menu-button {
    margin: 8px;
  }

  .close-button {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  // Big screens
  @include respond-min(sm) {
    position: fixed;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);

    background-color: theme(primary);
    width: fit-content;

    border-radius: 8px;
    padding: 4px;

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
      background-color: theme(primary, 0.8);
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
