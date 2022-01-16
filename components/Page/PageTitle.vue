<script setup lang="ts">
interface Props {
  section: string
  title: string
}

defineProps<Props>()
</script>

<template>
  <Title>{{ section }}. {{ title }} | The Romans Road</Title>
  <div
    class="flex flex-col items-center justify-center text-center font-semibold py-4 space-y-3"
  >
    <span class="text-3xl text-gray-700">{{ section }}</span>
    <h1 class="text-4xl text-gray-800">{{ title }}</h1>
  </div>
</template>
