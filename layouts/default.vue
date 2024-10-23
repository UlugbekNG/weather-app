<script setup lang="js">

</script>

<template>
<!--  <div class="flex h-screen bg-gradient-to-r from-sky-500 to-sky-600 [background:linear-gradient(90deg,var(&#45;&#45;tw-gradient-stops))]">-->
  <div class="flex h-screen main-layout">
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

<style scoped>
.main-layout {
  background-image: url("https://images.unsplash.com/photo-1622030797403-fa221ce5d208?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-blend-mode: overlay;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);

}
</style>
