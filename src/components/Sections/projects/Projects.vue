<script lang="ts" setup>
import ProjectCard from '@/components/Sections/projects/ProjectCard.vue'
import { projects } from '@/stores/sections/projects.ts'
</script>

<template>
  <div>
    <ProjectCard v-for="project in projects" :key="project.id" :project="project"></ProjectCard>
  </div>
</template>

<style scoped></style>
