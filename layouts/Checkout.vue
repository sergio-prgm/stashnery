<template>
  <div class="flex flex-col min-h-screen mt-4">
    <div class="max-w-prose mx-auto mb-auto">
      <h1><img src="/logo/Stash_Logo_Full.svg" class="h-20 mx-auto" /></h1>
      <div class="mt-6">
        <slot />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import FooterComponent from '~/components/Footer.vue';

</script>

<style >
</style>