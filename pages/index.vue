<script setup lang="ts">
import ForecastHoursToday from "~/components/forecast/hours/ForecastHoursToday.vue";

const { todayForecastHours } = storeToRefs(useCurrentStore())
</script>

<template>
  <div class="flex flex-col">
    <CurrentHero />
    <ForecastHoursToday />
    <div class="grid grid-cols-6 gap-4 mt-4">
      <div>
        <CardsUVIndex />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
