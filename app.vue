<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const t = useI18n();

onMounted(() => {
  const browserLang = navigator.language.substring(0, 2);
  t.locale.value = browserLang;
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
