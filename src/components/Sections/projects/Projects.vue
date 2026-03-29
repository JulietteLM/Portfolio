<script lang="ts" setup>
import ProjectCard from '@/components/Sections/projects/ProjectCard.vue'
import { projects } from '@/stores/projects.ts'
</script>

<template>
  <div>
    <ProjectCard v-for="project in projects" :key="project.id" :project="project"></ProjectCard>
  </div>
</template>

<style scoped>
div{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
}

</style>
