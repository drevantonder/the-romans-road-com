<script setup lang="ts">
interface Props {
  reference: string
}

defineProps<Props>()
</script>

<template>
  <div class="text-center">
    <p class="text-3xl font-medium text-gray-900 leading-snug">
      <span
        class="before:content-['“'] before:text-primary-600 after:content-['”'] after:text-primary-600"
      >
        <slot />
      </span>
    </p>

    <p class="mt-4 text-2xl text-gray-800">— {{ reference }}</p>
  </div>
</template>
