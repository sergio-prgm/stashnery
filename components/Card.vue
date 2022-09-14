<script setup lang="ts">
import { PropType } from 'vue';

interface Product {
  name: string
  price: number
  description: string
  image: string
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

const availStyle = {
  'in-stock': 'text-green-500',
  'out-of-stock': 'text-red-600',
  'pending': 'text-amber-600',
}

</script>

<template>
  <article class="bg-stone-300 rounded p-3 w-2/5">
    <h3 class="font-bold text-xl">{{ product.name }}</h3>
    <p>{{ product.description}}</p>
    <small
      class="font-medium"
      :class="product && availStyle[product.availability.state]"
    >
      {{product.availability.state}}
    </small>
    <NuxtLink :to="`/product/${product.name}`">
      Go
    </NuxtLink>
    <button 
      v-if="!useStore().value.some(prod => prod.name === product.name)"
      class="block font-bold "
      @click="() => {
        addProduct({ name: product.name, price: product.price, quantity: 1})
      }"
    >
      Add to cart
    </button>
  </article>
</template>