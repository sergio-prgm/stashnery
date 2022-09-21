<script setup lang="ts">

</script>

<template>

<footer class=" w-full py-4 bg-white md:px-6 md:py-8 dark:bg-gray-900">
  <div class="sm:flex sm:items-center sm:justify-between">
    <div class="flex items-center mb-4 sm:mb-0">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><img src="/logo/Stash_Logo_Full.svg" alt="Stash Logo" class="h-8" /></span>
    </div>
    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
      <li>
        <NuxtLink href="/" class="mr-4 hover:underline md:mr-6 ">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink href="/about" class="mr-4 hover:underline md:mr-6 ">About</NuxtLink>
      </li>
      <li>
        <NuxtLink href="/shipping" class="mr-4 hover:underline md:mr-6 ">Shipping</NuxtLink>
      </li>
    </ul>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
  <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://sergioej.dev/" class="hover:underline" target="_blank" rel="roreferrer noopener">Sergio Esteve™</a>. All Rights Reserved.
  </span>
</footer>

</template>