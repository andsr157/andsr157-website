<script setup lang="ts">
const props = defineProps<{
  index: number
  url: string
  image: string
  name: string
  year: string
}>()

const imageContainer = ref<HTMLElement | null>(null)
const numSquares = ref<number>(0)
const squareSideLength = ref<number>(0)

onMounted(async () => {
  await nextTick()
  if (!imageContainer.value) return

  const imageContainerWidth = imageContainer.value.offsetWidth
  const imageContainerHeight = imageContainer.value.offsetHeight
  squareSideLength.value = Math.min(imageContainerWidth, imageContainerHeight) / 8

  const numSquaresWidth = Math.floor(imageContainerWidth / squareSideLength.value)
  const numSquaresHeight = Math.floor(imageContainerHeight / squareSideLength.value)
  numSquares.value = numSquaresHeight * numSquaresWidth
})
</script>

<template>
  <div class="w-full mb-10">
    <a :href="props.url">
      <div class="rounded-xl md:rounded-[50px] overflow-hidden relative">
        <div ref="imageContainer" class="imageContainer relative z-30 bg-white">
          <img
            :src="props.image"
            :alt="props.name"
            class="project-image w-full -mt-3 h-[250px] md:h-[400px] lg:h-[400px] object-cover"
          />
          <div
            class="w-full h-full absolute z-50 top-0 flex flex-wrap items-stretch"
          >
            <div
              v-for="i in numSquares"
              :key="i"
              class="bg-black w-[calc(100%/8)] h-[calc(100%/8)] opacity-0 hover:opacity-100 transition-all duration-500 ease-in delay-200 hover:transition-none"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-between text-xl mt-6">
        <a :href="props.url">
          {{ props.name }}
          <div class="w-0 h-[2px] bg-white" :class="`line-` + props.index" />
        </a>
        <h4>{{ props.year }}</h4>
      </div>
    </a>
  </div>
</template>
