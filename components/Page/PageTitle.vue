<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <Title>{{ title }} | The Romans Road</Title>
</template>
