<script setup lang="ts">
import { gsap } from "gsap"
import { ref } from "vue"

interface Props {
  label: string
  to?: string
  withArrow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  withArrow: false,
})

const SPACE_ENTITY = "&#32;"

const hiddenChars = props.label.split("")
const visibleChars = props.label.split("")

const hiddenWaveContainer = ref<HTMLElement | null>(null)
const visibleWaveContainer = ref<HTMLElement | null>(null)

let tlHidden: gsap.core.Timeline | null = null
let tlVisible: gsap.core.Timeline | null = null
let tlArrow: gsap.core.Timeline | null = null

let hiddenCharsElements: HTMLElement[] | null = null
let visibleCharsElements: HTMLElement[] | null = null
let arrowElement: HTMLElement | null = null

const startAnimation = (event: MouseEvent) => {
  const container = event.currentTarget as HTMLElement
  if (!hiddenWaveContainer.value || !visibleWaveContainer.value || !container)
    return

  const hiddenContainer = hiddenWaveContainer.value
  const visibleContainer = visibleWaveContainer.value

  if (!hiddenCharsElements || !visibleCharsElements || !arrowElement) {
    hiddenCharsElements = Array.from(hiddenContainer.querySelectorAll(".char"))
    visibleCharsElements = Array.from(
      visibleContainer.querySelectorAll(".char")
    )
    arrowElement = container.querySelector(".arrow-icon")
  }

  tlHidden = gsap.timeline()
  tlVisible = gsap.timeline()
  tlArrow = gsap.timeline()

  tlHidden.to(hiddenCharsElements, {
    y: -10,
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
  })

  tlVisible.to(visibleCharsElements, {
    y: -24,
    opacity: 1,
    duration: 0.4,
    stagger: 0.1,
  })

  tlArrow.to(arrowElement, {
    rotation: "90",
    duration: 0.4,
  })
}

const reverseAnimation = () => {
  if (tlHidden && tlVisible && tlArrow) {
    gsap.to(hiddenCharsElements, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1,
    })

    gsap.to(visibleCharsElements, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.1,
    })

    // Memutar panah kembali ke posisi awal
    tlArrow.to(arrowElement, {
      rotation: "0",
      duration: 0.4,
    })
  }
}
</script>

<template>
  <a :href="props.to">
    <div
      class="flex"
      @mouseenter="startAnimation"
      @mouseleave="reverseAnimation"
    >
      <div class="h-6 overflow-hidden">
        <div class="flex gap-[1px]" ref="hiddenWaveContainer">
          <p
            v-for="(char, index) in hiddenChars"
            :key="'hidden-' + index"
            class="char"
            style="white-space: pre-wrap"
          >
            {{ char }}
          </p>
        </div>
        <div class="flex gap-[1px]" ref="visibleWaveContainer">
          <p
            v-for="(char, index) in visibleChars"
            :key="'visible-' + index"
            class="char"
            style="white-space: pre-wrap"
          >
            {{ char }}
          </p>
        </div>
      </div>
      <div v-if="props.withArrow">
        <!-- Tambahkan class untuk elemen ikon -->
        <Icon name="uit:arrow-up-right" size="1.5em" class="arrow-icon" />
      </div>
    </div>
  </a>
</template>
