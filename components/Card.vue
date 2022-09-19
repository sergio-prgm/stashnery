<script setup lang="ts">
import { PropType } from 'vue';

interface Product {
  name: string
  price: number
  description: string
  images: {
    main?: string
    detail?: string
    extra?: string
  }
  items: Array<{code: string, amount: number}>
}

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})
const availStyle = {
  'in-stock': 'text-green-500',
  'out-of-stock': 'text-red-600',
  'pending': 'text-amber-600',
}

const availability = computed(() => { 
  const amounts = props.product.items.map(p => p.amount)
  const inStock = Math.max(...amounts)
  if (inStock > 0) {
    return 'in-stock'
  } else if (inStock === 0) {
    return 'out-of-stock'
  } else {return 'pending'}
})
/* 
:class="product.availability.state === 'in-stock'
      ? 'border-green-500'
      : 'border-red-600'"
*/
</script>

<template>
<NuxtLink :to="`/product/${product.name}`" class="w-full  border border-stone-400">
  <article class="font-['BodoniModa'] p-2 sm:p-3 w-full h-full"
    >
    <img :src="product.images?.main" class="mx-auto" height="200" width="200"/>
    <div class="mx-auto flex flex-col sm:flex-row justify-between mt-2">
      <h3 class="font-bold text-xl inline">{{ product.name }}</h3>
      <div class="flex justify-between flex-row sm:flex-col items-center">
        <small class="block leading-loose font-bodoni font-medium text-[16px]">{{ product.price }}€</small>
        <small
          class="font-bodoni font-medium leading-4 block"
          :class="product && availStyle[availability]"
        >
          {{availability}}
        </small>
      </div>
    </div>
  </article>
</NuxtLink>
</template>