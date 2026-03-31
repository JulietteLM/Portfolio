<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import type { Project } from '@/stores/projects.ts'

const props = defineProps<{ project: Project }>()

function toggleShowMore() {
  showMore.value = !showMore.value

  if (showMore.value) {
    nextTick(() => {
      document.getElementById(`${props.project.id}-content`)?.scrollIntoView()
    })
  }
}

const showMore = ref(false)
</script>

<template>
  <article class="container">
    <img :src="project.cover"/>
    <h2>{{ project.title }}</h2>
    <h4>{{ project.publication }}</h4>

    <button @click="toggleShowMore">Show {{ showMore ? 'Less' : 'More' }}</button>

    <div v-html="project.html" v-if="showMore" :id="`${project.id}-content`"></div>
  </article>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

img{
  //aspect-ratio: 2/1;
  height: 100%;
  width: 100%;
  max-height: 200px;
  //max-width: 400px;
}
</style>
