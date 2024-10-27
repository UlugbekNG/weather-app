<script setup lang="ts">
const props = defineProps<{
  hour: {
    time_epoch: number
    temperature: number
    code: number
    isDay: boolean,
    isNow: boolean
  }
}>()
</script>

<template>
  <div class="flex flex-col items-center gap-2 px-5">
    <p v-if="!hour.isNow" class="text-gray-500">
      {{ new Date(hour.time_epoch * 1000).getHours() }}:00
    </p>
    <p v-else class="text-gray-700 dark:text-gray-300 font-semibold">
      Сейчас
    </p>
    <WIcon
        :code="hour.code"
        alt="icon"
        className="w-8"
        :is-day="hour.isDay"
    />
    <p class="text-gray-700 dark:text-gray-300 ">
      {{ hour.temperature }}°
    </p>
  </div>
</template>

<style scoped>

</style>
