<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UModals />
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
const { getWeatherData } = useCurrentStore()

onBeforeMount(() => {
  getWeatherData()
})
</script>

<style>
@tailwind utilities;
body {
  font-family: 'Open Sans', sans-serif;
}

@layer utilities {
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
}
</style>
