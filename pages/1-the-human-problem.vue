<script setup>
const number = '1'
const title = 'The Human Problem'

setPageConfig({
  nextPage: `/1-the-human-problem`,
  previousPage: `/`,
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <PageTitle :title="`${number}. ${title}`" />
    <PageHeader :number="number" :title="title" />
    <div class="my-auto">
      <BibleVerse reference="Romans 3:23"
        >For all have sinned and fall short of the glory of God</BibleVerse
      >
    </div>
  </div>
</template>
