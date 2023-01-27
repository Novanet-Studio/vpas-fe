<template>
  <article>
    <header>My articulo - {{ $route.params.slug }}</header>
  </article>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'article',
});
</script>
