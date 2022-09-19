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
const imgPos = computed(() => Math.abs(absImgPos.value % (imgArr.length)))

</script>

<template>
<div>
<h1 class="text-2xl font-bold mb-4">{{ product.name}}</h1>
<p class="font-[Muli]">{{ product.description }}</p>
<!-- <div
    v-if="!useStore().value.some(prod => prod.name === product.name)"
    class="flex justify-between w-full gap-4 items-center mt-4"
 > -->
  <div
    class="flex justify-between w-full gap-4 items-center mt-4"
  >
  <div class="flex justify-between w-20 items-baseline">
    <button @click="quantity > 1 && quantity--" class="font-black font-mono text-xl">-</button>
    <span class="font-[Muli]">{{ quantity }}</span>
    <button @click="quantity++" class="font-black text-xl font-mono">+</button>
  </div>
  <button 
    class="inline font-bold font-[Muli] py-2 px-4 bg-green-300 flex-grow"
    @click="() => {
      addProduct({ name: product.name, price: product.price, quantity: quantity })
    }"
  >
    Add to cart
  </button>
  </div>
  <!-- <p v-else >Already added to cart. Visit <Cart /> to make changes</p> -->
<ul class="flex gap-2">
  <li v-for="color in product.variations.color" 
    :class="colorTranslation[color as keyof typeof colorTranslation]"
    class="flex items-center justify-center rounded-full font-bold text-gray-100"
    style="height: 40px; width: 40px; font-size: 16px;"
    >
    {{ color }}</li>
</ul>
<img :src="product.images[imgArr[imgPos] as keyof object]" />
<div class="flex justify-between pt-3 max-w-xs mx-auto">
  <button @click="absImgPos--" class="font-normal hover:text-green-500 hover:font-bold text-xl font-[Muli]">&lt;</button>
  <span class="font-[Muli]">{{ imgPos + 1 }}</span>
  <button @click="absImgPos++" class="font-normal hover:text-green-500 hover:font-bold text-xl font-[Muli]">></button>
</div>
</div>
</template>