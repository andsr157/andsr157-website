<script setup lang="ts">
useHeroAnimation()
useServicesAnimation()
useProgressBar()
</script>

<template>
  <div class="container-site">
    <slot />
  </div>

  <footer class="sticky w-full bottom-5 z-50">
    <div class="container-site relative">
      <a href="#main-layer" aria-label="Scroll to top">
        <div
          class="hover:transform hover:scale-110 hover:transition-transform hover:duration-150 w-12 h-12 rounded-full flex justify-start items-center right-4 md:right-10 bg-white absolute bottom-28 text-black"
        >
          <Icon name="bxs:up-arrow" size="26" class="max-w-max mx-auto" />
        </div>
      </a>
      <ProgressBar />
    </div>
  </footer>
</template>
