<script setup lang="ts">
const emit = defineEmits(['click']);

function onClick() {
  emit('click');
}
</script>

<template>
  <div class="container" @click="onClick">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<style scoped lang="scss">
@use '@/style/colors' as *;

.container {
  display: inline-block;
  cursor: pointer;

  &.open .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
  }

  &.open .bar2 {
    opacity: 0;
  }

  &.open .bar3 {
    transform: translate(0, -11px) rotate(45deg);
  }
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: theme(on-primary);
  margin: 6px 0;
  transition: 0.4s;

  border-radius: 3px;
}
</style>
