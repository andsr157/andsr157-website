<script setup lang="ts">
import gsap from "gsap"
const props = withDefaults(
  defineProps<{
    title: string
    desc: string
    bgColor?: string
    number?: string
    text?: string
    videoUrl?: string
  }>(),
  {
    bgColor: "#1b1b1b",
  }
)
</script>

<template>
  <div
    class="services-card p-6 md:p-8 lg:p-10 xl:p-12 w-full rounded-[32px] md:rounded-[40px] lg:rounded-[48px] font-NeueHaas"
    :style="`background-color:${bgColor}`"
  >
    <div class="flex flex-col lg:flex-row mb-6 gap-6 lg:gap-x-16 xl:gap-x-24">
      <div
        class="rounded-full w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 overflow-hidden bg-white shrink-0 mx-auto lg:mx-0"
      >
        <video
          autoplay
          loop
          muted
          playsinline
          width="100%"
          height="100%"
          style="width: 100%; height: 100%; object-fit: cover"
        >
          <source :src="videoUrl" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="flex items-center">
        <h3
          class="text-sm md:text-xl lg:text-2xl xl:text-3xl text-justify"
          :class="`${text === 'dark' ? 'text-black' : ''}`"
        >
          {{ desc }}
        </h3>
      </div>
    </div>
    <div class="flex justify-between items-end gap-4">
      <h2
        class="text-[clamp(1.75rem,5vw,5.625rem)] leading-none"
        :class="`${text === 'dark' ? 'text-black' : ''} `"
      >
        {{ title }}
      </h2>
      <h2
        class="text-[clamp(1.75rem,5vw,5.625rem)] leading-none text-[#6d6d6d]"
        :class="`${text === 'white' ? 'text-[#f9fdfe]' : ''}`"
      >
        {{ number }}
      </h2>
    </div>
  </div>
</template>
