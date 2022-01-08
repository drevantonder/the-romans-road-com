<script setup lang="ts">
import { useSwipe, SwipeDirection } from '@vueuse/core'

import '@fontsource/roboto-slab/400.css'
import '@fontsource/roboto-slab/500.css'
import '@fontsource/roboto-slab/600.css'
import '@fontsource/roboto-slab/700.css'

const router = useRouter()
const pageConfig = usePageConfig()

const swipe = ref(null)
const { isSwiping, direction } = useSwipe(swipe, {
  threshold: 200,
})

const nextPage = () => {
  pageConfig.value.nextPage && router.push(pageConfig.value.nextPage)
}

const previousPage = () => {
  pageConfig.value.previousPage && router.push(pageConfig.value.previousPage)
}

watch(isSwiping, () => {
  if (isSwiping && direction.value === SwipeDirection.LEFT) {
    nextPage()
  } else if (isSwiping && direction.value === SwipeDirection.RIGHT) {
    previousPage()
  }
})
</script>

<template>
  <Body class="font-serif" />
  <div @click="nextPage" @contextmenu.prevent="previousPage" ref="swipe">
    <NuxtPage />
  </div>
</template>
