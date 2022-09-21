<script setup lang="ts">
watchSmn()

defineProps({
  showCount: {
    required: false,
    type: Boolean
  }
})

watch(() => useOpen().value, (val) => {

})

const buttonStyles = 'py-1 px-2 bg-grey-100 font-semibold block'
</script>

<template>
  <button @click="useOpen().value = !useOpen().value" class="">Cart
    <span v-if="showCount" class="inline-block">
      <span class="text-sm font-sans leading-3 px-2 border-2 border-green-500 text-green-500 rounded-full flex items-center justify-center w-4 aspect-square">
        {{ useStore().value.filter(prod => prod.quantity > 0).length }}
      </span>
    </span>
  </button>
  <ClientOnly>
    <Teleport to="body">
      <div
        v-show="useOpen().value"
        @click.self="useOpen().value = false"
        class="bg-slate-500/40 overflow-hidden backdrop-blur-sm w-full z-10 inset-0 fixed"
      >
      <Transition
        enter-active-class="transform duration-500 transition-all opacity-0 translate-x-40"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition opacity-100 duration-300"
        leave-to-class="opacity-0"
        >
        <aside 
          v-show="useOpen().value"
          class="w-72 top-0 right-0 fixed shadow-2xl z-40 text-white h-full p-4 overflow-hidden bg-green-600">
        <button @click="useOpen().value = !useOpen().value" 
          class="font-bold text-3xl relative block -top-2">&times;</button>
        <div
          v-for="{name, price, quantity} in useStore().value"
          class="text-gray-100 mb-4 border-b border-green-300 pb-2"
        >
          <NuxtLink :to="`/product/${ name }`" ><h3>{{ name }}</h3></NuxtLink>
          <div class="flex justify-between items-end mb-2 font-[Muli]">
            <small class="">{{ price }}€</small>
            <button
              @click="removeProduct(name)"
              class="font-bold"
            >
              &times;
            </button>
          </div>
          <div class="flex justify-between font-[Muli]">
            <div class="flex justify-between w-24 items-baseline">
              <button class="px-2 font-bold text-xl" @click="decreaseQuantity(name)">-</button>
              <p class="">{{ quantity }}</p>
              <button class="px-2 font-bold text-xl" @click="increaseQuantity(name)">+</button>
            </div>
            <p class="text-lg font-medium">{{ totalProd(name) }}€</p>
          </div>
        </div>
        <strong class="font-[Muli]">Total: {{ totalCart() }}€</strong>
        <NuxtLink
          to="/checkout"
          class="block bg-green-100 mt-2 text-black hover:bg-green-50 font-bold w-full text-center py-2"
        >
          Proceed to checkout
        </NuxtLink>
        </aside>
      </Transition>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
</style>