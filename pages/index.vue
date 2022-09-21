<script lang="ts" setup>
definePageMeta({
  title: 'Home Page',
  layout: 'landing'
})

</script>

<template>
  <div>
  <header
    class=" bg-gradient-to-tl from-green-400 via-emerald-200 to-green-50 text-center pt-8 px-5">
    <img
      src="/logo/Stash_Logo_Full.svg"
      class="h-20 mx-auto mb-8"
      alt="Stash full logo"
    />
    <section 
      class="grid grid-cols-1 gap-6 pb-12 items-center sm:grid-cols-2"
    >
      <div>
        <h1
          class="text-4xl font-bold mb-8" 
        >
          Where all your stationery dreams exist...
        </h1>
        <strong class="font-normal text-xl">
          Featuring a collection of items curated by our experts. Ranging from minimal to luxurious and everything in between.
        </strong>
      </div>
      <div class=" self-center justify-self-center">
        <!-- <figure class="bg-orange-400 absolute top-6 left-28 h-40 w-40" />
        <figure class="bg-emerald-300 relative h-40 w-40" /> -->
        <img src="/img/landing-muji.jpg" class="border border-white w-full oveflow-hidden object-cover max-w-md"/>
      </div>
    </section>
  </header>

  <nuxt-link 
    to="/shop"
    class="py-4 px-10 transition duration-1000 bg-gradient-to-tl from-green-500 to-green-400 hover:from-green-400 hover:to-green-500 text-white text-xl font-bold box-border my-10 block w-fit mx-auto">
    Visit the shop
  </nuxt-link>
  <section>
    <header>
      <h2 class="text-center text-xl font pb-8 border-t border-green-200 w-2/3 mx-auto pt-6">We carry the biggest brands in the space:</h2>
    </header>
    <div class="flex justify-around max-w-2xl mx-auto">
      <img src="/img/brands/muji-logo.png" class="h-12 grayscale-[70%]" />
      <img src="/img/brands/moleskine-logo.png" class="h-12 grayscale-[70%]" />
      <img src="/img/brands/papersource-logo.png" class="h-12 grayscale-[70%]" />
    </div>
  </section>
  </div>
</template>
