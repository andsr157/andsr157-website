<script setup lang="ts">
const currentTime = ref(getCurrentTime())

function getCurrentTime() {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, "0")
  const minutes = now.getMinutes().toString().padStart(2, "0")
  return `${hours}:${minutes}`
}

onMounted(() => {
  setInterval(() => {
    currentTime.value = getCurrentTime()
  }, 1000)
})
</script>

<template>
  <div class="w-full">
    <div class="flex items-center justify-between py-4 md:py-6 lg:py-8 text-sm md:text-base">
      <div class="font-NeueHaas">Andsr157</div>
      <div class="font-NeueHaas absolute left-1/2 -translate-x-1/2">{{ currentTime }}</div>
      <div class="hidden md:flex items-center gap-1">
        <div class="font-NeueHaas">Say hi</div>
        <div><Icon name="system-uicons:minus" size="2em" /></div>
        <div class="font-NeueHaas text-[#6d6d6d]">
          andikasatrio159@gmail.com
        </div>
      </div>
    </div>
  </div>
</template>
