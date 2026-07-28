<script setup lang="ts">
const show = reactive({
  webiste: false,
  landing: false,
  other: false,
});

const toggleShow = (key: "webiste" | "landing" | "other") => {
  show[key] = !show[key];
};
</script>

<template>
  <section
    class="px-3 lg:px-10 py-56 lg:py-80 flex flex-col gap-y-6 max-w-[1600px] mx-auto"
  >
    <div
      class="text-5xl lg:text-[160px] relative flex flex-col items-center h-full text-[#f9fdfe] lg:text-[#1b1b1b]"
    >
      <div>
        <a
          @click="toggleShow('webiste')"
          @mouseenter="show.webiste = true"
          @mouseleave="show.webiste = false"
          class="relative z-10 cursor-pointer hover:text-[#f9fdfe] !transition-colors !duration-300"
          >WEBSITE</a
        >
        <Transition name="fade">
          <div v-show="show.webiste">
            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 z-20 top-4 -left-4 lg:top-12 lg:left-[16vw]"
            >
              <NuxtImg
                src="/projects/img1.png"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 -top-6 right-12 lg:-top-28 lg:right-[500px]"
            >
              <NuxtImg
                src="/projects/img2.png"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 z-20 top-10 -right-4 lg:top-28 lg:right-72"
            >
              <NuxtImg
                src="/projects/img3.png"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 top-20 left-8 lg:top-auto lg:bottom-72 lg:right-1/2 lg:left-auto"
            >
              <NuxtImg
                src="/projects/img5.png"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 top-24 right-4 lg:top-auto lg:bottom-28 lg:left-72 lg:right-auto"
            >
              <NuxtImg
                src="/projects/img6.png"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 top-36 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:top-auto lg:bottom-20 lg:right-96 lg:left-auto"
            >
              <NuxtImg
                src="/projects/img9.png"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </Transition>
      </div>

      <div>
        <a
          @click="toggleShow('landing')"
          @mouseenter="show.landing = true"
          @mouseleave="show.landing = false"
          class="relative z-10 cursor-pointer hover:text-[#f9fdfe]"
          >LANDING</a
        >
        <Transition name="fade">
          <div v-show="show.landing">
            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 top-4 -left-4 lg:top-[45%] lg:left-72"
            >
              <NuxtImg
                src="/projects/img4.png"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 -top-6 right-8 lg:-top-10 lg:left-[450px] lg:right-auto"
            >
              <NuxtImg
                src="/projects/img11.png"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 z-20 top-10 -right-4 lg:top-64 lg:right-80 lg:left-auto"
            >
              <NuxtImg
                src="/projects/img8.png"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 top-20 right-8 lg:top-auto lg:bottom-80 lg:right-96 lg:left-auto"
            >
              <NuxtImg
                src="/projects/img7.png"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 top-28 left-4 lg:top-auto lg:bottom-11 lg:left-[40%] lg:right-auto"
            >
              <NuxtImg
                src="/projects/img10.png"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </Transition>
      </div>

      <div>
        <a
          @click="toggleShow('other')"
          @mouseenter="show.other = true"
          @mouseleave="show.other = false"
          class="relative z-10 cursor-pointer hover:text-[#f9fdfe]"
          >OTHER</a
        >
        <Transition name="fade">
          <div v-show="show.other">
            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 top-4 -left-4 lg:top-[70%] lg:left-64"
            >
              <NuxtImg
                format="webp"
                quality="60"
                src="/projects/img12.png"
                class="w-full h-full object-cover"
              />
            </div>

            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 -top-6 right-8 lg:translate-x-0 lg:top-[50%] lg:left-[40vw]"
            >
              <NuxtImg
                format="webp"
                quality="60"
                src="/projects/img13.png"
                class="w-full h-full object-cover"
              />
            </div>

            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 top-10 -right-4 lg:translate-x-0 lg:top-[80%] lg:left-[50vw] lg:right-auto"
            >
              <NuxtImg
                format="webp"
                quality="60"
                src="/projects/img14.png"
                class="w-full h-full object-cover"
              />
            </div>

            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 top-20 right-4 lg:top-auto lg:bottom-80 lg:right-[400px]"
            >
              <NuxtImg
                format="webp"
                quality="60"
                src="/projects/img16.png"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute w-16 h-12 lg:w-40 lg:h-28 top-28 left-4 lg:top-auto lg:bottom-72 lg:right-[60vw] lg:left-auto"
            >
              <NuxtImg
                format="webp"
                quality="60"
                src="/projects/img15.png"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
