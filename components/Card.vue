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
  availability: {
    state: 'in-stock' | 'pending' | 'out-of-stock',
    'items-left'?: number 
  }
}

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})
console.log(props.product.images)
const availStyle = {
  'in-stock': 'text-green-500',
  'out-of-stock': 'text-red-600',
  'pending': 'text-amber-600',
}
/* 
:class="product.availability.state === 'in-stock'
      ? 'border-green-500'
      : 'border-red-600'"
*/
</script>

<template>
    <NuxtLink :to="`/product/${product.name}`" class="w-2/5">
  <article class="bg-stone-50 rounded p-3 w-full border-2 border-stone-600"
    >
    <img :src="product.images?.main" class="mx-auto" height="150" width="150"/>
    <h3 class="font-bold text-xl">{{ product.name }}</h3>
    <small class="block">{{ product.price }}€</small>
    <small
      class="font-medium"
      :class="product && availStyle[product.availability.state]"
    >
      {{product.availability.state}}
    </small>
  </article>
    </NuxtLink>
</template>