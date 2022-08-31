<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent />
    <SearchbarComponent class="border border-gray-400 block" />
    <h1 class="">Shop Layout</h1>
    <div class="mb-auto">
      <slot />
    </div>

    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from '~~/components/header.vue';
import FooterComponent from '~~/components/footer.vue';
import SearchbarComponent from '~~/components/searchbar.vue';
</script>

<style >
</style>
