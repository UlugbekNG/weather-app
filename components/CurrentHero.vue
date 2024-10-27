<script setup lang="ts">
const {currentWeather, currentLocation} = storeToRefs(useCurrentStore())

const temperature = computed(() => {
  return roundTemperature(currentWeather.value?.temp_c as number)
})

const condition = computed(() => {
  if (currentWeather.value) {
    return {
      code: currentWeather.value.condition.code,
      text: currentWeather.value.condition.text,
      isDay: currentWeather.value.is_day === 1
    }
  }
  return {
    code: '',
    text: '',
    isDay: false
  }
})
</script>

<template>
  <div class="flex justify-evenly w-full">
    <div class="flex flex-col justify-center gap-8">
      <div>
        <p class="text-4xl font-bold text-gray-700 dark:text-gray-300">
          {{ currentLocation.region }}
        </p>
        <p class="text-gray-500 text-lg">
          {{ condition.text }}
        </p>
      </div>
      <div class="text-gray-700 text-8xl font-bold dark:text-gray-300">
        {{ temperature }}°
      </div>
    </div>
    <div>
      <WIcon
          :code="condition.code as number"
          :alt="condition.text"
          className="w-64"
          :is-day="condition.isDay"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
