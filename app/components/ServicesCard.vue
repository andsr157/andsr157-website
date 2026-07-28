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
    class="p-6 lg:p-[50px] w-full lg:w-[1024px] rounded-[48px] font-NeueHaas"
    :style="`background-color:${bgColor}`"
  >
    <div class="lg:flex mb-6 gap-x-24">
      <div
        class="rounded-full w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] overflow-hidden bg-white lg:shrink-0 mx-auto lg:mx-0 mb-3 lg:mb-0"
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
      <div>
        <h3
          class="text-xs lg:text-3xl text-justify"
          :class="`${text === 'dark' ? 'text-black' : ''}`"
        >
          {{ desc }}
        </h3>
      </div>
    </div>
    <div class="flex justify-between">
      <h2
        class="text-[28px] lg:text-[90px]"
        :class="`${text === 'dark' ? 'text-black' : ''} `"
      >
        {{ title }}
      </h2>
      <h2
        class="text-[28px] lg:text-[90px] text-[#6d6d6d]"
        :class="`${text === 'white' ? 'text-[#f9fdfe]' : ''}`"
      >
        {{ number }}
      </h2>
    </div>
  </div>
</template>
