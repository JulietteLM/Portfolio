<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  subtitle: string
  date: string
  type: string
}>()

const style = computed(() => {
  switch (props.type){
    case 'Supervision':
      return 'background: #ffb4ab; border-left: 3px solid #690005; color: #690005;'
    case 'Main Lecturer':
      return 'background: #FFDBD1; border-left: 3px solid #5C4033; color: #5C4033;'
    default:
      return 'background: #F5E1A7; border-left: 3px solid #4D471C; color: #4D471C;'

  }
})
</script>

<template>
<div class = "teaching-card">
  <div class = "main-content">
    <h3>{{ title }}</h3>
    <p>{{ subtitle }}</p>
  </div>
  <div  class = "supp-content">
    <p class="date">{{ date }}</p>
    <div class = "type-teaching" :style="style">
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

//.type-teaching {
//  margin: 8px 0 8px 0;
//  //background: #ffdbd1;
//  //border-left: 3px solid #8F4C38;
//}


.type{
  margin: 4px 4px 4px 4px;

}
</style>


