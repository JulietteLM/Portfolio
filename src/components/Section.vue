<script lang="ts" setup>
import { type ISection } from '@/stores/sections/section.ts'

defineProps<{ section: ISection }>()
</script>

<template>
  <div :id="section.id">
    <h1>{{ section.title }}</h1>

    <Component :is="section.component" v-if="section.component" />
    <p v-if="section.paragraph">{{ section.paragraph }}</p>
  </div>
</template>

<style scoped></style>
