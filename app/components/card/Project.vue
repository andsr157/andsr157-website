<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

const props = defineProps<{
  index: number;
  url: string;
  image: string;
  name: string;
  year: string;
}>();

const imageContainer = ref<HTMLElement | null>(null);
const numSquares = ref<number>(0);
const squareSideLength = ref<number>(0);

const { width: windowWidth } = useWindowSize();

const gridDivisor = computed(() => {
  if (windowWidth.value < 640) return 5;
  if (windowWidth.value < 1024) return 6;
  return 8;
});

const recalcSquares = () => {
  if (!imageContainer.value) return;

  const imageContainerWidth = imageContainer.value.offsetWidth;
  const imageContainerHeight = imageContainer.value.offsetHeight;
  const divisor = gridDivisor.value;
  squareSideLength.value =
    Math.min(imageContainerWidth, imageContainerHeight) / divisor;

  const numSquaresWidth = Math.floor(
    imageContainerWidth / squareSideLength.value,
  );
  const numSquaresHeight = Math.floor(
    imageContainerHeight / squareSideLength.value,
  );
  numSquares.value = numSquaresHeight * numSquaresWidth;
};

onMounted(async () => {
  await nextTick();
  recalcSquares();
});

watch(gridDivisor, () => {
  recalcSquares();
});
</script>

<template>
  <div class="w-full mb-6 md:mb-8">
    <a :href="props.url" target="_blank">
      <div
        class="rounded-xl md:rounded-[32px] lg:rounded-[50px] overflow-hidden relative"
      >
        <div ref="imageContainer" class="imageContainer relative z-30 bg-white">
          <img
            :src="props.image"
            :alt="props.name"
            class="project-image w-full -mt-3 h-[220px] sm:h-[300px] md:h-[400px] object-cover"
          />
          <div
            class="w-full h-full absolute z-50 top-0 flex flex-wrap items-stretch"
          >
            <div
              v-for="i in numSquares"
              :key="i"
              class="bg-black opacity-0 hover:opacity-100 transition-all duration-500 ease-in delay-200 hover:transition-none"
              :style="{
                width: `calc(100% / ${gridDivisor})`,
                height: `calc(100% / ${gridDivisor})`,
              }"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-between text-lg md:text-xl mt-4 md:mt-6">
        <a :href="props.url">
          {{ props.name }}
          <div class="w-0 h-[2px] bg-white" :class="`line-` + props.index" />
        </a>
        <h4>{{ props.year }}</h4>
      </div>
    </a>
  </div>
</template>
