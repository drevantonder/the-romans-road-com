<script setup lang="ts">
import '@fontsource/roboto-slab/400.css'
import '@fontsource/roboto-slab/500.css'
import '@fontsource/roboto-slab/600.css'
import '@fontsource/roboto-slab/700.css'

const router = useRouter()
const pageConfig = usePageConfig()

const nextPage = () => {
  pageConfig.value.nextPage && router.push(pageConfig.value.nextPage)
}

const previousPage = () => {
  pageConfig.value.previousPage && router.push(pageConfig.value.previousPage)
}
</script>

<template>
  <Body class="font-serif" />
  <NuxtPage />
  <div class="fixed top-0 right-0 bottom-0 w-3/4" @click="nextPage"></div>
  <div class="fixed top-0 left-0 bottom-0 w-1/4" @click="previousPage"></div>
</template>
