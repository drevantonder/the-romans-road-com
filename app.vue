<script setup lang="ts">
import '@fontsource/roboto-slab/400.css'
import '@fontsource/roboto-slab/500.css'
import '@fontsource/roboto-slab/600.css'
import '@fontsource/roboto-slab/700.css'

const triggerContinue = useTriggerContinue()
</script>

<template>
  <Body class="font-serif" />
  <div @click="triggerContinue">
    <NuxtPage />
  </div>
</template>
