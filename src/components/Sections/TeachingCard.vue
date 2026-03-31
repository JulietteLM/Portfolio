<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  date: string
  type: string
}>()
</script>

<template>
<div class = "teaching-card">
  <div class = "main-content">
    <h3>{{ title }}</h3>
    <p>{{ subtitle }}</p>
  </div>
  <div  class = "supp-content">
    <p class="date">{{ date }}</p>
    <div class = "type-teaching">
      <p class="type">{{ type }}</p>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss" >

.teaching-card {
  border-top: 1px solid #F6E3B1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
}

.main-content {
  display: flex;
  flex-direction: column;

  h3 {
    margin: 16px 0 8px 0;
  }
}

.supp-content {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
}

.type-teaching {
  margin: 8px 0 8px 0;
  background: #ffdbd1;
  border-left: 3px solid #8F4C38;
}

.type{
  margin: 4px 4px 4px 4px;

}
</style>


