<script setup lang="ts">
definePageMeta({
  layout: 'shop'
})

const {api} = await $fetch('/api/hello')

</script>

<template>
  <h2>Shop here!!!</h2>
  <p>{{api}}</p>
</template>
