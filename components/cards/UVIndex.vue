<script setup lang="ts">

</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center gap-2">
        <NuxtImg
            class="w-7 h-7"
            src="/weather/uv-index.svg"
            alt="UV Index"
        />
        <p class="text-gray-500 text-sm">
          Индекс УФ
        </p>
      </div>
    </template>
    <div class="flex items-center justify-center">
      <p class="text-4xl font-bold text-gray-800">
        {{ 3 }}
      </p>
    </div>
  </UCard>
</template>

<style scoped>

</style>
