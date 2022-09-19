<script setup lang="ts">
watchSmn()
const open = ref(false)

watch(() => useStore().value.length, (val, oldVal) => {
  console.log(val)
  if (val > oldVal) open.value = !open.value
})

defineProps({
  showCount: {
    required: false,
    type: Boolean
  }
})

const buttonStyles = 'py-1 px-2 bg-grey-100 font-semibold block'
</script>

<template>
  <button @click="open = !open" class="">Cart
    <span v-if="showCount" class="inline-block">
      <span class="text-sm font-sans leading-3 px-2 border-2 border-green-500 text-green-500 rounded-full flex items-center justify-center w-4 aspect-square">
        {{ useStore().value.filter(prod => prod.quantity > 0).length }}
      </span>
    </span>
  </button>
  <ClientOnly>
    <Teleport to="body">
      <div v-show="open" @click.self="open = false" class="bg-slate-500/40  overflow-hidden backdrop-blur-sm w-full z-10 inset-0 absolute">
      <Transition
        enter-active-class="transform duration-500 transition-all opacity-0 translate-x-40"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition opacity-100 duration-300"
        leave-to-class="opacity-0"
        >
        <aside 
          v-show="open"
          class="w-72 top-0 right-0 fixed shadow-2xl z-40 text-white h-full p-4 overflow-hidden bg-green-600">
        <button @click="open = !open" 
          class="font-bold text-3xl relative block -top-2">&times;</button>
        <div v-for="{name, price, quantity} in useStore().value" class="text-gray-100">
          <NuxtLink :to="`/product/${ name }`" ><h3>{{ name }}</h3></NuxtLink>
          <small>Price: {{ price }}</small>
          <button :class="buttonStyles" @click="removeProduct(name)">DELETE</button>
          <div class="flex justify-between">
            <div class="flex justify-between w-24 items-baseline">
              <button class="px-2 font-bold text-xl" @click="decreaseQuantity(name)">-</button>
              <p class="">{{ quantity }}</p>
              <button class="px-2 font-bold text-xl" @click="increaseQuantity(name)">+</button>
            </div>
            <p class="text-lg font-medium">{{ totalProd(name) }}€</p>
          </div>
        </div>
        <strong>Total: {{ totalCart() }}€</strong>
        </aside>
      </Transition>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
</style>