<script setup lang="ts">
definePageMeta({
  layout: 'shop'
})

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
<div>
  <Searchbar class="border border-gray-400 block" v-model="inputValue" />
  <h2>Shop here!!!</h2>
<!-- v-for to render list    -->
  <div class="flex flex-row flex-wrap gap-2 px-4">
    <card v-for="product in filteredProducts" :key="product.name" :product="product" />
  </div>
  <client-only >
    <Cart />
  </client-only>
</div>
</template>
