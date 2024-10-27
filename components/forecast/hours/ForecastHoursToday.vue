<script setup lang="ts">
const { todayForecastHours } = storeToRefs(useCurrentStore())

const cardUi = {
  header: {
    padding: 'p-2 sm:p-2'
  },
  body: {
    padding: 'p-0 sm:p-0 sm:py-3 py-3'
  }
}
</script>

<template>
  <UCard :ui="cardUi">
    <template #header>
      <p class="text-gray-500">
        Почасовой прогноз на сегодня
      </p>
    </template>
    <div class="flex overflow-x-auto no-scrollbar">
      <ForecastHoursTodayItem v-for="hour in todayForecastHours" :key="hour.time_epoch" :hour="hour" />
    </div>
  </UCard>
</template>

<style scoped>

</style>
