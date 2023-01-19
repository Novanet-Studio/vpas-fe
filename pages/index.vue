<template>
  <h1>Index</h1>
  <project-welcome />
</template>

<script lang="ts" setup>
const config = useAppConfig();

useHead({
  titleTemplate() {
    return config.pwaManifest.name;
  },
  title() {
    return config.pwaManifest.short_name;
  },
});
</script>
