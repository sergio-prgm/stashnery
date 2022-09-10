<script setup lang="ts">
definePageMeta({
  layout: 'shop'
})

// transform ~= map 
// pick ~= select (only for single objects)
const d = await useFetch('/api/hello', { 
  transform: 
    (data) => data.map(prod => ({...prod}))
  })
console.log(d.data.value)

const data = d.data.value
</script>

<template>
  <h2>Shop here!!!</h2>
<!-- v-for to render list    -->
  <div class="flex flex-row flex-wrap gap-2 px-4">
    <card v-for="product in data" :key="product.name" :product="product" />
  </div>
</template>
