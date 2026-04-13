<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  details: string
  moreDetail?:string
  date: string
}>()
</script>

<template>
  <div class="academic-card">
    <div class="content">
      <h3>{{ title }}</h3>
      <p class="date">{{ date }}</p>
    </div>
    <div class = "sub-content">
      <p>{{ subtitle }}</p>
      <p>{{ details }}</p>
      <p>{{ moreDetail }}</p>
    </div>



  </div>


<!--
 <div class="academic-card">-->
<!--    <div class="content">-->
<!--      <h3>{{ title }}</h3>-->
<!--      <p>{{ subtitle }}</p>-->
<!--      <p>{{ details }}</p>-->
<!--    </div>-->
<!--    <p class="date">{{ date }}</p>-->
<!--  </div>-->
</template>

<style scoped lang="scss">

.academic-card {
  border-top: 1px solid #F6E3B1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //align-items: start;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;


  h3 {
    margin: 16px 0 8px 0;
  }
}

.date {
  margin: 16px 0;
  //flex-direction: revert;
}
</style>
