import { loadFilesData } from '@/utils/markdown.ts'

export type Section = {
  id: string
  html: string
  title: string
}

function loadSections(): Array<Section> {
  const modules: Record<string, string> = import.meta.glob('../content/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  })
  const sectionData = loadFilesData(modules, { title: '??'})

  return sectionData.map((section) => ({
    id: section.id,
    html: section.html,
    ...section.metadata
  }))
}

export const sections = loadSections()
