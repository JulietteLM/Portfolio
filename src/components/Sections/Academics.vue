<script setup lang="ts">
import AcademicCard from '@/components/Sections/AcademicCard.vue'
</script>

<template>
<div>
  <h1 id="academic">Academic Experience</h1>

  <div class="d-flex flex-column gap-6">
    <AcademicCard title="PhD in Human-Computer Interaction" subtitle="INRIA · University of Bordeaux · BIVWAC Team — Bordeaux, France" details="Supervisors: Dr. Arnaud Prouzeau, Pr. Anastasia Bezerianos, Dr. Martin Hachet" moreDetail = "Studying collaborative behaviours in educational contexts with immersive technologies" date="oct 2023 → present"/>
    <AcademicCard title="Software Engineering in Human-Computer Interactions" subtitle="ENSIM — Le Mans, France" details="Specialization in HCI and XR" date="2021 → 2023"/>
    <AcademicCard title="Erasmus+" subtitle="UQAC — Chicoutimi, Canada" details="Specialization in Video Games and AI" date="aug 2022 → jan 2023"/>
    <AcademicCard title="Bachelor's Degree in Sociology" subtitle="UNISTRA — Strasbourg, France" details="Specialization in Inequalities · Option: Anthropology" date="2022"/>
    <AcademicCard title="Bachelor's Degree in Foreign Language, Literature and Civilization (English)" subtitle="LMU — Le Mans, France" details="Education and Research Career Path" date="2021"/>
    <AcademicCard title="Preparatory Course in Humanities and Social Sciences" subtitle="SFX — Vannes, France" details='Two-year intensive program preparing for the national competitive exam for entry to French "Grandes Écoles"' date="2018 → 2020"/>


  </div>
</div>
</template>

<style scoped>

</style>
