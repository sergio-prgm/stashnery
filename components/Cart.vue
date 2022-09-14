<script setup lang="ts">

watchSmn()

const buttonStyles = 'py-2 px-3 bg-grey-100 font-semibold block'
</script>

<template>
  <div>
    <div v-for="{name, price, quantity} in useStore().value">
      <h3>{{ name }}</h3>
      <small>Price: {{ price }}</small>
      <small class="ml-4">Quantity: {{ quantity }}</small>
      <button :class="buttonStyles" @click="removeProduct(name)">DELETE</button>
      <button :class="buttonStyles" @click="increaseQuantity(name)">+</button>
    </div>
    <strong>Total: 49.99</strong>
  </div>
</template>
