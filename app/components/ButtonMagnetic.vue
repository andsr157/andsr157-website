<script setup lang="ts">
import gsap from "gsap";
import { useMediaQuery } from "@vueuse/core";

const props = defineProps<{
  title: string;
  selected?: boolean;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const isPointerFine = useMediaQuery("(hover: hover) and (pointer: fine)");

const magnetic = (e: any): void => {
  if (!isPointerFine.value) return;

  const btn = e.target;
  if (!btn) return;

  const btnRect = btn.getBoundingClientRect();
  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  const moveX = (e.clientX - btnCenterX) / 4;
  const moveY = (e.clientY - btnCenterY) / 4;

  gsap.to(btn, {
    x: moveX,
    y: moveY,
    duration: 1,
  });
};

const releaseMagnetic = (e: any): void => {
  const btn = e.target;
  if (!btn) return;

  gsap.to(btn, {
    x: 0,
    y: 0,
    duration: 1,
  });
};
</script>

<template>
  <div class="button-box" @mousemove="magnetic" @mouseout="releaseMagnetic">
    <button
      type="button"
      class="btn min-w-28 border rounded-full px-4 py-2.5 md:px-6 md:py-3 lg:px-10 lg:py-4 text-xs md:text-sm lg:text-base transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      :class="
        props.selected
          ? 'border-white bg-white text-black'
          : 'border-white border-opacity-20 bg-transparent'
      "
      @click="emit('click')"
    >
      {{ props.title }}
    </button>
  </div>
</template>
