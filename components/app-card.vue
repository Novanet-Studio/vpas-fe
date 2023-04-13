<template>
  <div class="app-card">
    <nuxt-img class="app-card__image" :src="image" :alt="imageAlt" />
    <h6 class="app-card__title">{{ title }}</h6>
  </div>
</template>
<script lang="ts" setup>
type Props = {
  image: string;
  title: string;
  imageAlt: string;
};

defineProps<Props>();
</script>

<style scoped>
.app-card {
  @apply w-80
  <sm:(w-full px-4 pb-4)
  @md:(w-full px-2);
}

.app-card__image {
  @apply rounded-lg 
  xl:(h-44);
}

.app-card__title {
  @apply text-lg text-bdazzled mt-4 font-semibold border-b border-b-silver w-full pb-2;
}
</style>
