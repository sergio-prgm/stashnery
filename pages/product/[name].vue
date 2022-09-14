<script lang="ts" setup>
const route = useRoute()

interface Product {
  name: string
  price: number
  description: string
  image: string
  availability: {
    state: 'in-stock' | 'pending' | 'out-of-stock',
    'items-left'?: number 
  }
  variations: {color: Array<string>, size: Array<string>}
  items: Array<{code: string, amount: number}>
}

const name = ref(route.params.name)

const { data: product } = await useFetch(`/api/product/${name.value}`, {
  key: name.value.toString()
})

console.log(product.value.name)

const colorTranslation = {
  "K": "bg-black hover:bg-gray-900",
  "N": "bg-slate-800 hover:bg-slate-700",
  "G": "bg-neutral-600 hover:bg-neutral-400",
  "W": "bg-gray-50 hover:bg-white"
}

</script>

<template>
<h1 class="">{{ product.name}}</h1>
<p>{{ product.description }}</p>
<ul class="flex gap-2">
  <li v-for="color in product.variations.color" 
    :class="colorTranslation[color as keyof typeof colorTranslation]"
    class="flex items-center justify-center rounded-full font-bold text-gray-100"
    style="height: 40px; width: 40px; font-size: 16px;"
    >
    {{ color }}</li>
</ul>
</template>