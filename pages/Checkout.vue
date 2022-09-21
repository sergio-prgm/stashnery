<script setup lang="ts">
watchSmn()

definePageMeta({
  layout: 'checkout'
})

interface Form {
  email: string,
  firstName: string,
  lastName: string,
  address: string,
  city: string,
  postalCode: number,
  phone: number
}

const formInfo = ref({
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  postalCode: '',
  phone: ''
})

const formErrors = ref({
  email: 
    {required: true},
  firstName: 
    {required: true},
  lastName: 
    {required: true},
  address: 
    {required: true},
  city: 
    {required: true},
  postalCode: 
    {required: true},
  phone: 
    {}
})

const onSubmit = () => {
  // TODO make this a foreach (or some kind of iteration) to display where the error is
  if (Object.values(formInfo.value).some(val => !val)) {
    console.log('Theres been an error')
    return
  }
  console.log('form', formInfo.value)
}


const shipping = totalCart() < 30
  ? 3.5
  : 0

</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2">
    <section class="p-2 order-last sm:order-first">
      <form @submit.prevent="onSubmit">
      <h2>Contact information</h2>
        <label>Email
          <input
            type="email"
            class="border block"
            v-model="formInfo.email" 
          />
        </label>
        <h2>Shipping Address</h2>
        <label>First Name
          <input
            type="text"
            class="border block"
            v-model="formInfo.firstName" 
          />
        </label>
        <label>Last Name
          <input
            type="text"
            class="border block"
            v-model="formInfo.lastName"
          />
        </label>
        <label>Address
          <input
            type="text"
            class="border block"
            v-model="formInfo.address"
          />
        </label>
        <label>City
          <input
            type="text"
            class="border block"
            v-model="formInfo.city"
          />
        </label>
        <label>Postal Code
          <input
            type="number"
            class="border block"
            v-model="formInfo.postalCode"
          />
        </label>
        <label>Phone Number
          <input
            type="number"
            class="border block"
            v-model="formInfo.phone"
          />
        </label>
        <button
          type="submit"
          class="py-2 w-full font-bold bg-green-200 mt-4 hover:bg-green-300"
        >Checkout</button>
      </form>
    </section>

    <div v-if="useStore().value.some(prod => prod.name === 's')">
      Loading shopping cart information...
    </div>
    <section v-else class="bg-gray-100 p-2 border-l border-gray-300">
      <h2>Purchase summary</h2>
      <ul class="my-4">
        <li 
          v-for="{ name, price, quantity } in useStore().value" 
          class="border-b py-2"
          >
          <h3>{{ name}}</h3>
          <div class="flex justify-between w-full ">
            <span class="num">{{ quantity + ' x ' + price.toFixed(2) }}€</span>
            <span
              class="font-bold num">{{
              totalProd(name).value.toFixed(2)
              }}
              €</span>
          </div>
        </li>
      </ul>
      <span class="flex justify-between text-sm">
        Shipping: 
        <strong class="num text-base">
          {{ shipping.toFixed(2) }} €
        </strong>
      </span>
      <span class="flex justify-between text-sm">Subtotal: <strong class="num font-[600] text-base">{{ totalCart().toFixed(2) }} €</strong></span>
      <span class="flex justify-between mt-2">Total: <strong class="text-xl font-[900] num">{{ (totalCart() + shipping).toFixed(2) }} €</strong></span>
    </section>
  </div>
</template>

<style>
h2 {
  @apply font-bold text-xl mb-4
}

.num {
  @apply font-[Muli]
}
</style>