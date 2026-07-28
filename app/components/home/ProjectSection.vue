<script setup lang="ts">
import gsap from 'gsap'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const larger = breakpoints.greaterOrEqual('xl')

const { projects, loadMore, hasMore } = useProjects()

const tween = ref<gsap.core.Tween | null>(null)
const underline = ref<gsap.core.Tween[]>([])

const numSquares = ref<number>(0)
const squareSideLength = ref<number>(0)

onMounted(async () => {
  await nextTick()
  setupImageSquares()

  tween.value = gsap.to('.add', {
    rotate: 360,
    duration: 1,
    ease: 'power2.inOut',
    transformOrigin: 'center center',
    paused: true,
  })
})

watch(
  () => projects.value.length,
  async (newLength, oldLength) => {
    if (newLength > oldLength) {
      await nextTick()
      animateNewProjects(oldLength, newLength)
      updateUnderlines()
      setupImageSquares()
    }
  },
)

const setupImageSquares = () => {
  const imageContainer = document.querySelector('.imageContainer') as HTMLElement | null
  if (!imageContainer) return

  const imageContainerWidth = imageContainer.offsetWidth
  const imageContainerHeight = imageContainer.offsetHeight
  squareSideLength.value = Math.min(imageContainerWidth, imageContainerHeight) / 8

  const numSquaresWidth = Math.floor(imageContainerWidth / squareSideLength.value)
  const numSquaresHeight = Math.floor(imageContainerHeight / squareSideLength.value)
  numSquares.value = numSquaresHeight * numSquaresWidth
}

const updateUnderlines = () => {
  underline.value = projects.value.map((_, index) => {
    return gsap.to(`.line-${index}`, {
      width: '100%',
      duration: 0.5,
      ease: 'power2.out',
      paused: true,
    })
  })
}

const animateNewProjects = (start: number, end: number) => {
  projects.value.slice(start, end).forEach((_, index) => {
    const elementIndex = start + index
    const element = document.querySelector(`.project-${elementIndex}`) as HTMLElement | null
    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      )
    }
  })
}

const onLoadMore = async () => {
  await loadMore()
}

const playUnderline = (index: number) => {
  underline.value[index]?.play()
}

const reverseUnderline = (index: number) => {
  underline.value[index]?.reverse()
}

const playTween = () => {
  tween.value?.play()
}

const reverseTween = () => {
  tween.value?.reverse()
}
</script>

<template>
  <section class="mt-48 lg:px-10 project max-w-[1600px] mx-auto">
    <div class="mb-8">
      <h1 class="text-center text-6xl lg:text-[192px] font-medium">PROJECTS</h1>
    </div>
    <div class="lg:grid grid-cols-2 w-full gap-12 px-3">
      <CardProject
        v-for="(data, index) in projects"
        :key="index"
        class="w-full mb-10"
        :class="'project-' + index"
        :index="index"
        :name="data.name"
        :year="data.year"
        :url="data.projectUrl"
        :image="data.imageUrl"
        @mouseenter="playUnderline(index)"
        @mouseleave="reverseUnderline(index)"
      />

      <div
        v-if="hasMore"
        class="w-full lg:max-h-[430px] text-xl border border-white border-opacity-20 rounded-[50px]"
        @click="onLoadMore()"
        @mouseenter="playTween()"
        @mouseleave="reverseTween()"
      >
        <div
          class="flex flex-col h-[350px] md:h-[400px] lg:h-[400px] items-center justify-center pt-5 pb-9"
        >
          <div class="relative">
            <Icon
              name="mdi-light:plus"
              :size="`${larger === true ? '10em' : '6em'}`"
              class="add !max-w-max !max-h-max"
            />
          </div>
          <h4>More Project</h4>
        </div>
      </div>
    </div>
  </section>
</template>
