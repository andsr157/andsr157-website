<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    statusMessage: string
    message: string
  }
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <h1 class="text-6xl lg:text-9xl font-medium mb-4">{{ props.error.statusCode }}</h1>
    <p class="text-xl lg:text-2xl mb-8 text-[#6d6d6d]">
      {{ props.error.statusMessage || props.error.message || 'Something went wrong' }}
    </p>
    <button
      class="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition-colors"
      @click="handleError"
    >
      Back home
    </button>
  </div>
</template>
