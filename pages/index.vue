<script setup lang="ts">
const nextPage = `/1-the-human-problem`

const router = useRouter()

onContinue(() => router.push(nextPage))
</script>

<template>
  <div>
    <Title>The Romans Road</Title>
    <h1 class="text-8xl text-center font-bold text-gray-900">
      The Romans Road
    </h1>
    <p>Click to continue</p>
  </div>
</template>
