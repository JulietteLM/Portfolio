<template>
  <div v-if="papers.length > 0" class="publication-list">
    <template v-for="[year, group] in Object.entries(groupedPapers).reverse()" :key="year">
      <h5 class="publication-year">
        {{ year }}
        <span v-if="isStructQuery">({{ countByYear[year] }})</span>
      </h5>

      <template v-if="isStructQuery">
        <template v-for="(typePapers, type) in group" :key="type">
          <h6 class="publication-type">
            {{ translateType(String(type)) }}
            <span>({{ (typePapers as any[]).length }})</span>
          </h6>
          <PaperCard v-for="paper in (typePapers as any[])" :key="(paper as any).docid" :paper="(paper as any)" />
        </template>
      </template>

      <template v-else>
        <PaperCard
          v-for="paper in (Object.values(group) as any[]).flat()"
          :key="(paper as any).docid"
          :paper="(paper as any)"
        />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import PaperCard from './Papercard.vue'

// ─── Props ────────────────────────────────────────────────────────────────────

const props = defineProps({
  /** HAL author ID  e.g. "jean-dupont"  */
  authHalId: { type: String, default: '' },
  /** HAL structure/institution ID  e.g. "123456"  */
  halIdInstitute: { type: String, default: '' },
  /** Single HAL document ID  e.g. "hal-00000001"  */
  halId: { type: String, default: '' },
  /** Page language: "en" | "fr"  */
  lang: { type: String, default: 'en' },
})

// ─── Constants ────────────────────────────────────────────────────────────────

const PRIORITY = [
  'ART', 'COMM', 'THESE', 'HDR', 'COUV', 'UNDEFINED',
  'POSTER', 'PRESCONF', 'REPORT', 'BLOG', 'OTHER',
]

const LABELS: Record<string, { en: string; fr: string }> = {
  ART:         { en: 'Journal Articles',                fr: 'Articles de revue' },
  COMM:        { en: 'Conference Articles',             fr: 'Articles de congrès' },
  THESE:       { en: 'PhD Theses',                      fr: 'Thèses de doctorat' },
  HDR:         { en: 'Habilitation',                    fr: 'Habilitation à diriger des recherches' },
  COUV:        { en: 'Book Chapters',                   fr: "Chapitres d'ouvrage" },
  UNDEFINED:   { en: 'Preprints',                       fr: 'Pré-publication' },
  POSTER:      { en: 'Poster Abstracts',                fr: 'Posters de conférence' },
  PRESCONF:    { en: 'Conference Presentations',        fr: 'Document associé à des manifestations scientifiques' },
  REPORT:      { en: 'Technical Reports',               fr: 'Rapport' },
  BLOG:        { en: 'Articles in Science Blogs',       fr: 'Articles de blog scientifique' },
  PROCEEDINGS: { en: 'Conference proceedings',          fr: 'Actes des conférence' },
  OTHER:       { en: 'Other',                           fr: 'Autres' },
}

const HAL_FIELDS = [
  'abstract_s', 'anrProjectReference_s', 'anrProjectId_i', 'arxivId_s',
  'authFullName_s', 'bookCollection_s', 'bookTitle_s', 'city_s',
  'conferenceTitle_s', 'defenseDateY_i', 'description_s', 'director_s',
  'docid', 'docType_s', 'doiId_s', 'europeanProjectCallId_s', 'files_s',
  'fileAnnexesFigure_s', 'halId_s', 'invitedCommunication_s', 'isbn_s',
  'issue_s', 'journalIssn_s', 'journalTitle_s', 'label_bibtex', 'label_s',
  'language_s', 'localReference_s', 'number_s', 'page_s', 'peerReviewing_s',
  'proceedings_s', 'producedDateY_i', 'publicationDateY_i', 'publicationLocation_s',
  'publisher_s', 'publisherLink_s', 'reportType_s', 'scientificEditor_s',
  'seeAlso_s', 'serie_s', 'source_s', 'subTitle_s', 'title_s', 'version_i',
  'volume_s', 'inPress_bool', 'submitType_s', 'linkExtId_s', 'linkExtUrl_s',
  'thumbId_i',
].join(',')

// ─── State ────────────────────────────────────────────────────────────────────

const papers = ref<any[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

// ─── Computed ─────────────────────────────────────────────────────────────────

const query = computed(() => {
  if (props.authHalId)      return `authIdHal_s:${props.authHalId}`
  if (props.halIdInstitute) return `structId_i:(1184756 OR ${props.halIdInstitute})`
  if (props.halId)          return `halId_s:${props.halId}`
  return ''
})

const isStructQuery = computed(() => query.value.includes('structId_i'))

const startYear = computed(() => (isStructQuery.value ? 2021 : 1900))

const sortedPapers = computed(() =>
  [...papers.value].sort((a: any, b: any) =>
    a.publicationDateY_i - b.publicationDateY_i
  )
)

const groupedPapers = computed(() => {
  const result: Record<string, Record<string, any[]>> = {}
  for (const paper of sortedPapers.value) {
    const year = paper.publicationDateY_i
    const type = paper.docType_s
    if (!result[year]) result[year] = {}
    if (!result[year][type]) result[year][type] = []
    result[year][type].push(paper)
  }
  return result
})

const countByYear = computed(() => {
  const counts: Record<string, number> = {}
  for (const [year, types] of Object.entries(groupedPapers.value)) {
    counts[year] = Object.values(types).flat().length
  }
  return counts
})

// ─── Helpers ──────────────────────────────────────────────────────────────────

function translateType(type: string): string {
  return LABELS[type]?.[props.lang as 'en' | 'fr'] ?? type
}

// ─── Data fetching ────────────────────────────────────────────────────────────

async function fetchPublications() {
  if (!query.value) return
  loading.value = true
  error.value = null

  const currentYear = new Date().getFullYear()
  const dateFilter =
    `(producedDate_tdate:[${startYear.value}-01-01T00:00:00Z TO ${currentYear}-12-31T00:00:00Z]` +
    ` OR publicationDate_tdate:[${startYear.value}-01-01T00:00:00Z TO ${currentYear}-12-31T00:00:00Z])` +
    ` AND submittedDate_tdate:[${startYear.value}-01-01T00:00:00Z TO ${currentYear}-12-31T00:00:00Z]`

  const exclusions = 'NOT (authLastName_s:Lotte OR authLastName_s:Rimbert OR authLastName_s:Guitton)'

  const url = new URL('https://api.archives-ouvertes.fr/search/')
  url.searchParams.set('q', `${query.value} AND ${exclusions} AND ${dateFilter}`)
  url.searchParams.set('rows', '999')
  url.searchParams.set('fl', HAL_FIELDS)

  try {
    const res = await fetch(url.toString())
    if (!res.ok) throw new Error(`HAL API error: ${res.status}`)
    const data = await res.json()
    papers.value = data.response?.docs ?? []
  } catch (e: any) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchPublications)
</script>

<style scoped>
.publication-list {
  font-size: 0.95rem;
  line-height: 1.6;
}

.publication-year {
  margin: 1.5rem 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.25rem;
}

.publication-type {
  margin: 1rem 0 0.4rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #555;
}
</style>
