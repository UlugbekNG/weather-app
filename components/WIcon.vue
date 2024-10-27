<script setup lang="ts">
const props = defineProps<{
  code: number
  alt: string
  className?: string
  isDay?: boolean
}>()
</script>

<template>
  <NuxtImg
      :class="className"
      :src="getWeatherIcon(code as number, isDay)"
      :alt="alt"
  />
</template>

<style scoped>

</style>
