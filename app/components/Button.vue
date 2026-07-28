<script setup lang="ts">
import gsap from "gsap"
defineProps<{
  title?: string
  customClass?: string
}>()

let tl: gsap.core.Timeline | null = null

const button_in = (event: any) => {
  const buttonWhite = event.currentTarget?.querySelector(".button__white")
  const buttonDark = event.currentTarget?.querySelector(".button__dark")
  if (buttonWhite && buttonDark) {
    tl = gsap.timeline() // Membuat timeline baru
    tl.to(
      buttonWhite,
      {
        bottom: 0,
        duration: 0.3,
        ease: "power3.out",
        borderRadius: "0%",
      },
      "<"
    )
    tl.to(
      buttonDark,
      {
        top: -60,
        duration: 0.3,
        ease: "power3.out",
      },
      "<"
    )
  }
}

const button_out = (event: MouseEvent) => {
  if (tl) {
    tl.reverse() // Menggunakan metode reverse() untuk memutar mundur animasi
  }
}
</script>

<template>
  <button
    @mouseenter="button_in"
    @mouseleave="button_out"
    class="w-full h-14 text-center border-[1px] border-white rounded-xl relative text-xs lg:text-base overflow-hidden"
    :class="customClass"
  >
    <div
      class="flex items-center justify-center absolute w-full h-full p-5 top-0 button__dark"
    >
      {{ title }}
    </div>
    <div
      class="flex items-center justify-center absolute w-full h-full bg-[#f9fdfe] text-black p-5 -bottom-14 button__white rounded-tl-full rounded-tr-full"
    >
      {{ title }}
    </div>
  </button>
</template>
