<script lang="ts" setup>
import { type IProject } from '@/stores/sections/projects.ts'
import { nextTick, ref } from 'vue'

const props = defineProps<{ project: IProject }>()

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
  <div class="container">
    <h2>{{ project.title }}</h2>
    <h3>{{ project.subtitle }}</h3>

    <button @click="toggleShowMore">Show {{ showMore ? 'Less' : 'More' }}</button>

    <div v-if="showMore" :id="`${project.id}-content`">
      <p>{{ project.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
