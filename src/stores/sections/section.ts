import { teaching } from '@/stores/sections/teaching.ts'
import { cv } from '@/stores/sections/cv.ts'
import type { Component } from 'vue'
import { projectSection } from '@/stores/sections/projects.ts'

export type ISection = {
  title: string
  paragraph?: string
  id: string
  component?: Component
}

export const sections: ISection[] = [cv, teaching, projectSection]
