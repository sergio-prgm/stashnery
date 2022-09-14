<script setup lang="ts">
watchSmn()
const open = ref(false)

const buttonStyles = 'py-2 px-3 bg-grey-100 font-semibold block'
</script>

<template>
  <button @click="open = !open" class="font-bold text-xl">Cart</button>
  <ClientOnly>
    <Teleport to="body">
      <div v-show="open" @click.self="open = false" class="bg-slate-700/70  overflow-hidden backdrop-blur-sm w-full z-10 inset-0 absolute">
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
        <div v-for="{name, price, quantity} in useStore().value" class="text-blue-400">
          <h3>{{ name }}</h3>
          <small>Price: {{ price }}</small>
          <small class="ml-4">Quantity: {{ quantity }}</small>
          <button :class="buttonStyles" @click="removeProduct(name)">DELETE</button>
          <button :class="buttonStyles" @click="increaseQuantity(name)">+</button>
        </div>
        <strong>Total: 49.99</strong>
        </aside>
      </Transition>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
</style>