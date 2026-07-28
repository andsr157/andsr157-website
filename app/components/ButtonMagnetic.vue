<script setup lang="ts">
import gsap from "gsap";

const props = defineProps<{
  title: string;
  selected?: boolean;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const magnetic = (e: any): void => {
  console.log(e);
  let x = e.clientX;
  let y = e.clientY;

  let btn = e.target;

  if (btn) {
    let btnRect = btn.getBoundingClientRect();
    let btnCenterX = btnRect.left + btnRect.width / 2;
    let btnCenterY = btnRect.top + btnRect.height / 2;

    let moveX = (x - btnCenterX) / 4;
    let moveY = (y - btnCenterY) / 4;

    gsap.to(btn, {
      x: moveX,
      y: moveY,
      duration: 1,
    });
  }
};

const releaseMagnetic = (e: any): void => {
  let btn = e.target;
  if (btn) {
    gsap.to(btn, {
      x: "",
      y: "",
      duration: 1,
    });
  }
};
</script>

<template>
  <div class="button-box" @mousemove="magnetic" @mouseout="releaseMagnetic">
    <button
      type="button"
      class="btn min-w-28 border rounded-full p-4 lg:py-4 lg:px-10 text-xs lg:text-base transition-colors duration-300"
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
