<template>
  <project-welcome />
</template>

<script lang="ts" setup>
const config = useAppConfig();

useHead({
  titleTemplate: 'My simple title - %s',
  title() {
    return config.pwaManifest.short_name;
  }
});
</script>