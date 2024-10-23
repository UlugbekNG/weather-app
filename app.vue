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
</script>

<style>
body {
  font-family: 'Open Sans', sans-serif;
}
</style>
