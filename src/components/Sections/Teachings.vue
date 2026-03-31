<script setup lang="ts">

import TeachingCard from '@/components/Sections/TeachingCard.vue'
</script>

<template>
<div>
  <h1 id="teaching">Teachings</h1>
  <div class="d-flex flex-column gap-6">
    <TeachingCard title="Digital Culture and Skills" subtitle="L2 - Bachelor of Psychology" date="2024 → 2026" type="Teaching Assistant"/>
    <TeachingCard title="Epistemology of Science" subtitle="L2 & L3 - Bachelor of Mathemathics and Computing for Social Sciences (MIASHS)" date="2023 → 2025" type="Main lecturer (CM and TD)"/>

    <TeachingCard title="Scientific methodology" subtitle="L1 - Bachelor of Computer Science" date="2023 → 2024" type="Teaching Assistant"/>
    <TeachingCard title="Master Project on 3D collaborative Storyboarding" subtitle="M2 - Image and Sound" date="2024" type="Supervision"/>
  </div>

</div>
</template>

<style scoped>

</style>
