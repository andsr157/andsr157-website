<script setup lang="ts">
import gsap from 'gsap'

const { projects, loadMore, hasMore } = useProjects()

useProjectImageAnimation()

const tween = ref<gsap.core.Tween | null>(null)
const underline = ref<gsap.core.Tween[]>([])

onMounted(async () => {
  await nextTick()

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
    }
  },
)

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
  <section class="pt-[var(--section-py)] project w-full">
    <div class="mb-8">
      <h1 class="text-center text-display font-medium">PROJECTS</h1>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 md:gap-8 lg:gap-12">
      <CardProject
        v-for="(data, index) in projects"
        :key="index"
        class="w-full"
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
        class="w-full min-h-[280px] sm:min-h-[350px] md:min-h-[400px] text-lg md:text-xl border border-white border-opacity-20 rounded-[24px] md:rounded-[32px] lg:rounded-[50px] cursor-pointer"
        @click="onLoadMore()"
        @mouseenter="playTween()"
        @mouseleave="reverseTween()"
      >
        <div
          class="flex flex-col h-[280px] sm:h-[350px] md:h-[400px] items-center justify-center pt-5 pb-9"
        >
          <div class="relative text-[5em] xl:text-[10em]">
            <Icon
              name="mdi-light:plus"
              size="1em"
              class="add !max-w-max !max-h-max"
            />
          </div>
          <h4>More Project</h4>
        </div>
      </div>
    </div>
  </section>
</template>
