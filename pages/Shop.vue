<script setup lang="ts">
definePageMeta({
  layout: 'shop'
})
// TODO transition individual items with <transition>
// [ ] Provide direct links for searching within a field (e.g. Journals, Cases...)
// transform ~= map 
// pick ~= select (only for single objects)
const d = await useFetch('/api/product', { 
  transform: 
    (data) => data.map(prod => ({...prod}))
  })

const data = d.data.value
// -----------------------------------

const inputValue = ref('')

// When fetch vvv this works like useEffect (kind of)
// watch(inputValue, async (value) => {
//   console.log(value)
// })

const filteredProducts = computed(() => {
  // return data.filter(product => product.name.toLowerCase()
  //   .includes(inputValue.value.toLowerCase()))
  return data.filter(({name, description}) => JSON.stringify({name, description}).toLowerCase()
    .includes(inputValue.value.toLowerCase()))
})
</script>

<template>
<div class="">
  <Searchbar class="border relative border-gray-400 block w-full px-2 py-1 font-bodoni focus:outline-none focus:ring-1 focus:border-green-300 ring-green-300" v-model="inputValue" />
<!-- v-for to render list    -->
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 mx-auto gap-3 sm:gap-4 py-6">
    <card v-for="product in filteredProducts" :key="product.name" :product="product" />
  </div>
</div>
</template>
