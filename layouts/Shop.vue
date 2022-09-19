<script lang="ts" setup>
import HeaderComponent from '~/components/Header.vue';
import FooterComponent from '~/components/Footer.vue';

</script>

<template>
  <div class="flex flex-col min-h-screen px-3 sm:px-4">
    <HeaderComponent />
    <div class="mb-auto">
      <slot />
    </div>

    <FooterComponent />
  </div>
</template>

<style >
</style>
