<script setup lang="ts">
import gsap from "gsap"
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core"
const breakpoints = useBreakpoints(breakpointsTailwind)

const larger = breakpoints.greaterOrEqual("xl")
</script>

<template>
  <section
    class="font-NeueHaas mt-16 lg:mt-96 px-3 lg:ps-10 lg:pe-0 overflow-hidden"
  >
    <div class="mb-8 lg:px-10">
      <h1 class="text-center text-6xl lg:text-[192px] font-medium">SERVICES</h1>
    </div>
    <div class="wrapper">
      <div class="lg:grid grid-cols-2 service">
        <div class="flex flex-row lg:flex-col justify-between mb-4 lg:mb-0">
          <h2 class="text-2xl lg:text-6xl">
            Pengembangan <br />
            Web Frontend
          </h2>
          <div class="mb-16">
            <Icon
              name="material-symbols:subdirectory-arrow-right"
              :size="`${larger === true ? '6em' : '4em'}`"
            />
          </div>
        </div>
        <div
          class="flex flex-col lg:flex-row lg:w-[3000px] gap-x-10 gap-y-6 lg:gap-y-0"
        >
          <div>
            <ServicesCard
              title="Desain UI/UX"
              desc="Rancang antarmuka pengguna yang menarik dan intuitif untuk memastikan 
              pengalaman pengguna yang optimal."
              number="01"
              video-url="/service1.mp4"
            />
          </div>
          <div>
            <ServicesCard
              title="Pengembangan "
              desc="Kembangkan situs web yang responsif dan fungsional dengan menggunakan teknologi terbaru."
              number="02"
              bg-color="#f9fdfe"
              text="dark"
              video-url="/service2.mp4"
            />
          </div>
          <div class="lg:pe-10">
            <ServicesCard
              title="Optimisasi"
              class="!font-medium"
              desc="Optimalkan performa dan SEO situs web untuk waktu muat yang cepat dan pengalaman pengguna yang lancar."
              number="03"
              bg-color="#b5ede5"
              text="white"
              video-url="/service3.mp4"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
