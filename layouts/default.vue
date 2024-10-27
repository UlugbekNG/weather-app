<script setup lang="js">

import Theme from "~/components/theme.vue";
</script>

<template>
<!--  <div class="flex h-screen bg-gradient-to-r from-sky-500 to-sky-600 [background:linear-gradient(90deg,var(&#45;&#45;tw-gradient-stops))]">-->
  <div class="flex h-screen dark:bg-gray-900">
    <aside
        class="flex flex-col w-72 bg-gray-50 dark:bg-gray-800 dark:bg-opacity-30"
    >
      <div class="flex items-center justify-center gap-2 h-20">
        <Icon name="i-wi-dust" class="w-16 h-16 text-primary-500" />
        <p class="font-bold text-2xl">
          Weather App
        </p>
      </div>
      <div class="flex-1 py-4 px-2">
        <theme />
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Top Bar -->
      <header class="h-16  flex items-center justify-between gap-2 px-4">
        <div class="flex items-center justify-between w-full gap-4">
          <div class="flex items-center gap-4">

          </div>
          <div class="flex items-center gap-2">

          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto relative">
        <UContainer>
          <slot />
        </UContainer>
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>
