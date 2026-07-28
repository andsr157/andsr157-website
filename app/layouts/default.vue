<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const larger = breakpoints.greaterOrEqual('xl')

useHeroAnimation(larger)
useServicesAnimation()
useProjectImageAnimation()
useProgressBar()
</script>

<template>
  <div class="max-w-[1440px] mx-auto">
    <slot />
  </div>

  <footer class="sticky w-full bottom-5 z-50">
    <div class="max-w-[1440px] mx-auto relative">
      <a href="#main-layer">
        <div
          class="hover:transform hover:scale-110 hover:transition-transform hover:duration-150 w-12 h-12 rounded-full flex justify-start items-center right-10 bg-white absolute bottom-28 text-black"
        >
          <Icon name="bxs:up-arrow" size="26" class="max-w-max mx-auto" />
        </div>
      </a>
      <ProgressBar />
    </div>
  </footer>
</template>
