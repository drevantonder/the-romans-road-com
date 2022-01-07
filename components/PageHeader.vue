<script setup lang="ts">
interface Props {
  number: string
  title: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="flex flex-col items-center justify-center text-center font-semibold py-4 space-y-3"
  >
    <span class="text-3xl text-gray-700">{{ number }}</span>
    <h1 class="text-4xl text-gray-800">{{ title }}</h1>
  </div>
</template>
