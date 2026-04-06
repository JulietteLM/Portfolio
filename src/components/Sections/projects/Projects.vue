<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import ProjectCard from '@/components/Sections/projects/ProjectCard.vue'
import { projects } from '@/stores/projects.ts'

const activeId = ref<string | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const offsets = ref<number[]>(projects.map(() => 0))

const activeProject = computed(() =>
  projects.find(p => p.id === activeId.value) ?? null
)

const activeIndex = computed(() =>
  projects.findIndex(p => p.id === activeId.value)
)

const expandAfterIndex = computed(() => {
  if (activeIndex.value === -1) return -1
  const activeTop = offsets.value[activeIndex.value]
  let last = activeIndex.value
  for (let j = activeIndex.value + 1; j < offsets.value.length; j++) {
    if (offsets.value[j] === activeTop) last = j
    else break
  }
  return last
})

function toggle(id: string) {
  activeId.value = activeId.value === id ? null : id
}

function measureOffsets() {
  const container = containerRef.value
  if (!container) return
  const containerTop = container.getBoundingClientRect().top
  const cards = container.querySelectorAll<HTMLElement>('.cell')
  if (cards.length === 0) return
  offsets.value = Array.from(cards).map(
    card => Math.round(card.getBoundingClientRect().top - containerTop)
  )
}

let ro: ResizeObserver | null = null

onMounted(() => {
  nextTick(measureOffsets)
  if (typeof ResizeObserver !== 'undefined' && containerRef.value) {
    ro = new ResizeObserver(measureOffsets)
    ro.observe(containerRef.value)
  }
})

onUnmounted(() => {
  ro?.disconnect()
  ro = null
})

watch(activeId, () => nextTick(measureOffsets))
</script>

<template>
  <section class="projects-section">
    <h1 id="projects">Projects</h1>

    <div class="grid-wrap" ref="containerRef">
      <template v-for="(project, i) in projects" :key="project.id">

        <ProjectCard
          :project="project"
          :isActive="activeId === project.id"
          @toggle="toggle"
        />

        <transition name="expand">
          <div
            v-if="activeProject && expandAfterIndex === i"
            class="expand-panel"
          >
            <div class="panel-inner">

              <div class="panel-body">
                <p class="panel-tag">{{ activeProject.publication }}</p>
                <h2 class="panel-title">{{ activeProject.title }}</h2>
                <div class="panel-desc" v-html="activeProject.html" />
              </div>

              <div class="panel-images">
                <img
                  v-if="activeProject.cover"
                  :src="activeProject.cover"
                  :alt="activeProject.title"
                  class="panel-img"
                />
                <div v-else class="panel-img-placeholder" />
              </div>

              <button class="panel-close" @click="activeId = null">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

            </div>
          </div>
        </transition>

      </template>
    </div>
  </section>
</template>

<style scoped>


.grid-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 0;      /* critical: flex child must opt out of min-width: auto */
  width: 100%;
}

.expand-panel {
  flex: 0 0 100%;
  width: 100%;
  background: #fff;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-width: 0;
}

.panel-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  min-height: 200px;
}

.panel-body {
  grid-column: 1;
  grid-row: 1;
  padding: 28px 28px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-right: 0.5px solid rgba(0, 0, 0, 0.08);
  min-width: 0;
}

.panel-tag {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #aaa;
  font-weight: 400;
  margin: 0;
}

.panel-title {
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  line-height: 1.25;
  color: #1a1a1a;
  text-align: right;
}

.panel-desc {
  font-size: 13px;
  color: #555;
  line-height: 1.72;
  font-weight: 300;
}

.panel-images {
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
  min-width: 140px;
  max-width: 240px;
}

.panel-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border: 0.5px solid rgba(0, 0, 0, 0.08);
}

.panel-img-placeholder {
  width: 100%;
  height: 140px;
  background: #e8e4de;
}

.panel-close {
  grid-column: 2;
  grid-row: 2;
  align-self: flex-end;
  justify-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  color: #bbb;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  transition: color 0.15s;
}

.panel-close:hover {
  color: #1a1a1a;
}

@media (max-width: 480px) {
  .panel-inner {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }

  .panel-body {
    grid-column: 1;
    grid-row: 1;
    border-right: none;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
    padding: 20px 16px;
  }

  .panel-images {
    grid-column: 1;
    grid-row: 2;
    max-width: 100%;
    min-width: 0;
    padding: 8px 16px;
  }

  .panel-close {
    grid-column: 1;
    grid-row: 3;
    justify-self: flex-end;
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.38s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;
  max-height: 600px;
  opacity: 1;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
