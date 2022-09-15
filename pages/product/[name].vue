<script lang="ts" setup>
const route = useRoute()

const name = ref(route.params.name)

const { data: product } = await useFetch(`/api/product/${name.value}`, {
  key: name.value.toString()
})

const quantity = ref(1)

const colorTranslation = {
  "K": "bg-black hover:bg-gray-900",
  "N": "bg-slate-800 hover:bg-slate-700",
  "G": "bg-neutral-600 hover:bg-neutral-400",
  "W": "bg-gray-50 hover:bg-white"
}

const absImgPos = ref(0)
const imgArr = Object.keys(product.value.images)
const imgPos = computed(() => absImgPos.value % (imgArr.length))

</script>

<template>
<div>
<h1 class="">{{ product.name}}</h1>
<p>{{ product.description }}</p>
<div
    v-if="!useStore().value.some(prod => prod.name === product.name)"
 >
  <div class="flex justify-between w-20 items-baseline">
    <button @click="quantity > 1 && quantity--" class="font-black text-xl">-</button>
    <span>{{ quantity }}</span>
    <button @click="quantity++" class="font-black text-xl">+</button>
  </div>
  <button 
    class="block font-bold "
    @click="() => {
      addProduct({ name: product.name, price: product.price, quantity: quantity })
    }"
  >
    Add to cart
  </button>
  </div>
  <p v-else >Already added to cart. Visit <Cart /> to make changes</p>
<ul class="flex gap-2">
  <li v-for="color in product.variations.color" 
    :class="colorTranslation[color as keyof typeof colorTranslation]"
    class="flex items-center justify-center rounded-full font-bold text-gray-100"
    style="height: 40px; width: 40px; font-size: 16px;"
    >
    {{ color }}</li>
</ul>
<img :src="product.images[imgArr[imgPos] as keyof object]" />
<div class="flex justify-between">
  <button @click="absImgPos--" class="font-black text-xl">&lt;</button>
  <span>{{ imgPos }}</span>
  <button @click="absImgPos++" class="font-black text-xl">></button>
</div>
</div>
</template>