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
