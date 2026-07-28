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
  <div class="max-w-[1600px] mx-auto">
    <div class="grid xl:grid-cols-3 py-6 lg:py-8 px-10 text-base items-center">
      <div class="text-left font-NeueHaas hidden lg:block">Andsr157</div>
      <div class="text-center font-NeueHaas">{{ currentTime }}</div>
      <div class="lg:flex justify-end gap-1 items-center hidden">
        <div class="text-left font-NeueHaas">Say hi</div>
        <div><Icon name="system-uicons:minus" size="2em" /></div>
        <div class="text-left font-NeueHaas text-[#6d6d6d]">
          andikasatrio159@gmail.com
        </div>
      </div>
    </div>
  </div>
</template>
