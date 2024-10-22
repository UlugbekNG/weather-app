<script setup lang="js">

</script>

<template>
  <div class="flex h-screen bg-gradient-to-r from-sky-500 to-sky-600 [background:linear-gradient(90deg,var(--tw-gradient-stops))]">
    <aside
        class="flex flex-col w-20 bg-cool-800 bg-opacity-25 backdrop-blur-xl"
    >
      <div class="flex items-center justify-center gap-4 h-20">
        <Icon name="i-wi-dust" class="w-16 h-16 text-white" />
      </div>
      <div class="flex-1 py-4 px-2">

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
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
