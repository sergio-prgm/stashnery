<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent />
    <div class="max-w-prose mx-auto mb-auto">
      <h1 class="text-3xl font-bold">Stashnery</h1>
      <div class="">
        <slot />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from '~~/components/header.vue';
import FooterComponent from '~~/components/footer.vue';

</script>

<style >
</style>