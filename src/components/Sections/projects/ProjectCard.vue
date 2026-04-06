<script lang="ts" setup>
import type { Project } from '@/stores/projects.ts'

defineProps<{
  project: Project
  isActive: boolean
}>()

const emit = defineEmits<{
  toggle: [id: string]
}>()
</script>

<template>
  <div
    class="cell"
    :class="{ active: isActive }"
    @click="emit('toggle', project.id)"
  >
    <div class="thumb">
      <img v-if="project.cover" :src="project.cover" :alt="project.title" />
      <div v-else class="thumb-placeholder" />

      <div class="thumb-label">
        <p class="thumb-title">{{ project.title }}</p>
        <p class="thumb-sub">{{ project.publication }}</p>
      </div>

      <div class="indicator" />
    </div>
  </div>
</template>

<style scoped>
.cell {
  cursor: pointer;
  width: fit-content;
  /* shrink if needed but don't grow — stays at image's natural size */
  flex: 0 1 auto;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
}

.thumb {
  position: relative;
  display: flex;
  background: #FFF1ED;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  /* constrain very large images so they never exceed the container */
  max-width: 100%;
  max-height: 280px;
}

.thumb img {
  display: block;
  /* show full image at natural size, shrink if too big */
  max-width: 100%;
  max-height: 280px;
  width: auto;
  height: auto;
  object-fit: contain;
}

.thumb-placeholder {
  width: 200px;
  height: 160px;
  background: #FFF1ED;
}

.thumb-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px 10px 8px;
  background: rgba(255, 255, 255, 0.93);
  border-top: 0.5px solid rgba(0, 0, 0, 0.08);
}

.thumb-title {
  font-size: 11.5px;
  font-weight: 400;
  margin: 0 0 2px;
  color: #1a1a1a;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.thumb-sub {
  font-size: 10px;
  color: #999;
  margin: 0;
  font-weight: 300;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cell.active .thumb {
  outline: 1.5px solid #1a1a1a;
  outline-offset: -1px;
}

.indicator {
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #1a1a1a;
  display: none;
  pointer-events: none;
  z-index: 10;
}

.cell.active .indicator {
  display: block;
}
</style>
