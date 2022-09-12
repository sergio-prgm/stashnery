<script lang="ts" setup>
import HeaderComponent from '~/components/Header.vue';
import FooterComponent from '~/components/Footer.vue';

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent />
    <h1 class="">Shop Layout</h1>
    <div class="mb-auto">
      <slot />
    </div>

    <FooterComponent />
  </div>
</template>

<style >
</style>
