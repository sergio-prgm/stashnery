<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent />
    <div class="max-w-prose mx-auto mb-auto">
      <div class="">
        <slot />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from '~/components/Header.vue';
import FooterComponent from '~/components/Footer.vue';

</script>

<style >
</style>