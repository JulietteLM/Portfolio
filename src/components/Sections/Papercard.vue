<template>
  <p class="paper">
    <img v-if="thumbnail" class="paper-thumbnail" :src="thumbnail" :alt="paper.title_s?.[0]" />
    <span v-else class="paper-thumbnail paper-thumbnail--empty" />
    <span>
      <span class="paper-authors">{{ paper.authFullName_s?.join(', ') }}.</span>
      {{ ' ' }}
      <span class="paper-title">
        <a v-if="paper.files_s" :href="paper.files_s" target="_blank" rel="noopener">
          {{ paper.title_s?.[0] }}
        </a>
        <template v-else>{{ paper.title_s?.[0] }}</template>
      </span>
      {{ ' ' }}
      <span class="paper-venue">
        {{ venue }}
        <template v-if="paper.page_s">, pp. {{ paper.page_s }}</template>
        <template v-if="paper.doiId_s">
          . DOI: <a :href="'https://doi.org/' + paper.doiId_s">{{ paper.doiId_s }}</a>
        </template>
        <template v-if="paper.files_s">
          . <a class="pdf-link" :href="paper.files_s">PDF</a>
        </template>
      </span>
    </span>
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  paper: { type: Object, required: true },
})

const thumbnail = computed(() => {
  if (props.paper.fileAnnexesFigure_s?.length) return props.paper.fileAnnexesFigure_s[0]
  if (props.paper.thumbId_i) return `https://thumb.ccsd.cnrs.fr/${props.paper.thumbId_i}/thumb`
  return ''
})

const venue = computed(() => {
  if (props.paper.journalTitle_s) {
    return [
      props.paper.journalTitle_s,
      props.paper.volume_s,
      props.paper.issue_s ? `(${props.paper.issue_s})` : '',
    ].filter(Boolean).join(' ')
  }
  return props.paper.conferenceTitle_s ?? ''
})
</script>

<style scoped>
.paper {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin: 0.6rem 0;
}

.paper-thumbnail {
  width: 60px;
  height: 60px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 4px;
}

.paper-thumbnail--empty {
  display: inline-block;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

.paper-authors {
  font-weight: 500;
}

.paper-title a {
  font-style: italic;
  text-decoration: none;
  color: inherit;
}

.paper-title a:hover {
  text-decoration: underline;
}

.paper-venue {
  color: #444;
}

.pdf-link {
  font-weight: 600;
  color: #b00;
  text-decoration: none;
}

.pdf-link:hover {
  text-decoration: underline;
}
</style>
